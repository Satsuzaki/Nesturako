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
   
 /* Token */
bot.login(process.env.TOKEN)
