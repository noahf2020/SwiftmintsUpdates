const delay = require('delay');
const bing = require('./bing')
const figlet = require('figlet')


async function yurt(){
    await console.log(figlet.textSync('Swift Mints', {
        horizontalLayout: 'default',
        verticalLayout: 'default',
    }));
  
  
}

yurt()