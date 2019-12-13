const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['@xyzdev/ui'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: '@xyzdev/ui.js',
    options
  })
}

module.exports.meta = require('../package.json')
