/* Annonce des constances */
const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = '&';

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

/* Lancement du Bot */
bot.on('ready', () => {
    console.log('Bot activé')
    //bot.user.setStatus('dnd')//Choisissez entre: 'Online', 'Idle', 'Invisible' et 'dnd'
    bot.user.setGame('découvrir le monde !')
});

bot.on('message', msg => {
	if (!msg.content.startsWith(prefix)) return;
	if (commands.hasOwnProperty(msg.content.toLowerCase().slice(prefix.length).split(' ')[0])) commands[msg.content.toLowerCase().slice(prefix.length).split(' ')[0]](msg);
});
bot.login(process.env.TOKEN);
