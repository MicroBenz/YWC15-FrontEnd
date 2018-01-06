const commonConfig = {
  isProduction: false,
  apiPath: 'https://staging.api.ywc15.ywc.in.th',
  facebookAppsID: '-------------',
  gaTrackingID: 'UA-103240510-1',
  port: 3000,
  baseURL: 'https://staging.ywc15.ywc.in.th',
  ggDriveUpload: {
    a: 'https://drive.google.com/drive/folders/1ZFV9zP7vTEF5_Pa1kxOCWn_j9XURHrck?usp=sharing',
    b: 'https://drive.google.com/drive/folders/1IZh6C4zAdSq9G1iq_Wd6D77-JDQIL_75?usp=sharing',
    c: 'https://drive.google.com/drive/folders/1lGDu_4mJUBmjOUrR-jvh7yrMU_Ro0ugc?usp=sharing',
    d: 'https://drive.google.com/drive/folders/16PgebSQF1Qy15wq2_mC9G75o5sGh0Wm9?usp=sharing',
    e: 'https://drive.google.com/drive/folders/1X3Qq-wzPXlQFlx0OX_n4nYW0n6eMi0cw?usp=sharing',
    f: 'https://drive.google.com/drive/folders/1vytlH6jYiBP6uY2R8zFOXgl4qHsn4pa_?usp=sharing',
    g: 'https://drive.google.com/drive/folders/1gBT-Q-PHVkekMaq7gBKkW_fVY8DYDivs?usp=sharing',
    h: 'https://drive.google.com/drive/folders/1zBJrD5M9IEE69-BubsPabwKKN962aNhN?usp=sharing',
    i: 'https://drive.google.com/drive/folders/1cP4SSiWA5c9BMmcOmXd9FsaZe8xBbYNk?usp=sharing'
  }
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
