const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',

  exposes: {
    './lazyModule': './src/app/lazy/lazy.module.ts',
    './lazySecondModule': './src/app/lazy-second/lazy-second.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, eager: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
