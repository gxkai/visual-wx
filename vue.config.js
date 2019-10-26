'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = defaultSettings.title
module.exports = {
  pluginOptions: {
    moment: {
      locales: [
        'zh-cn'
      ]
    },
    mock: { entry: './mock/index.js', debug: false, disable: false }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    port: 8081,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}
