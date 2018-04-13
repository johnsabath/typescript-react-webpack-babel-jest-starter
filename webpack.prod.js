const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
const packageJson = require("./package.json");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "/react/"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        APP_VERSION: JSON.stringify(packageJson.version)
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(false),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
});
