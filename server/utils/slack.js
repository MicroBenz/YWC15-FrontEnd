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

module.exports = {
  sendTestMessage: () => sendMessage({
      "text": "I am a test message http://slack.com",
      "attachments": [
          {
              "text": "And here’s an attachment!"
          }
      ]
  }),
  sendMessage: (message) => sendMessage(message),
  triggerRegister: () => sendMessage({
    text: ':writing_hand: Someone has begin registration for <<Role>>'
  }),
  completeRegistration: () => sendMessage({
    text: ':tada: <<User>> <<Role>> has completed registration!'
  })
}
