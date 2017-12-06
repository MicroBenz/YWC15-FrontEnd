const commonConfig = {
  isProduction: false,
  apiPath: 'https://staging.api.ywc15.ywc.in.th',
  facebookAppsID: '-------------',
  gaTrackingID: 'UA-103240510-1',
  port: 3000,
  baseURL: 'https://staging.ywc15.ywc.in.th'
};

const environmentConfig = {
  development: {},
  staging: {
    isProduction: true,
    port: 12345,
    baseURL: 'https://staging.ywc15.ywc.in.th'
  },
  production: {
    isProduction: true,
    apiPath: 'https://api.ywc15.ywc.in.th',
    facebookAppsID: '------',
    gaTrackingID: 'UA-42284958-1',
    port: 12346,
    baseURL: 'https://ywc15.ywc.in.th'
  }
};

module.exports = Object.assign(
  commonConfig,
  environmentConfig[process.env.ENV || process.env.NODE_ENV || 'development']
);
