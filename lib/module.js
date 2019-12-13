const { resolve, join } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options.xyz,
    ...moduleOptions
  }

  if (!options.namespace) options.namespace = 'XYZ'

  this.addModule({
    src: resolve(__dirname, 'semantic/index.js'),
    fileName: join(options.namespace),
    options
  })
  // await this.addPlugin({
  //   src: resolve(__dirname, 'plugin.js'),
  //   fileName: 'xyz/ui.js',
  //   options
  // })
}

module.exports.meta = require('../package.json')
