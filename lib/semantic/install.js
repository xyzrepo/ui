import { join, resolve } from 'path'
import { copy } from 'fs-extra'
module.exports = function installSemanticUI (moduleOptions) {
  // const command = cmd =>
  //   require('child_process').execSync(cmd, { stdio: 'inherit' })

  const options = {
    ...moduleOptions
  }
  // check for dependencies
  const installConfig = {
    source: `${this.options.rootDir}/node_modules/fomantic-ui-css`,
    destination: `${this.options.alias.static}`,
    files: {
      // source-path : destination-path
      themes: 'semantic/themes',
      components: 'semantic/components',
      'semantic.css': 'semantic/semantic.css',
      'semantic.min.css': 'semantic/semantic.min.css',
      'semantic.js': 'semantic/semantic.js',
      'semantic.min.js': 'semantic/semantic.min.js'
    }
  }
  for (const path in installConfig.files) {
    const src = join(installConfig.source, path)
    const dest = `${installConfig.destination}/${installConfig.files[path]}`
    // consola.log('path: ', path, 'src: ', src, 'dest: ', dest)

    // command(`rsync -r ${src} ${dest}`)
    copy(src, dest, function (err) {
      if (err) {
        return consola.error(err)
      }
    })
  }
}
module.exports.meta = require('../../package.json')
