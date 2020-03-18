/* Annonce des constances */
const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = '&';

/* Lancement du Bot */
bot.on('ready', () => {
    console.log('Bot activé')
    bot.user.setGame("en cours d'informatique quantique")
});

/* Message de Bienvenue */
bot.on('guildMemberAdd', member => {
    console.log('User ' + member.user.username + ' a rejoint le serveur!')
    member.guild.channels.get('462232742126419969').send("Bonjour " + member + " et bienvenue dans la cité Etat d'**Alafia** :tada::hugging: !")
});

/* Commandes Embed */
bot.on("message", function(message) 
{
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) 
    {
        case "regle0":
        if (message.author.id === "213322033692409857") 
        {
            const embed = 
            {
                    "title": ":exclamation:__**Règlement**__:exclamation:",
                    "description": "La communauté possède un règlement qui se doit d’être respecté, afin de maintenir une bonne ambiance au sein du serveur. Toute infraction au règlement résultera à une sanction adaptée à la gravité de vos actes. Le staff se réserve le droit s’il en juge nécessaire, de sanctionner tout comportement incorrect, même si celui-ci ne rentre pas dans le règlement.",
                    "color": 0x7f0000,
                    "footer": 
                    {
                    "text": "PS: Les règles sont sujettes à adaptations et changements dans le futur, si vous avez une quelconque suggestion sur celle-ci. Faites en part par message privé au membre du conseil, merci."
                    }
                };
                message.guild.channels.find("id", "631395951671771149").sendEmbed(embed)
            } 
            else 
            {
                message.channel.send('Pas la permission') 
            }
        break;
        case "regle1":
        if (message.author.id === "213322033692409857") 
        {
            const embed = 
            {
                "title": ":arrow_right: __Les règles générales (s’appliquent en vocal et à l’écrit)__",
                "description": "Sont interdits les comportements suivants (le non-respect de ces interdictions peuvent s’ensuivre d’un ban)",
                "color": 0x7f0000,
                "fields": 
                [
                    {
                    "name": ":white_small_square:__Règle 1:__",
                    "value": "• Le troll et le raid."
                    },
                    {
                    "name": ":white_small_square:__Règle 2:__",
                    "value": "• Tout comportement discriminatoire/haineux/insultant (homophobie, racisme, sexisme, etc…)."
                    },
                    {
                    "name": ":white_small_square:__Règle 3:__",
                    "value": "• Tout message ou photo de profil à caractère pornographique, pédophile (sauf dans <#468462827838111772>)."
                    },
                    {
                    "name": ":white_small_square:__Règle 4:__",
                    "value": "• Toutes les formes de harcèlement."
                    },
                    {
                    "name": ":white_small_square:__Règle 5:__",
                    "value": "• Le partage d’informations privées sans le consentement de la personne concernée."
                    },
                    {
                    "name": ":white_small_square:__Règle 6:__",
                    "value": "• Le contournement de mute, ban, et autres sanctions."
                    },
                    {
                    "name": ":white_small_square:__Règle 7:__",
                    "value": "• Exploitation de failles consciemment est interdite !"
                    },
                ]
            };
            message.guild.channels.find("id", "631395951671771149").sendEmbed(embed)
        } 
        else 
        {
            message.channel.send('Pas la permission') 
        }
        break;
        case "regle2":
        if (message.author.id === "213322033692409857") 
        {
            const embed = 
            {
                "title": ":arrow_right: __Les règles des salons textuels__",
                "color": 0x7f0000,
                "fields": 
                [
                    {
                    "name": ":white_small_square:__Règle 8:__",
                    "value": "• Evitez d’utiliser le langage SMS."
                    },
                    {
                    "name": ":white_small_square:__Règle 9:__",
                    "value": "• Les insultes, y compris vis-à-vis de vos amis, ne sont pas tolérées."
                    },
                    {
                    "name": ":white_small_square:__Règle 10:__",
                    "value": "• Il est interdit de spam, le bot peut vous mute automatiquement si ce n’est pas un modérateur qui s’en occupe."
                    },
                    {
                    "name": ":white_small_square:__Règle 11:__",
                    "value": "• N’abusez pas des mentions inutiles d’une ou plusieurs personnes."
                    },
                    {
                    "name": ":white_small_square:__Règle 12:__",
                    "value": "• Evitez d’utiliser les majuscules pour écrire un message, cela équivaut à crier et pourrait déranger les autres membres du serveur."
                    },
                    {
                    "name": ":white_small_square:__Règle 13:__",
                    "value": "• Utilisez les salons appropriés pour le spam (<#463025770483417097>, <#462960550641664011>, etc…)"
                    }
                ]
            };
            message.guild.channels.find("id", "631395951671771149").sendEmbed(embed)
        } 
        else 
        {
            message.channel.send('Pas la permission') 
        }
        break;
        case "regle3":
        if (message.author.id === "213322033692409857") 
        {
            const embed = 
            {
                "title": ":arrow_right: __Les règles des salons vocaux__",
                "color": 0x7f0000,
                "fields": 
                [
                    {
                    "name": ":white_small_square:__Règle 14:__",
                    "value": "• Il est interdit d’insulter dans les salons vocaux, même après une énième défaite sur League of Legends."
                    },
                    {
                    "name": ":white_small_square:__Règle 15:__",
                    "value": "• Il est interdit de faire des bruits pouvant nuire aux tympans des personnes présentes dans le salon."
                    },
                    {
                    "name": ":white_small_square:__Règle 16:__",
                    "value": "• Eviter de parler dans le salon musique lorsque vous y entrez, certaines personnes écoutent leurs musiques calmement et ne souhaitent pas être dérangées."
                    },
                    {
                    "name": ":white_small_square:__Règle 17:__",
                    "value": "• Il est interdit de switch de salon de façon répétée dans le seul but de générer une notification sonore à ceux présents dans le salon. "
                    },
                    {
                    "name": ":white_small_square:__Règle 18:__",
                    "value": "• L’utilisation de SoundBox est prohibée."
                    }
                ]
            };
            message.guild.channels.find("id", "631395951671771149").sendEmbed(embed)
        } 
        else 
        {
            message.channel.send('Pas la permission') 
        }
        break;
        case "regle4":
        if (message.author.id === "213322033692409857")
        {
            const embed = 
            {
                "title": ":arrow_right: __Les règles concernant la publicité__",
                "description": "Sont proscrits les types de publicité suivantes:",
                "color": 0x7f0000,
                "fields": 
                [
                    {
                    "name": ":white_small_square:__Règle 19:__",
                    "value": "• Vers d’autres serveurs discord."
                    },
                    {
                    "name": ":white_small_square:__Règle 20:__",
                    "value": "• Pour vos serveurs de jeu (si la demande n'a pas été accepté par un membre du conseil)."
                    },
                    {
                    "name": ":white_small_square:__Règle 21:__",
                    "value": "• En message privé si elle n’est pas sollicitée par la personne recevant le message."
                    }
                ]
            };
            message.guild.channels.find("id", "631395951671771149").sendEmbed(embed)
        } 
        else 
        {
            message.channel.send('Pas la permission') 
        }
        break;
        case "descrole":
        if (message.author.id === "213322033692409857") 
        {
            const embed = 
            {
                "title": "__**Info des rôles sur le serveur**__",
                "color": 0xff7f00,
                "fields": 
                [
                    {
                    "name": "__💎 Chef de la Cité__",
                    "value": "• Le Chef de la Cité est le rôle, le plus important de notre communauté. Il a le droit de tout faire sur le serveur, rentrant dans le cadre des règles qui dirige notre Bourgade."
                    },
                    {
                    "name": "__💼 Conseiller__",
                    "value": "• Le Conseiller a pour ambition de répondre à vos questions, de vous aider lors de votre séjour dans notre merveilleuse Cité. Cependant, c'est principalement vers lui que les autres membres du Gourvernement viennent chercher des conseils pour le différents projets."
                    },
                    {
                    "name": "__💰 Boursier__",
                    "value": "• Le Boursier est comme son nom l'indique celui qui gère l'économie de notre ville et c'est donc lui qui organise la plupart de nos événements pour continuer à améliorer la prospérité de celle-ci."
                    },
                    {
                    "name": "__🛡️ Général__",
                    "value": "• Le Général est le plus grand symbole d'allégence aux règles qui régissent notre Cité, c'est de son devoir de les faire respecter et c'est aussi à lui d'encadrer les différents événements."
                    },
                    {
                    "name": "__📣 Informateur__",
                    "value": "• L'Informateur vous tiendra au courant de toutes les petites nouveautés en tout genre, établient au jour le jour."
                    },
                    {
                    "name": "__🖨️ Gérant__",
                    "value": "• Les Gérants sont chacuns propriétaires d'un voir plusieurs batiments. C'est eux qui organisent l'activité des nombreuses centre de loisirs que contient la Cité."
                    },
                    {
                    "name": "__📁 Secrétaire__",
                    "value": "• Les Secrétaires sont les hommes à tout faire de la Cité. Ils servent principalement à aider le Gouvernement dans la gestion de celle-ci."
                    },
                    {
                    "name": "__📗 Elitiste__",
                    "value": "• Les Elitistes, la définition même de la plus haute distinction possible au sein de notre peuple. Seul les membres ayant contribuer à l'évolution de la Cité peuvent espérer un jour, en faire partie (= sous-candidature des comtes)."
                    },
                    {
                    "name": "__🔰 Comte__",
                    "value": "• Les Comtes, ils sont la preuve vivante qu'un simple roturier peut un jour rêver d'accéder à la noblesse ce qui leurs laissent droit à certains privilèges."
                    },
                    {
                    "name": "__🛠️ Bourgeois__",
                    "value": "• Les Bourgeois composent la majeur partie de la communauté. Ils sont le ciment de toutes civilisations dont la nôtre."
                    },
                    {
                    "name": "__⚒️ Roturier__",
                    "value": "• Vous venez de découvrir notre belle Cité ? Ne serait-ce vous pas Roturier ? Je pense que c'est bien le cas, si ça ne vous satisfait, nous vous laissons la chance de faire vos preuves."
                    },
                    {
                    "name": "__🔖  Adhérents__",
                    "value": "• Les Adhérents sont les déscendants membres d'une ancienne organisation qui se retrouve de temps en temps autour d'une boisson chaude pour discuter."
                    },
                    {
                    "name": "__👮‍ Prisonnier__",
                    "value": "• Les Prisionners sont nos membres qui ont commis le plus d'infractions au sein de la communauté et qui se doivent d'être puni."
                    }
                ]
            };
            message.guild.channels.find("id", "631395951671771149").sendEmbed(embed)
        } 
        else 
        {
            message.channel.send('Pas la permission') 
        }
        break;
        case "addon":
        if (message.author.id === "213322033692409857") 
        {
            const embed = 
            {
                "title": "__**Add-on**__",
                "color": 0xff7f00,
                "fields": 
                [
                    {
                    "name": "__🍟 Belge__",
                    "value": "• Une frite, une fois ?"
                    },
                    {
                    "name": "__🥖 Français__",
                    "value": "• Pour tous les Bleu, blanc, rouge"
                    },
                    {
                    "name": "__🏳️‍🌈  LGBTQ+__",
                    "value": "• Vive les couleurs !"
                    },
                    {
                    "name": "__❤️ Love__",
                    "value": "• Un amour en tête?"
                    },
                    {
                    "name": "__🔞 Nsfw__",
                    "value": "• ..."
                    },
                    {
                    "name": "__💵 Capitaliste__",
                    "value": "• Pognon, pognon, pognon"
                    },
                    {
                    "name": "__⭐ Communiste__",
                    "value": "• Crie STALINE !"
                    },
                    {
                    "name": "__⚔️ Fasciste__",
                    "value": "• Hail Hydra !"
                    }
                ]
            };
            message.guild.channels.find("id", "631395951671771149").sendEmbed(embed)
        } 
        else 
        {
            message.channel.send('Pas la permission') 
        }
        break;
        case "hierarchie":
        if (message.author.id === "213322033692409857") 
        {
            const embed = 
            {
                "title": ":arrow_right: __**Hiérarchie en place dans la Cité**__",
                "color": 0xff7f00,
                "fields": 
                [
                    {
                    "name": ":white_small_square:__Gourvenement :__",
                    "value": "• Chef de la cité, Conseiller, Boursier, Informateur et Général"
                    },
                    {
                    "name": ":white_small_square:__Haut Membre :__",
                    "value": "• Gérant des magasins et Elitiste"
                    },
                    {
                    "name": ":white_small_square:__Membre :__",
                    "value": "• Comte, Bourgeois et Roturier"
                    },
                    {
                    "name": ":white_small_square:__Sous-peuple :__",
                    "value": "• Mute/En prison"
                    }
                ]
            };
            message.guild.channels.find("id", "631395951671771149").sendEmbed(embed)
        } 
        else 
        {
            message.channel.send('Pas la permission') 
        }
    }
})
/* Commandes Utiles */

bot.on("message", function(message) 
    {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) 
    {
    case "poll":
    let args = message.content.split(" ").slice(1);
    let tte = args.join(" ")
    if (!tte) 
    {
        message.channel.send('Rentrez une question') 
    } 
    else if(message.author.id === "213322033692409857" || message.author.id === "316672290479931392" || message.author.id === "335050982046040065" || message.author.id === "269530258267439115" || message.author.id === "316673507922804736") 
    {
        const embed = new Discord.RichEmbed()
        .setTitle("__**Sondage**__")
        .addField("Question: ", tte)
        .setFooter('Réagissez par ✅ ou ❌!')
        .setColor('3447003')
            
        message.guild.channels.find("id", "480075582340595744").sendEmbed(embed)
        .then(function (message){ 
        message.react("✅") 
        message.react("❌") 
        }) 
    } 
    else 
    {
        message.channel.send('Pas la permission') 
    }
    break;  
    case "say":
    if (message.author.id === "213322033692409857" || message.author.id === "316672290479931392" || message.author.id === "335050982046040065" || message.author.id === "269530258267439115" || message.author.id === "316673507922804736") {
        let textsay = message.content.split(" ").slice(1);
        let btmsg = textsay.join(" ");
        message.delete().catch();
        message.channel.send(btmsg);
    }
    break;
    case "invit":
        message.channel.send('https://discord.gg/2ZHnp9T');
    break;
    /*case "desc":
    if (message.author.id === "213322033692409857") 
    {
        message.delete().catch();
        message.guild.channels.find("id", "462949032226979850").sendMessage("Salutation chers élèves, je me nomme Nesturako Seijuro. Je suis professeur de programmation au lycée **Alafia**. Je suis encore à mes débuts dans ma carrière d'enseignant donc si vous avez des suggetions à faire. Faites les par mp à <@213322033692409857> , s'il vous plait ^^'");
    }
    break;
    case "helpop":
        message.delete().catch();
        message.guild.channels.find("id", "462928491831230484").sendMessage(<@335050982046040065> , <@316672290479931392> ,"<@&462952083746717697> et <@&462952216064425984>: " + message.member.toString() + " à besoin d'aide !");
    break;*/
    case "ping":
        message.channel.sendMessage("Temps de latence avec le serveur: `" + `${(Date.now () - message.createdTimestamp) / 100}` + "ms`");
    /*break;
    case "serv":
        const embed = new Discord.RichEmbed()
        .setDescription ("**Information du Discord**")
        .addField("__Nom du discord:__ ", message.guild.name)
        .addField("Créer le ", "13 Décembre 2017")
        .addField("Tu as rejoins le ", message.member.joinedAt)
        .addField("__Utilisateur sur le discord:__ ", message.guild.memberCount)
        .setColor("3447003")
        message.channel.sendEmbed(embed)
        */
    }
})

/* Token */
bot.login(process.env.TOKEN)
