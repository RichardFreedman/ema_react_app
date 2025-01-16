const { override } = require('customize-cra');

module.exports = override(
  (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'fs': require.resolve('fs-browserify'),
      'path': require.resolve('path-browserify'),
    };
    return config;
  }
);
