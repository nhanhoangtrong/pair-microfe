const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  reactStrictMode: true,
  webpack: (baseConfig, options) => {
    console.log('Webpack version', options.webpack.version);
    const { isServer } = options;

    const customConfig = {
      ...baseConfig,
      plugins: [
        ...baseConfig.plugins,
        new ModuleFederationPlugin({
          name: 'ssr-app',
          remotes: {
            header: `header@//3002-ivory-dragonfly-7isuc9ux.ws-us18.gitpod.io/${isServer ? 'node' : 'web' }/remote.js`
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: '17.0.2',
              eager: true
            },
            "react-dom": {
              singleton: true,
              requiredVersion: '17.0.2',
              eager: true
            }
          }
        })
      ]
    };

    return customConfig;
  },
};
