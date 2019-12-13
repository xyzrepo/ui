const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options.xyz,
    ...moduleOptions
  }

  await this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'xyz/ui.js',
    options
  })
}

module.exports.meta = require('../package.json')
