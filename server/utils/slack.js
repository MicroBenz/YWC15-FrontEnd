const { IncomingWebhook } = require('@slack/client');

const url = 'https://hooks.slack.com/services/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';
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
  sendTestMessage: () => sendMessage('Hello')
}
