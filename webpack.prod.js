const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJson = require("./package.json");

const common = require("./webpack.common.js");

const prodPlugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production"),
      APP_VERSION: JSON.stringify(packageJson.version)
    }
  }),
  new webpack.optimize.OccurrenceOrderPlugin(false),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$|\.html$|\.svg$/,
    threshold: 10240,
    minRatio: 0.8
  })
];

module.exports = merge(common, {
  output: {
    publicPath: "/react/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./index.ejs"
    })
  ].concat(prodPlugins)
});
