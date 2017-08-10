const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, "build");
const APP_DIR = path.resolve(__dirname, "src");

const config = {
  entry: ["index.tsx"],
  resolve: {
    modules: [APP_DIR, "node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ["awesome-typescript-loader?useBabel=true&useCache=true"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.ejs"
    })
  ]
};

module.exports = config;
