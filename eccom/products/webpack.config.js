const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
  mode: "development",
  devServer: {
    port: '8081'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: "remoteEntry.js",
      exposes: {
        // './ProductsIndex': '/src/index',

        // Because bootstrap is the file that export 'mount'
        './ProductsIndex': '/src/bootstrap',
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
