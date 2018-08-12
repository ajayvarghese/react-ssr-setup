const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  rules: [
    {
      test: /\.test\.js$/,
      use: [
        { loader: 'file-loader' },
      ],
    },
    {
      test: /\.(md|ttf|txt|eot|ico|otf|svg|png|gif|woff2|woff|jpg|jpeg(2)?)(\?[a-z0-9]+)?$/,
      exclude: [/demo-files/],
      use: [
        { loader: 'file-loader' },
      ],
    },
    {
      test: /\.html$/,
      loader: 'url-loader',
      exclude: [/node_modules/, /demo-files/, /index.html/],
    },
    // {
    //   test: /\.css$/,
    //   exclude: [/global.css/, /flaticon.css/],
    //   use: ExtractTextPlugin.extract({
    //     fallback: 'style-loader',
    //     use: [
    //       {
    //         loader: 'css-loader',
    //         options: {
    //           modules: true,
    //           minimize: process.env.NODE_ENV === 'production',
    //           sourceMap: true,
    //           importLoaders: 1,
    //           localIdentName: '[name]__[local]___[hash:base64:5]',
    //         },
    //       },
    //       {
    //         loader: require.resolve('postcss-loader'),
    //         options: { ident: 'postcss' },
    //       },
    //     ],
    //   }),
    // },
    // {
    //   test: /\.css$/,
    //   use: ExtractTextPlugin.extract({
    //     fallback: 'style-loader',
    //     use: [
    //       {
    //         loader: 'css-loader',
    //         options: {
    //           minimize: process.env.NODE_ENV === 'production',
    //         },
    //       },
    //       {
    //         loader: require.resolve('postcss-loader'),
    //         options: { indent: 'postcss' },
    //       },
    //     ],
    //   }),
    // },
    // {
    //   test:/\.css$/,
    //   use:[
    //     'isomorphic-style-loader',
    //     {
    //       loader: 'css-loader',
    //       options: {
    //         importLoaders: 1
    //       }
    //     },
    //     'postcss-loader'
    //   ]
    // },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      })
    },
    {
      test: /\.js$/,
      exclude: [/fonts/, /\.test\.js$/],
      loader: 'babel-loader?cacheDirectory',
    },
    {
      test: /\.json$/,
      loader: 'json-loader',
    },
  ],
  exprContextRegExp: /\.\/.js^\node_modules\$/,
};