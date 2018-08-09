

const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ game: { name: `Gamimension`, type : 0}});
  console.log(`Logged in as ${client.user.tag}!`);
});

// Phrases classiques et tests

client.on('message', message => {

  if (message.content === '!zhog') {
    message.reply('zhog est un pgm !');
  }

  if (message.content === 'what is love ?') {
    message.channel.send('Baby dont hurt me https://www.youtube.com/watch?v=gncqM46-QaI');
  }

  if (message.content === '!volesprits') {
    message.channel.send('Volesprits, il suce des canapées et lèche des glottes toute la journée !');
  }
});

// Indicateur arrivée/départ du serveur


client.on("guildMemberAdd", member => {
  member.guild.channels.find("name", "log").send(`Salut **${member}** ! Bienvenue chez Gamimension :ok_hand: !`);
});

client.on("guildMemberRemove", member => {
  member.guild.channels.find("name", "log").send(`**${member}** viens de nous quitter.`);
});


// site teso

client.on('message', message => {
	
  if (message.content === '!setteso') {
    
	var embed = new Discord.RichEmbed()
	
      .setColor(`#2478bf`)
      .setTitle("Gamimension")
      .setDescription("Page du site concernant les sets de TESO")
      .addField("Sets loot", "https://www.gamimension.fr/teso-sets-lootables/")
      .addField("Sets craft", "https://www.gamimension.fr/teso-sets-craftables/")
      .addField("Sets tête/épaules", "https://www.gamimension.fr/teso-les-sets-tete-epaules/")
      .setFooter("En cas de pages manquantes, merci de contacter Zhog.")
    
	message.channel.send(embed);
  }
});

//personnages teso


client.on('message', message => {
  if (message.content === '!zhog37') {
    var embed = new Discord.RichEmbed()
      .setColor(`#2478bf`)
      .setTitle("Zhog37")
      .setDescription("Personnages de Zhog37")
      .addField("Zhog", "Lame noire vigueur PvP")
      .addField("Zhaïna", "Lame noire magique PvP")
      .addField("Suppositoire", "Templier magique PvP")
      .setFooter("Pour ajouter vos personnages, merci de contacter Zhog.")
    message.channel.send(embed);
  }
});


//Token

client.login(process.env.TOKEN);
