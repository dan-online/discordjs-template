const fs = require('file-system');
const ncp = require('ncp');
module.exports.start = function start(token, name, color, owner, prefix, f) {
    if(!token) throw new TypeError('A token must be provided [NsnsheNSmensjes.hSJenss], start(token, name, color, owner, prefix)');
    if(!name) throw new TypeError('A name must be provided [UltraAwesome], start(token, name, color, owner, prefix)');
    if(!color || !color.startsWith('#')) throw new TypeError('A hex color must be provided [#fffff], start(token, name, color, owner, prefix)');
    if(!owner || !parseInt(owner)) throw new TypeError('Your ID must be provided [312551747027468290], start(token, name, color, owner, prefix)');
    if(!prefix) throw new TypeError('A prefix must be provided [l!], start(token, name, color, owner, prefix)');
    var json = `
const config = {
        "ownerID": "${owner}",
        "admins": [],
        "support": [],
        "token": "${token}",
        "colour": "0x${color.slice(1)}",
        "defaultSettings" : {
            "prefix": "${prefix}",
            },
            permLevels: [
            {   level: 0,
                name: "User", 
                check: () => true
            },
            {   level: 2,
                name: "Moderator",
                check: (message) => {
                  try {
                    return (message.member.hasPermission("MANAGE_MESSAGES"));
                  } catch (e) {
                    return false;
                  }
                }
            },
          
            {   level: 3,
                name: "Administrator", 
                check: (message) => {
                  try {
                    return (message.member.hasPermission("ADMINISTRATOR"));
                  } catch (e) {
                    return false;
                  }
                }
            },
            {    level: 4,
                name: "Server Owner",
                check: (message) => message.channel.type === "text" ? (message.guild.ownerID === message.author.id ? true : false) : false
            },
            {    level: 8,
                name: "Bot Support",
                check: (message) => config.support.includes(message.author.id)
            },
          
            {   level: 9,
                name: "Bot Admin",
                check: (message) => config.admins.includes(message.author.id)
            },
            {   level: 10,
                name: "Bot Owner", 
                check: (message) => message.client.config.ownerID === message.author.id
            }
        ]
    };
module.exports = config;`
if(f) {
    fs.writeFile("../config.js", json, function (err) {
        if (err) throw err;
    });
} else {
    fs.writeFile("config.js", json, function (err) {
        if (err) throw err;
    });
}
ncp(__dirname + '/templates/commands/', 'commands/', function (err) {
    if (err) {
      throw new Error(err);
    }
   });
ncp(__dirname + '/templates/events/', 'events/', function (err) {
    if (err) {
      throw new Error(err);
    }
   });
ncp(__dirname + '/templates/index.js', 'index.js', function (err) {
    if (err) {
      throw new Error(err);
    }
   });

   const exec = require("child_process").exec;
   console.log('Downloading extra packages needed...')
   exec(`npm i --save better-sqlite-pool chalk discord.js enmap express file-system moment moment-duration-format request`, async(error, stdout) => {
       console.log(stdout)
       if(error) {
       console.log(error)
       }
   })
};