const init = async function () {
const modulee = require('../index.js')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
let config = {}
  readline.question(`Welcome to setup of your discord bot\n\nWhat is your user ID in discord? Ex. 31283938373893\n`, (input) => {
    config.owner = input;

  readline.question(`What would you like to call your bot? Ex. AwesomeBot\n`, (input) => {
    config.name = input;
    
  readline.question(`What's your bot token? Ex. Nsjesjrujmsnefaketoken.lolsjensjems\n`, (input) => {
    config.token = input;
    
  readline.question(`What main color would you like? Ex. #fff\n`, (input) => {
    config.color = input;

  readline.question(`What prefix would you like? Ex. ll!\n`, (input) => {
    config.prefix = input;
    modulee.start(config.token,config.name,config.color,config.owner,config.prefix);
    readline.close();
        })
      })
    })
  })
})
}
init();