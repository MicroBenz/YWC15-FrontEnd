const _DEV_ = process.env.NODE_ENV !== 'production';

console.log('ENVIRONMENT:', process.env.NODE_ENV);

const commonConfig = {
  port: 3001,
};

const developmentConfig = {
  SLACK_WEB_HOOK: 'https://hooks.slack.com/services/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'
};

const productionConfig = {
  SLACK_WEB_HOOK: 'https://hooks.slack.com/services/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'
};

module.exports = Object.assign(commonConfig, _DEV_ ? developmentConfig : productionConfig);
