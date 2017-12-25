const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const BUILD_DIR = path.resolve(__dirname, "lib");
const APP_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: {
    app: "index.tsx"
  },
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
        loaders: ["awesome-typescript-loader?useBabel&useCache&silent"]
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(png|jpe?g|gif|ico)(\?\S*)?$/,
        include: APP_DIR,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.svg$/,
        include: APP_DIR,
        loader: "svg-inline-loader?classPrefix"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["lib"], { verbose: false }),
    new ExtractTextPlugin("[hash].styles.css")
  ]
};
