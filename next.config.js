const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    // Perform customizations to config
    const env = process.env.NODE_ENV || 'development';
    config.plugins.unshift(new webpack.DefinePlugin({
      'process.env.ENV': `"${env}"`,
    }));
    return config;
  },
};
