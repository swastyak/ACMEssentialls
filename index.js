const {App} = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  endpoints: {
     events: '/slack/events',
     commands: '/slack/commands' 
   }
});
//const https = require('https')
//const options = {
//  hostname: 'https://slack.com/api/users.list',
//  token: process.env.SLACK_BOT_TOKEN,
//  method: 'GET',
//  headers: {
//   'Content-Type': 'application/x-www-form-urlencoded'
//  },
//}

(async() => {
  await app.start(process.env.PORT || 3000);
})();

app.event('app_home_opened', ({ event, say }) => {  
    say(`Hello, <@${event.user}>!`);
});

app.event('app_mention', ({ event, say }) => {  
    say(`What's up, <@${event.user}>!`);
});

app.event('app_uninstalled', ({ event, say }) => {  
    say(`Goodbye cruel world!`);
});

app.event('member_joined_channel', ({ event, say }) => {  
  say(`Welcome, <@${event.user}>! Use /bothelp to see what I can do!`);
});
app.event('member_left_channel', ({ event, say }) => {  
  say(`Hasta la vista, <@${event.user}>!`);
});


//Testing some stuff below
app.command('/bothelp', async ({ command, ack, say }) => {
  ack();
  say(`Need help? These are all the commands that I can execute!
/acm
/acmucr
/meetings
/membership
/checkin
/email
/social
`);
});

app.command('/acm', async ({ command, ack, say }) => {
  ack();
  say(`Check out the ACM website! \n https://acm.org`);
});

app.command('/acmucr', async ({ command, ack, say }) => {
  ack();
  say(`Check out our ACM club website! \n https://acmucr.org`);
});

app.command('/meetings', async ({ command, ack, say }) => {
  ack();
  say(`ACM general meetings for Fall 2019 occur on even-numbered weeks, Mondays from 5-6PM in Winston Chung Hall 127.`);
});

app.command('/membership', async ({ command, ack, say }) => {
  ack();
  say(`Official ACM members enjoy perks like: \n  • Unrestricted 24/7 card access \n  • Priority access to ACM events \n  • Free ACM t-shirt \n  • Mock interview program access \n  • Mentorship program access \n  • ACM badge eligibility \n All for $20/year!`);
});

app.command('/checkin', async ({ command, ack, say }) => {
  ack();
  say(`Check in for meetings here! \n https://acmucr.org/checkin`);
});

app.command('/email', async ({ command, ack, say }) => {
  ack();
  say(`You can email us here! \n contact@acmucr.org`);
});

app.command('/social', async ({ command, ack, say }) => {
  ack();
  say(`• Facebook: https://www.facebook.com/groups/acm.at.ucr/ \n • Instagram: https://www.instagram.com/acm_ucr/`);
});

// app.command('/thanos', async ({ command, ack, say }) => {
//   ack();
//   const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', d => {
//     say(d.toString());
//   })
// })
//   // var list = app.users.list;
//   // say(list.length);
//   // for (var i = 0; i < list.length; i++){
//   //   say(`loop iterates`);
//   //}
// });