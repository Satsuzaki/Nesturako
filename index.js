/* Annonce des constances */
const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = '&';
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
            .setColor('#FF800D')
            
            message.guild.channels.find("id", "480075582340595744").sendEmbed(embed)
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
        const embed = {
            "title": ":exclamation:__**Règlement**__:exclamation: ",
            "description": "La communauté possède un règlement qui se doit d’être respecté, afin de maintenir une bonne ambiance au sein du serveur. Toute infraction au règlement résultera à une sanction adaptée à la gravité de vos actes. Le staff se réserve le droit s’il en juge nécessaire, de sanctionner tout comportement incorrect, même si celui-ci ne rentre pas dans le règlement.",
            "color": 9109504,
            "footer": {
                "text": "PS: Les règles sont sujettes à adaptations et changements dans le futur, si vous avez une quelconque suggestion sur celle-ci. Faites en part par message privé au membre du conseil, merci."
            },
            "fields": [
                {
                "name": ":white_small_square:__Les règles générales (s’appliquent en vocal et à l’écrit)__",
                "value": "Sont interdits les comportements suivants (le non-respect de ces interdictions peuvent s’ensuivre d’un ban):                                                         • Le troll et le raid.                                                                                                 • Tout comportement discriminatoire/haineux/insultant (homophobie, racisme, sexisme, etc…)                                                                                      • Tout message ou photo de profil à caractère pornographique, pédophile (sauf dans <#468462827838111772>).                                                                                                                • Toutes les formes de harcèlement.                                                                • Le partage d’informations privées sans le consentement de la personne concernée.                                                                                                     • Le contournement de mute, ban, et autres sanctions."
                },
                {
                "name": ":white_small_square:__Les règles des salons textuels__",
                "value": "• Evitez d’utiliser le langage SMS.                                                                      • Les insultes, y compris vis-à-vis de vos amis, ne sont pas tolérées.       • Il est interdit de spam, le bot peut vous mute automatiquement si ce n’est pas un modérateur qui s’en occupe.                                                       • N’abusez pas des mentions inutiles d’une ou plusieurs personnes.        • Evitez d’utiliser les majuscules pour écrire un message, cela équivaut à crier et pourrait déranger les autres membres du serveur.                       • Utilisez les salons appropriés (<#463025770483417097>, <#462960550641664011>, etc…)"
                },
                {
                "name": ":white_small_square:__Les règles des salons vocaux__",
                "value": "• Il est interdit d’insulter dans les salons vocaux, même après une énième défaite sur League of Legends.                                                            • Il est interdit de faire des bruits pouvant nuire aux tympans des personnes présentes dans le salon.                                                                   • Eviter de parler dans le salon musique lorsque vous y entrez, certaines personnes écoutent leurs musiques calmement et ne souhaitent pas être dérangées.                                                                                                      • Il est interdit de switch de salon de façon répétée dans le seul but de générer une notification sonore à ceux présents dans le salon.                  • L’utilisation de SoundBox est prohibée."
                },
                {
                "name": ":white_small_square:__Les règles concernant la publicité__",
                "value": "Sont proscrits les types de publicité suivantes:                                              • Vers d’autres serveurs discord.                                                                       • Pour vos serveurs de jeu (si la demande n'a pas été accepté par un membre du conseil).                                                                                              • En message privé si elle n’est pas sollicitée par la personne recevant le message."
                }
            ]};
           
            message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
        } else {
            message.channel.send('Pas la permission') 
        }
        break;
        case "inforole":
        if (message.author.id === "213322033692409857") {
        const embed = {
            "title": ":video_game: __**Rôles**__ :art:",
            "description": "Voici quelques explications sur les rôles qui compose les différentes permissions/récompenses disponible sur le serveur",
            "color": 7722751,
            "footer": {
              "text": "PS: De futurs rôles spéciaux feront certainement leur apparition."
            },
            "fields": [
              {
                "name": ":white_small_square:__Les classes__",
                "value": "@📘 Classe-E: Classe du début (peu de permission)                                                         @📙 Classe-D: Lvl 5 (possibilité d'aller à l'extérieur du lycée)                                                                                               @📗 Classe-C: Lvl 10 (accès au <#468462827838111772>)                                                                                                  @📕 Classe-B: Lvl 15 (accès à des rôles spéciaux)                                                                                                             @📒  Classe-A: Lvl 20 (permission à venir)                                                                @📓 Classe-S: Lvl 30 (rentrée non-obligatoire au Conseil de discipline)"
              },
              {
                "name": ":white_small_square:__Les clubs__",
                "value": "@🗾 Otaku: Pour tous les Otakus                                                                            @🎮 Gamer: Pour toutes les personnes cherchant des potes pour jouer        @📜 Rôleplayer: Si vous aimez les rencontres Rp. A vous de créez                                                       @🎬 Cinéphile: Pour tous les mordus du 7ème Art                                             @🌄Naturologue: Si vous attachez une importance à la nature (zoologie, herbologie, ...)                                                                                                                  @🎹 Musicien: Venez partager vos musiques préférées, voir même vos créations                                                                                                                           @🎨 Artiste: Vous aimez les dessins, la peinture, ce club est fait pour vous @⚽ Sportif: Pour les commentateurs/chroniqueurs en herbe                         @⛔ Spammer: Venez spam (**vous ne pouvez pas xp partout**)"
              },
              {
                "name": ":white_small_square:__Rôles importants__",
                "value": "@🎤 Animateur: Lvl 35 (création d'event temporaire)                                        @📅 Organisateur: Lvl 40 (création d'event & membre du Conseil)               @🛡️ Surveillant: Modérateur des channels vocal/textuel (membre du Comité)                                                                                                                             @📁 Conseiller/@💰 Trésorier/@💼 Vice-président/@📱 Président: Staff (membre officiel du Conseil)"
              },
              {
                "name": ":white_small_square:__Rôles spéciaux__",
                "value": "@❤️ Love: Un amour en tête ?                                                                                  @🥖 Français: Pour tous les Bleu, blanc, rouge                                                                        @🍟 Belge: Parce qu'on ne mange pas que des frites (pas tout le temps)                                                                                             @📐 Etudiant: Si vous cherchez des conseils, de l'aide pour vos études"
              }
            ]
          };
          message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
        } else {
            message.channel.send('Pas la permission') 
        }
        break;
        case "soon":
        if (message.author.id === "213322033692409857") {
            const embed = new Discord.RichEmbed()
                .setTitle("**__Soon__**")
                .setDescription("L'explication des channels vocal/textuel arrivera bientôt.")
                .setColor('#8B0000')
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
            .setColor("#D9C400")
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
            .setColor("#D9C400")
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
        .setColor("#D9C400")
        message.channel.sendEmbed(embed) 
    }
})
bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {
    case "jfk":
        const embed = new Discord.RichEmbed()
        .addField("__Club otaku:__ ", "- :japan:")
        .addField("__Club du jeu-vidéo:__ ", "- :video_game:")
        .addField("__Club de rôleplay:__ ", "- :scroll:")
        .addField("__Club du cinéma:__ ", "- :clapper:")
        .addField("__Club nature:__ ", "- :sunrise_over_mountains:")
        .addField("__Club de musique:__ ", "- :musical_keyboard: ")
        .addField("__Club d'art:__ ", "- :art:")
        .addField("__Club sportif:__ ", "- :soccer:")
        .addField("__Club de spammer:__ ", "- :no_entry:")
        .addField("__Etudiant:__ ", ":triangular_ruler:")
        .setColor("#75D6FF")
        message.channel.sendEmbed(embed)
      }
})
bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {  
    case "clubrole":
        const embed = new Discord.RichEmbed()
        .addField('__Club otaku:__', "  :japan:", true)
        .addField('__Club du jeu-vidéo:__', ":video_game:", true)
        .addField('__Club de rôleplay:__', ":scroll:", true)
        .addField('__Club du cinéma:__', ":clapper:", true)
        .addField('__Club nature:__', ":sunrise_over_mountains:", true)
        .addField('__Club de musique:__' , ":musical_keyboard: ", true)
        .addField("__Club d'art:__" , ":art:", true)
        .addField('__Club sportif:__', ":soccer:", true)
        .addField('__Club de spammer:__', ":no_entry:", true)
        .addField('__Etudiant:__', ":triangular_ruler:",true )
        .setFooter('❗️ Rejoignez que 2 clubs maximum ❗️')
        .setColor("#75D6FF")
        message.channel.sendEmbed(embed)
    }
})
   
 /* Token */
bot.login(process.env.TOKEN)
