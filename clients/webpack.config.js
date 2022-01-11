const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  plugins: [
    // HTML
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  // change the entry point
  entry: { index: path.resolve(__dirname, "source", "index.js") },
  // change instead the output of our bundle
  output: {
    path: path.resolve(__dirname, "build")
  },
  // webpack's loaders
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  // Code splitting with optimization.splitChunks
  optimization: {
    splitChunks: { chunks: "all" }
  },
}