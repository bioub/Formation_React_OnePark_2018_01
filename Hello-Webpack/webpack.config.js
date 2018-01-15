
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: (env === 'prod') ? {
         collapseWhitespace: true,
      } : false,
    }),
  ];

  if (env === 'prod') {
    plugins.push(new UglifyJsWebpackPlugin());
  }

  return {
    entry: './src/index.js',
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['env', {
                targets: {
                  browsers: ['Chrome 63']
                }
              }]]
            }
          }
        }
      ]
    }
  };
}