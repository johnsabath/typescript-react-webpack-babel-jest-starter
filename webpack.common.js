const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, "lib");
const APP_DIR = path.resolve(__dirname, "src");

module.exports = {
  mode: "production",
  entry: ["index.tsx"],
  resolve: {
    modules: [APP_DIR, "node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: "[hash].[name].js",
    chunkFilename: "[chunkhash].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: APP_DIR,
        loaders: [
          { loader: "babel-loader" },
          { loader: "ts-loader", options: { transpileOnly: true } }
        ]
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)(\?\S*)?$/,
        include: APP_DIR,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["lib"], { verbose: false }),
    new ForkTsCheckerWebpackPlugin()
  ]
};
