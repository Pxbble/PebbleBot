 const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const TOKEN = "NDE0NzYwNTk2OTYyMTQ4MzY0.DWsDlQ.NsIrD0f-KSiOOdJTobXmNgkhYRA";
const PREFIX = "!";

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = conneection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
  });
}

var bot = new Discord.Client();

var servers = {};

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "LOL NEVER",
    "Yes on so many levels",
    "Soz No",
    "Its a Yes for me",
    "Itz a no for me",
];

bot.on("ready", function() {
  console.log("Ready");
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {
    case "ping":
      message.channel.sendMessage("Pong!")
      break;
     case "dick":
      message.channel.sendMessage("8=====D")
      break;
      case "penis":
      message.channel.sendMessage("https://prnt.sc/igmtns")
      break;
      case "version":
      message.channel.sendMessage("```PebBot: Version 1.0.0```")
      break;
      case "creator":
      message.channel.sendMessage("**This bot has been created by a 12 year old kid named @_Pxbble_#9968**")
      break;
      case "bangtankook":
      message.channel.sendMessage("**is a great friend!**")
      break;
      case "help":
      message.channel.sendMessage("```You can find the bot commands in: #bot-commands! Enjoy!``` ")
      break;
      case "pebble":    
      message.channel.sendMessage("**Developer and Creator of PebBot**")
      break;
      case "8ball":
      if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
     else message.channel.sendMessage("Can't read that v soz");
     break;
     case "play":
        if(!args[1]) {
            message.channel.sendMessage("Please provide a link");
            return;
        }

        if(!message.member.voiceChannel) {
            message.channel.sendMessage("Please join a voice channel");
            return;
        }

        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        };


        var server = servers[message.guild.id]

        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
            play(connection, message);

            
        });
         break;
        case "skip":
            var server = servers[message.guild.id];

            if (server.dispatcher) server.dispatcher.end();
            break;
        case "stop":
            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect
                case "help":
        var embed = new Discord.RichEmbed()
                .addField("<+>------------[- » 𝐏𝐞𝐛𝐁𝐨𝐭 « -]------------<+>")
                .addField("𝐈𝐧𝐟𝐨 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬")
                .addField("» !version")
                .addField("» !creator")
                .setColor(bef9fb)
                .setFooter("Enjoy and don't abuse!")
            .setDescription("");
            break;
         default:
         message.channel.sendMessage("That command does not exist! Put that in #command-request and Pebble will try to make it x3");

   }
});

bot.login(TOKEN);
