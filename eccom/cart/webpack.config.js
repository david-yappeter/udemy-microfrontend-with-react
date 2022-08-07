const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: "development",
  devServer: {
    port: '8083'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: "remoteEntry.js",
      exposes: {
        // './CartShow': '/src/index',
        './CartShow': '/src/bootstrap',
      },
      shared: ['faker'],
      /* WIll only load 'faker' once no mather what happen */
      // shared: {
      //   faker: {
      //     singleton: true,
      //   }
      // }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
};
