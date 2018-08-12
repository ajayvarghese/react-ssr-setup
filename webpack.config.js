const webpack = require("webpack");

const dev = process.env.NODE_ENV !== "production";
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const base = require("./webpack.base.config");
const nodeExternals = require('webpack-node-externals');

const plugins = [
  new FriendlyErrorsWebpackPlugin(),
  new ExtractTextPlugin({
    filename: "[name].[id].css",
    allChunks: true,
    disable: true,
    ignoreOrder: false
  })
];

if (!dev) {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "webpack-report.html",
      openAnalyzer: false
    })
  );
}

var client = {
  mode: dev ? "development" : "production",
  context: path.join(__dirname, "src"),
  devtool: dev ? "none" : "source-map",
  entry: {
    app: "./client.js"
  },
  resolve: {
    modules: [path.resolve("./src"), "node_modules"]
  },
  module: base,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  plugins: plugins.concat([
    new webpack.DefinePlugin({
      client: JSON.stringify(true),
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV) || "development"
      }
    })
  ])
};


// var server  = {
//   target: "node",
//   externals: [nodeExternals()],
//   devtool: "source-map",
//   entry: {
//     app: "./index.js"
//   },
//   output: {
//     path: path.resolve(__dirname, "build"),
//     filename: "[name].bundle.js"
//   },
//   module: base,
//   plugins: plugins.concat([
//     new webpack.DefinePlugin({
//       client: JSON.stringify(true),
//       "process.env": {
//         NODE_ENV: JSON.stringify(process.env.NODE_ENV) || "development"
//       }
//     }),
//     new webpack.BannerPlugin({ 
//       banner: 'require("source-map-support").install();', 
//       raw: true, 
//       entryOnly: false 
//     })
//   ]),
// }

module.exports = client;