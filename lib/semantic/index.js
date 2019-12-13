import { join, resolve } from 'path'
module.exports = function semanticUI (moduleOptions) {
  const InstallSteps = ['preinstall.js', 'install.js', 'postinstall.js']
  this.nuxt.hook('builder:prepared', () => {
    for (const step of InstallSteps) {
      this.addModule({
        src: resolve(__dirname, step),
        fileName: join(step),
        options: moduleOptions
      })
    }
  })
}
