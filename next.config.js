const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
module.exports = withCss(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    cssModules: true,
    cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
  },
  basePath: '',
  reactStrictMode: false
}));