const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")

const PATHS = {
  source: path.join(__dirname, "src/index.js"),
  dist: path.join(__dirname, "dist"),
}
const config = {
  entry: ["babel-polyfill", PATHS.source],
  output: {
    path: PATHS.dist,
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "es2015", "react", "stage-0"],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            // options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
          { loader: "file-loader", },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "public/favicon.ico",
    }),
  ],
}

module.exports = config
