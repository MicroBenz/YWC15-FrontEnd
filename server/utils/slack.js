const { IncomingWebhook } = require('@slack/client');
const config = require('../config');

const url = config.SLACK_WEB_HOOK;
const webhook = new IncomingWebhook(url);

const sendMessage = (message) => (
  new Promise((resolve, reject) => {
    webhook.send(message, (err, header, statusCode, body) => {
      if (err) {
        return reject(err);
      }
      return resolve(body);
    })
  })
);

const roleSymbol = {
  programmer: ':desktop_computer: *Programmer*',
  designer: ':art: *Designer*',
  marketing: ':moneybag: *Marketing*',
  content: ':clipboard: *Content*'
};

module.exports = {
  triggerRegister: (role) => sendMessage({
    text: `:writing_hand: Someone has begin registration for ${roleSymbol[role]} (100 so far)`
  }),
  completeRegistration: (user, role) => sendMessage({
    text: `:tada: *${user}* has completed registration for ${roleSymbol[role]}  (90 so far)`
  }),
  reportRegistrationStat: () => sendMessage({
    text: `:chart_with_upwards_trend: *Registration Stat Report* | *Programmer*: 10 | *Designer*: 11 | *Content*: 12 | :*Marketing*: 13 | *Not completed*: 20
    `
  })
}
