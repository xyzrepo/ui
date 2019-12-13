module.exports = function preinstallSemanticUI (moduleOptions) {
  // install npm packages
  const isInstalled = require('is-installed')
  const dependencies = ['fomantic-ui-css', 'jquery', 'fs-extra']
  consola.info(`${moduleOptions.namespace} # NPM Packages : INSTALLING...`)
  const missingPackages = []
  dependencies.forEach(npmPkg => {
    if (isInstalled(npmPkg)) {
      consola.info(moduleOptions.namespace, `# ${npmPkg} :: SKIP INSTTALLATION`)
    } else {
      missingPackages.push(npmPkg)
    }
  })
  require('child_process').execSync(
    `npm install ${missingPackages.join(' ')}`,
    {
      stdio: 'ignore'
    }
  )
  consola.success(`${moduleOptions.namespace} # NPM packages : DONE.`)
}
module.exports.meta = require('../../package.json')
