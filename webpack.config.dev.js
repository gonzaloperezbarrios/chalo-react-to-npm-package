const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "dev-test/App.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: ["file-loader", "url-loader"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  node: {
    fs: "empty"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dev-test"),
    port: 9000
  }
};
