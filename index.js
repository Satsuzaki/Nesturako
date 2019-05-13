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
    member.guild.channels.get('462232742126419969').send('Bonjour ' + member + ', bienvenue au lycée **Alafia** :tada::hugging: !')
});

/* Commandes Embed */
bot.on("message", function(message) 
{
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {
        case "regle":
        if (message.author.id === "213322033692409857") 
        {
            const embed = 
            {
                    "title": ":exclamation:__**Règlement**__:exclamation:",
                    "description": "La communauté possède un règlement qui se doit d’être respecté, afin de maintenir une bonne ambiance au sein du serveur. Toute infraction au règlement résultera à une sanction adaptée à la gravité de vos actes. Le staff se réserve le droit s’il en juge nécessaire, de sanctionner tout comportement incorrect, même si celui-ci ne rentre pas dans le règlement.",
                    "color": 9109504,
                    "footer": 
                    {
                    "text": "PS: Les règles sont sujettes à adaptations et changements dans le futur, si vous avez une quelconque suggestion sur celle-ci. Faites en part par message privé au membre du conseil, merci."
                    }
                };
                message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
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
                "color": 9109504,
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
            message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
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
                "color": 9109504,
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
            message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
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
                "color": 9109504,
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
            message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
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
                "color": 9109504,
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
            message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
        } 
        else 
        {
            message.channel.send('Pas la permission') 
        }
        break;
        case "infoclasse":
        if (message.author.id === "213322033692409857") 
        {
            const embed = 
            {
                "description": "Voici quelques explications sur les classe qui compose notre lycée",                
                "color": 7722751,
                "fields": 
                [
                    {
                    "name": "__📘 Classe-E__",
                    "value": "• Classe du début (peu de permission, **1 club**)"
                    },
                    {
                    "name": "__📙 Classe-D__",
                    "value": "• Lvl 7 (accès à l'extérieur du lycée + Add-on n°1, **2 club**)"
                    },
                    {
                    "name": "__📗 Classe-C__",
                    "value": "• Lvl 14 (possibilité d'accès au <#468462827838111772> -> Add-on n°2, **2 club**)"
                    },
                    {
                    "name": "__📕 Classe-B__",
                    "value": "• Lvl 21 (Add-on n°3, **3 club**)"
                    },
                    {
                    "name": "__📒 Classe-A__",
                    "value": "• Lvl 28 (possibilité d'accès à toutes les classes en dessous, **3 club**)"
                    },
                    {
                    "name": "__📓 Classe-S__",
                    "value": "• Classe disponible sous candidature du serveur"
                    }
                ]
            };
        message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
        } 
        else 
        {
            message.channel.send('Pas la permission') 
        }
        break;
        case "infoclub":
        if (message.author.id === "213322033692409857") 
        {
            const embed = 
            {
                "description": "Voici quelques explications sur les clubs présent dans notre lycée",
                "color": 7722751,
                "fields": 
                [
                    {
                    "name": "__🗾 Otaku__",
                    "value": "• Pour tous les Otakus"
                    },
                    {
                    "name": "__🎮 Gamer__",
                    "value": "• Pour toutes les personnes cherchant des potes pour jouer"
                    },
                    {
                    "name": "__🎬 Cinéphile__",
                    "value": "• Pour tous les mordus du 7ème Art"
                    },
                    {
                    "name": "__💻 Geek__",
                    "value": "• Si vous êtes intéressé par les nouvelles technologie"
                    },
                    {
                    "name": "__🎹 Musicien__",
                    "value": "• Venez partager vos musiques préférées, voir même vos créations"
                    },
                    {
                    "name": "__🎨 Artiste__",
                    "value": "• Vous aimez les dessins, la peinture, ce club est fait pour vous"
                    },
                    {
                    "name": "__⚽ Sportif__",
                    "value": "• Pour les commentateurs/chroniqueurs en herbe"
                    }
                ]
            };
            message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
        } 
        else 
        {
            message.channel.send('Pas la permission') 
        }
        break;
        case "infoimp":
        if (message.author.id === "213322033692409857") 
        {
            const embed = 
            {
                "title": "__**Comité et Conseil des élèves**__",
                "color": 7722751,
                "fields": 
                [
                    {
                    "name": "__🎤 Animateur__",
                    "value": "• Lvl 30: Coordonne les événements avec un organisateur (membre du Comité)"
                    },
                    {
                    "name": "__🛡️ Surveillant__",
                    "value": "• Lvl 35: Modérateur des channels vocal/textuel (membre du Comité)"
                    },
                    {
                    "name": "__📅 Organisateur__",
                    "value": "• Création et coordination des événements (membre du Comité)"
                    },
                    {
                    "name": "__📰 Journaliste/📁 Conseiller/💰 Trésorier/💼 Vice-président/📱 Président__",
                    "value": "• Staff (membre officiel du Conseil)"
                    }
                ]
            };
            message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
        } 
        else 
        {
            message.channel.send('Pas la permission') 
        }
        break;
        case "infospec":
        if (message.author.id === "213322033692409857") 
        {
            const embed = 
            {
                "title": "__**Add-on**__",
                "color": 7722751,
                "footer": 
                {
                "text": "PS: De nouveaux rôles spéciaux viendront **certainement** dans le futur"
                },
                "fields": 
                [
                    {
                    "name": "__🍟 Belge__",
                    "value": "• Une frite, une fois ( <#464179763498582016> ) ?"
                    },
                    {
                    "name": "__🥖 Français__",
                    "value": "• Pour tous les Bleu, blanc, rouge ( <#464179763498582016> )"
                    },
                    {
                    "name": "__🏳️‍🌈  LGBTQ+__",
                    "value": "• Pour tous les Bleu, blanc, rouge ( <#464179763498582016> )"
                    },
                    {
                    "name": "__❤️ Love__",
                    "value": "• Un amour en tête ( <#462923891724255243> ) ?"
                    },
                    {
                    "name": "__🔞 Nsfw__",
                    "value": "• ... ( <#462923891724255243> )"
                    },
                    {
                    "name": "__📐 Etudiant__",
                    "value": "• Si vous cherchez des conseils, de l'aide pour vos études ( <#462923891724255243> )"
                    },
                    {
                    "name": "__💵 Capitaliste__",
                    "value": "• Pognon, pognon, pognon ( <#462923863995580416> )"
                    },
                    {
                    "name": "__⭐ Communiste__",
                    "value": "• Crie STALINE ( <#462923863995580416> ) !"
                    },
                    {
                    "name": "__👮🏻 Fasciste__",
                    "value": "• Hail Hydra ( <#462923863995580416> ) !"
                    }
                ]
            };
            message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
        } 
        else 
        {
            message.channel.send('Pas la permission') 
        }
        break;
        case "infochan":
        if (message.author.id === "213322033692409857") 
        {
            const embed = 
            {
                "description": "Explication des channels, ici",
                "color": 9109504,
                "image": 
                {
                "url": "https://cdn.discordapp.com/attachments/394535366650101770/486830675480281098/Capture.PNG"
                }
            };
            message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
        } 
        else 
        {
            message.channel.send('Pas la permission') 
        }
        break;
        case "infoxp":
        if (message.author.id === "213322033692409857") 
        {
            const embed = 
            {
                "title": ":arrow_right: __**Comment XP avec Hatchi ?**__",
                "color": 7722751,
                "fields": 
                [
                    {
                    "name": ":white_small_square:__Conseil 1:__",
                    "value": "• Dès que vous postez un message, celui-ci vous donnera une valeur aléatoire en 15-25 d'xp."
                    },
                    {
                    "name": ":white_small_square:__Conseil 2:__",
                    "value": "• Pour évitez tout spam, plus le message est construit, plus il y a de chance de gagner le maximum d'xp."
                    },
                    {
                    "name": ":white_small_square:__Conseil 3:__",
                    "value": "• Pour voir votre niveau, faites **!rank** dans les channels prévus à cet effet."
                    }
                ]
            };
            message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
        } 
        else 
        {
            message.channel.send('Pas la permission') 
        }
        break;
        case "infohier":
        if (message.author.id === "213322033692409857") 
        {
            const embed = 
            {
                "title": ":arrow_right: __**Hiérarchie en place au Lycée**__",
                "color": 9109504,
                "footer": 
                {
                "text": "PS: La hiéarché n'inclue pas les add-on car ceux-ci n'apportent pas de permission en plus (la majorité)"
                },
                "fields": 
                [
                    {
                    "name": ":white_small_square:__Staff:__",
                    "value": "• Président, Vice-Président, Trésorier, Conseiller et Journaliste"
                    },
                    {
                    "name": ":white_small_square:__Comité:__",
                    "value": "• Responsable/Président de Club, Surveillant, Animateur"
                    },
                    {
                    "name": ":white_small_square:__Elite:__",
                    "value": "• Gérant du Maid-Café et classe S"
                    },
                    {
                    "name": ":white_small_square:__Membre:__",
                    "value": "• Maid, Classe A, classe B, classe C et classe E"
                    },
                    {
                    "name": ":white_small_square:__Puni:__",
                    "value": "• Mute/En retenue"
                    }
                ]
            };
            message.guild.channels.find("id", "462927679533088768").sendEmbed(embed)
        } 
        else 
        {
            message.channel.send('Pas la permission') 
        }
    break;
    case "infoPromot":
        if (message.author.id === "213322033692409857")
        {
            const embed = 
            {
                "title": "__**Passage en 📓 Classe-S**__",
                "color": 9109504,
                "footer": 
                {
                "text": "Conseil: Faites d'abord vos preuves/investissez-vous au sein de la communauté 😉"
                },
                "fields": 
                [
                    {
                    "name": "Comment passer en classe S ?",
                    "value": "• Envoyer un mp à un membre du staff suivi d'une présentation/candidature, s'il vous plait"
                    }
                ]
            };
            message.guild.channels.find("id", "462923821801013249").sendEmbed(embed)
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
    else if(message.author.id === "213322033692409857") 
    {
        const embed = new Discord.RichEmbed()
        .setTitle("__**Sondage**__")
        .addField("Question: ", tte)
        .setFooter('Réagissez par ✅ ou ❌!')
        .setColor('#FF800D')
            
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
    if (message.author.id === "213322033692409857") {
        let textsay = message.content.split(" ").slice(1);
        let btmsg = textsay.join(" ");
        message.delete().catch();
        message.channel.send(btmsg);
    }
    break;
    case "invit":
        message.channel.send('https://discord.gg/9Hy94Y4');
    break;
    case "desc":
    if (message.author.id === "213322033692409857") 
    {
        message.delete().catch();
        message.guild.channels.find("id", "462949032226979850").sendMessage("Salutation chers élèves, je me nomme Nesturako Seijuro. Je suis professeur de programmation au lycée **Alafia**. Je suis encore à mes débuts dans ma carrière d'enseignant donc si vous avez des suggetions à faire. Faites les par mp à <@213322033692409857> , s'il vous plait ^^'");
    }
    break;
    /*
    case "story":
        const embed = new Discord.RichEmbed()
        .addField('Nom du serveur:', 'Lycée **Alafia**')
        .addField('Signfication:', '"Paix" en Yoruba')
        .addField('Pourquoi ?', 'Soon 😉')
        .setColor("#D9C400")
        message.channel.sendEmbed(embed)
    break;
    */
    case "helpop":
        message.delete().catch();
        message.guild.channels.find("id", "462928491831230484").sendMessage(/*<@369914503892041730> , <@316672290479931392> ,*/"<@&462952083746717697> et <@&462952216064425984>: " + message.member.toString() + " à besoin d'aide !");
    break;
    case "ping":
        message.channel.sendMessage("Temps de latence avec le serveur: `" + `${(Date.now () - message.createdTimestamp) / 100}` + "ms`");
    break;
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

 /* Token */
bot.login(process.env.TOKEN)
