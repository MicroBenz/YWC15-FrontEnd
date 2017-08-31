const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    const env = process.env.NODE_ENV || 'development';
    config.plugins.unshift(new webpack.DefinePlugin({
      'process.env.ENV': `"${env}"`,
    }));
    return config;
  },
};
