const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',

  exposes: {
    './Module': './src/app/lazy/lazy.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, eager: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
