const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require('path');

module.exports = function (env, argv) {
  return {
    mode: 'production',
    entry: {
      app:'./src/app.js'
    },
    resolve: {
      alias: {
        jquery: "jquery/src/jquery"
      }
    },
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin()
      ]
    }
    ,
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Pedalo',
        filename:'index.html',
        chunks: ['app'],
        template: path.resolve('./src/index.html')

      }),
      new HtmlWebpackPlugin({
        title: 'Pedalo',
        filename:'overview.html',
        chunks: ['app'],
        template: path.resolve('./src/overview.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Pedalo',
        filename:'detail.html',
        chunks: ['app'],
        template: path.resolve('./src/detail.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Pedalo',
        filename:'cart.html',
        chunks: ['app'],
        template: path.resolve('./src/cart.html')
      }),
      new HtmlWebpackPlugin({
        title: 'Pedalo',
        filename:'contact.html',
        chunks: ['app'],
        template: path.resolve('./src/contact.html')
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(woff|woff2|ttf|otf|eot)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath:'fonts/',
                esModule: false,
              }
            }
          ]
        },
        {
          test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: 'images/',
                name: "[name].[ext]",
                esModule: false,
              },
            },

          ],
        },

        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          }
        },
      ]
    }
  };
}
