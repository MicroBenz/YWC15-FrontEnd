const cron = require('cron');
const slack = require('./utils/slack');

const reportRegistrationStat = new cron.CronJob({
  cronTime: '0 */2 * * *',
  // cronTime: '* * * * *',  
  onTick: () => slack.reportRegistrationStat()
})

reportRegistrationStat.start();
