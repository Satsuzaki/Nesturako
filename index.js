/* Annonce des constances */
const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = '&';
const YoutubeDL = require('youtube-dl');
const Request = require('request');
/*
 * Takes a discord.js client and turns it into a music bot.
 *
 * @param client The discord.js client.
 * @param options (Optional) Options to configure the music bot. Acceptable options are:
 *                prefix: The prefix to use for the commands (default '!').
 *                global: Whether to use a global queue instead of a server-specific queue (default false).
 *                maxQueueSize: The maximum queue size (default 20).
 */
module.exports = function(client, options) {
	// Get all options.
	let GLOBAL = (options && options.global) || false;
	let MAX_QUEUE_SIZE = (options && options.maxQueueSize) || 20;

	// Create an object of queues.
	let queues = {};

	// Catch message events.
	client.on('message', msg => {
		const message = msg.content.trim();

		// Check if the message is a command.
		if (message.startsWith(PREFIX)) {
			// Get the command and suffix.
			const command = message.split(/[ \n]/)[0].substring(PREFIX.length).toLowerCase().trim();
			const suffix = message.substring(PREFIX.length + command.length).trim();

			// Process the commands.
			switch (command) {
				case 'play': return play(msg, suffix);
				case 'skip': return skip(msg, suffix);
				case 'queue': return queue(msg, suffix);
				case 'pause': return pause(msg, suffix);
				case 'resume': return resume(msg, suffix);
			}
		}
	});

	/*
	 * Gets a queue.
	 *
	 * @param server The server id.
	 */
	function getQueue(server) {
		// Check if global queues are enabled.
		if (GLOBAL) server = '_'; // Change to global queue.

		// Return the queue.
		if (!queues[server]) queues[server] = [];
		return queues[server];
	}

	/*
	 * Play command.
	 *
	 * @param msg Original message.
	 * @param suffix Command suffix.
	 */
	function play(msg, suffix) {
		// Make sure the user is in a voice channel.
		if (msg.author.voiceChannel === null) return client.sendMessage(msg, wrap('You\'re not in a voice channel.'));

		// Make sure the suffix exists.
		if (!suffix) return client.sendMessage(msg, wrap('No video specified!'));

		// Get the queue.
		const queue = getQueue(msg.server.id);

		// Check if the queue has reached its maximum size.
		if (queue.length >= MAX_QUEUE_SIZE) {
			return client.sendMessage(msg, wrap('Maximum queue size reached!'));
		}

		// Get the video information.
		client.sendMessage(msg, wrap('Searching...')).then(response => {
			// If the suffix doesn't start with 'http', assume it's a search.
			if (!suffix.toLowerCase().startsWith('http')) {
				suffix = 'gvsearch1:' + suffix;
			}

			// Get the video info from youtube-dl.
			YoutubeDL.getInfo(suffix, ['-q', '--no-warnings', '--force-ipv4'], (err, info) => {
				// Verify the info.
				if (err || info.format_id === undefined || info.format_id.startsWith('0')) {
					return client.updateMessage(response, wrap('Invalid video!'));
				}

				// Queue the video.
				client.updateMessage(response, wrap('Queued: ' + info.title)).then(() => {
					queue.push(info);

					// Play if only one element in the queue.
					if (queue.length === 1) executeQueue(msg, queue);
				}).catch(() => {});
			});
		}).catch(() => {});
	}
	/*
	 * Skip command.
	 *
	 * @param msg Original message.
	 * @param suffix Command suffix.
	 */
	function skip(msg, suffix) {
		// Get the voice connection.
		const voiceConnection = client.voiceConnections.get('server', msg.server);
		if (voiceConnection === null) return client.sendMessage(msg, wrap('No music being played.'));

		// Get the queue.
		const queue = getQueue(msg.server.id);

		// Get the number to skip.
		let toSkip = 1; // Default 1.
		if (!isNaN(suffix) && parseInt(suffix) > 0) {
			toSkip = parseInt(suffix);
		}
		toSkip = Math.min(toSkip, queue.length);

		// Skip.
		queue.splice(0, toSkip - 1);

		// Resume and stop playing.
		if (voiceConnection.playingIntent) voiceConnection.resume();
		voiceConnection.stopPlaying();

		client.sendMessage(msg, wrap('Skipped ' + toSkip + '!'));
	}
	/*
	 * Queue command.
	 *
	 * @param msg Original message.
	 * @param suffix Command suffix.
	 */
	function queue(msg, suffix) {
		// Get the queue.
		const queue = getQueue(msg.server.id);

		// Get the queue text.
		const text = queue.map((video, index) => (
			(index + 1) + ': ' + video.title
		)).join('\n');

		// Get the status of the queue.
		let queueStatus = 'Stopped';
		const voiceConnection = client.voiceConnections.get('server', msg.server);
		if (voiceConnection !== null) {
			queueStatus = voiceConnection.paused ? 'Paused' : 'Playing';
		}

		// Send the queue and status.
		client.sendMessage(msg, wrap('Queue (' + queueStatus + '):\n' + text));
	}

	/*
	 * Pause command.
	 *
	 * @param msg Original message.
	 * @param suffix Command suffix.
	 */
	function pause(msg, suffix) {
		// Get the voice connection.
		const voiceConnection = client.voiceConnections.get('server', msg.server);
		if (voiceConnection === null) return client.sendMessage(msg, wrap('No music being played.'));

		// Pause.
		client.sendMessage(msg, wrap('Playback paused.'));
		if (voiceConnection.playingIntent) voiceConnection.pause();
	}

	/*
	 * Resume command.
	 *
	 * @param msg Original message.
	 * @param suffix Command suffix.
	 */
	function resume(msg, suffix) {
		// Get the voice connection.
		const voiceConnection = client.voiceConnections.get('server', msg.server);
		if (voiceConnection === null) return client.sendMessage(msg, wrap('No music being played.'));

		// Resume.
		client.sendMessage(msg, wrap('Playback resumed.'));
		if (voiceConnection.playingIntent) voiceConnection.resume();
	}

	/*
	 * Execute the queue.
	 *
	 * @param msg Original message.
	 * @param queue The queue.
	 */
	function executeQueue(msg, queue) {
		// If the queue is empty, finish.
		if (queue.length === 0) {
			client.sendMessage(msg, wrap('Playback finished.'));

			// Leave the voice channel.
			const voiceConnection = client.voiceConnections.get('server', msg.server);
			if (voiceConnection !== null) client.leaveVoiceChannel(voiceConnection.voiceChannel);
		}

		new Promise((resolve, reject) => {
			// Join the voice channel if not already in one.
			const voiceConnection = client.voiceConnections.get('server', msg.server);
			if (voiceConnection === null) {
				// Check if the user is in a voice channel.
				if (msg.author.voiceChannel) {
					client.joinVoiceChannel(msg.author.voiceChannel).then(connection => {
						resolve(connection);
					}).catch(() => {});
				} else {
					// Otherwise, clear the queue and do nothing.
					queue.splice(0, queue.length);
					reject();
				}
			} else {
				resolve(voiceConnection);
			}
		}).then(connection => {
			// Get the first item in the queue.
			const video = queue[0];

			// Play the video.
			client.sendMessage(msg, wrap('Now Playing: ' + video.title)).then(() => {
				connection.playRawStream(Request(video.url)).then(intent => {
					// Catch errors in the connection.
					connection.streamProc.stdin.on('error', () => {
						// Skip to the next song.
						queue.shift();
						executeQueue(msg, queue);
					});
					connection.streamProc.stdout.on('error', () => {
						// Skip to the next song.
						queue.shift();
						executeQueue(msg, queue);
					});

					// Catch all errors.
					intent.on('error', () => {
						// Skip to the next song.
						queue.shift();
						executeQueue(msg, queue);
					});

					// Catch the end event.
					intent.on('end', () => {
						// Wait a second.
						setTimeout(() => {
							// Remove the song from the queue.
							queue.shift();

							// Play the next song in the queue.
							executeQueue(msg, queue);
						}, 1000);
					});
				}).catch(() => {});
			}).catch(() => {});
		}).catch(() => {});
	}
}
/*
 * Wrap text in a code block and escape grave characters.,
 *
 * @param text The input text.
 *
 * @return The wrapped text.
 */
function wrap(text) {
	return '```\n' + text.replace(/`/g, '`' + String.fromCharCode(8203)) + '\n```';
}





/* Lancement du Bot */
bot.on('ready', () => {
    console.log('Bot activé')
    bot.user.setGame('découvrir le monde')
});

/* Message de Bienvenue */
bot.on('guildMemberAdd', member => {
    console.log('User ' + member.user.username + ' a rejoint le serveur!')
    member.guild.channels.get('462232742126419969').send('Bonjour ' + member + ', bienvenue au lycée **Alafia** :tada::hugging: !')
});

/* Commandes Utiles */
bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {
        case "ping":
        message.channel.sendMessage("Temps de latence avec le serveur: `" + `${(Date.now () - message.createdTimestamp) / 100}` + "ms`");
        break; 
        case "poll":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte) {
            message.channel.send('Rentrez une question') 
        } else if (message.author.id === "213322033692409857" || message.author.id === "369914503892041730" || message.author.id === "316672290479931392" || message.author.id === "269530258267439115") {
            const embed = new Discord.RichEmbed()
            .setDescription("**Sondage**")
            .addField("Question: ", tte)
            .setFooter('Réagissez par ✅ ou ❌!')
            .setColor('#8B0000')
            
            message.guild.channels.find("id", "468159908953456650").sendEmbed(embed)
            .then(function (message){
            message.react("✅")
            message.react("❌")
            }) 
        } else {
            message.channel.send('Pas la permission') 
        }
        break;
        case "regle":
        if (message.author.id === "213322033692409857") {
        const embed = new Discord.RichEmbed()
            .setDescription("**__Règlement__**")
            .addField('Règle 1: ', `Restez courtois. Tout comportement portant atteinte à la bonne ambiance de la communauté et du serveur est susceptible d'être sanctionné.`)
            .addField('Règle 2: ', `Pas de spam. Le flood est toléré dans #club-de-spammer, si vous avez le rôle "Spammeur" (et dans une moindre mesure, dans les canaux des différents autres club). Les commandes bots doivent être lancées dans #spam.`)
            .addField('Règle 3: ', `Les propos et contenus inadéquats (insultants, discriminatoires, pornographiques, faisant l'apologie de la violence, d'une idéologie politique ou religieuse) sont strictement interdits.`)
            .addField('Règle 4: ', `Si vous avez été bannis du serveur Discord, vous n'êtes pas autorisés à y revenir avec un autre compte.`)
            .addField('Règle 5: ', `Concernant vos pseudonymes Discord: Pas de pseudo inapproprié ou d'usurpation d'identité, évitez d'utiliser votre prénom et votre prénom IRL.`)
            .addField('Règle 6: ', `Les décisions prises par un membre du conseil (<@&462952083746717697>, <@&462949648076636170>, <@&464388364385124353> et <@&462952216064425984>) ne sont pas négociables. `)
            .addField('Règle 7: ', `:exclamation:  Respectez le sujet de chaque channel.`)
            .addField('Règle 8: ', `Le language sms n'est pas proscris mais il doit être modérer.`)
            .addField('Règle 9: ', `Tout contenu pouvant être jugé comme choquant pour les moins de 18ans devra se trouver dans le channel <#468462827838111772>`)
            .addField('Règle 10: ', `:exclamation: Définitif: Demander à rejoindre un club (2 maximum) auprès des membres du conseil.`)
            .addField('Proposition: ', `Sachez que vous pouvez signaler tout comportement qui vous semble contraire aux Règles ou n'importe quel autre problème en contactant directement à un <@&462954827652136980> ou bien un membre du conseil par message privé.`)
            .setFooter(`PS: Les règles sont sujettes à adaptations et changements dans le futur, si vous avez une quelconque suggestion sur celle-ci. Faites en part par message privé au membre du conseil, merci.`)
            .setColor('#D9C400')
            message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
        } else {
            message.channel.send('Pas la permission') 
        }
        break;
        case "conseil":
        if (message.author.id === "213322033692409857") {
            const embed = new Discord.RichEmbed()
                .setDescription("**__Conseils__**")
                .addField('Conseil 1: ', `N'hésitez pas à mute les channels tel que le channel <#462960550641664011>/<#464056141740245012>.`)
                .setFooter(`PS: Si vous souhaitez proposer d'autres conseils pour aider la communauté et le serveur. Faites en part par message privé au membre du conseil, merci.`)
                .setColor('#D9C400')
                message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
            } else {
                message.channel.send('Pas la permission') 
            }
        break;
        case "say":
        if (message.author.id === "213322033692409857" || message.author.id === "369914503892041730" || message.author.id === "316672290479931392" || message.author.id === "269530258267439115") {
            let textsay = message.content.split(" ").slice(1);
            let btmsg = textsay.join(" ");
            message.delete().catch();
            message.channel.send(btmsg);
        }
        break;
        /*case "info":
            const embed = new Discord.RichEmbed()
            .setDescription ("**Information du Discord**")
            .addField("__Nom du discord:__ ", message.guild.name)
            .addField("Créer le ", "13 Décembre 2017")
            .addField("Tu as rejoins le ", message.member.joinedAt)
            .addField("__Utilisateur sur le discord:__ ", message.guild.memberCount)
            .setColor("#00008B")
            message.channel.sendEmbed(embed)*/
        case "desc":
        if (message.author.id === "213322033692409857") {
            message.delete().catch();
            message.guild.channels.find("id", "462949032226979850").sendMessage("Salutation chers élèves, je me nomme Nesturako Seijuro. Je suis professeur de programmation au lycée **Alafia**. Je suis encore en plein configuration par mon créateur donc si vous souhaitez m'aiderà en apprendre plus à mon sujet. Faites des suggestions sur ce que je pourrais faire, s'il vous plait ^^'");
        }
        break;
        case "help":
            const embed = new Discord.RichEmbed()
            .setDescription ("**Information sur les commandes**")
            .addField("Prefix: ", prefix)
            .addField("Invitation: ", "<prefix>invit")
            .addField("Information: ", "<prefix>info")
            .addField("Ping: ", "<prefix>ping")
            .setColor("#00008B")
            message.channel.sendEmbed(embed)
        break;
        case "ahelp":
        if (message.author.id === "213322033692409857" || message.author.id === "369914503892041730" || message.author.id === "316672290479931392" || message.author.id === "269530258267439115") {
            const embed = new Discord.RichEmbed()
            .setDescription ("**Information sur les commandes**")
            .addField("Prefix: ", prefix)
            .addField("Invitation: ", "<prefix>invit")
            .addField("Information: ", "<prefix>info")
            .addField("Ping: ", "<prefix>ping")
            .addField("Say: ", "<prefix>say")
            .addField("Sondage: ", "<prefix>poll + <question>")
            .setColor("#00008B")
            message.channel.sendEmbed(embed)
        } else {
            message.channel.send('Pas la permission')
        }
        break;
        case "invit":
            message.channel.send('https://discord.gg/9Hy94Y4');
        break;
        
    }
})
bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {
    case "serv":
        const embed = new Discord.RichEmbed()
        .setDescription ("**Information du Discord**")
        .addField("__Nom du discord:__ ", message.guild.name)
        .addField("Créer le ", "13 Décembre 2017")
        .addField("Tu as rejoins le ", message.member.joinedAt)
        .addField("__Utilisateur sur le discord:__ ", message.guild.memberCount)
        .setColor("#00008B")
        message.channel.sendEmbed(embed) 
    }
})


bot.login(process.env.TOKEN);
