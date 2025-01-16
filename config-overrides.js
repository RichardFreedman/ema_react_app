const { override, addWebpackExternals } = require('customize-cra');

module.exports = override(
  addWebpackExternals({
    verovio: 'commonjs verovio',
  }),
  // Add polyfills for fs and path
  (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'fs': false,
      'path': false,
    };
    return config;
  }
);
