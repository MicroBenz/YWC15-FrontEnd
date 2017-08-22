const commonConfig = {
  isProduction: false,
  apiPath: 'http://staging.api.ywc15.ywc.in.th',
  facebookAppsID: '134784707110171',
  gaTrackingID: 'UA-103240510-1',
  port: 3000,
};

const environmentConfig = {
  development: {},
  staging: {
    isProduction: true,
    port: 12345,
  },
  production: {
    isProduction: true,
    apiPath: 'http://api.ywc15.ywc.in.th',
    facebookAppsID: '715340261988670',
    gaTrackingID: 'UA-103240510-2',
    port: 12346
  }
};

module.exports = Object.assign(
  commonConfig,
  environmentConfig[process.env.ENV || process.env.NODE_ENV || 'development']
);
