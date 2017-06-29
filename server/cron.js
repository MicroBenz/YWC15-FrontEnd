const cron = require('cron');
const slack = require('./utils/slack');

const registrantCount = new cron.CronJob({
  cronTime: '* 21 * * *',
  onTick: function() {
    console.log('Registrant Count:', new Date());
  },
})

const reportRegistrationStat = new cron.CronJob({
  cronTime: '0 */2 * * *',
  onTick: () => slack.reportRegistrationStat()
})

registrantCount.start();
