import webpack from 'webpack'
module.exports = function postinstallSemanticUI (moduleOptions) {
  consola.info(`${moduleOptions.namespace} # jQuery :: INSTALLING...`)
  this.addPlugin({
    src: require.resolve('jquery/dist/jquery.min'),
    fileName: 'jquery.js',
    ssr: false,
    mode: 'client',
    options: moduleOptions
  })
  // Expose jQuery
  consola.info(`${moduleOptions.namespace} # jQuery :: INITIALIZING...`)
  this.options.build.plugins = [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      _: 'lodash'
    })
  ]
  consola.success(`${moduleOptions.namespace} # jQuery :: DONE.`)
  // Add Semantic UI Javascript Library
  consola.info(
    `${moduleOptions.namespace} # Semantic UI JavaScript Library :: INSTALLING...`
  )
  this.addPlugin({
    src: require.resolve('fomantic-ui-css/semantic.min'),
    fileName: 'semantic.js',
    ssr: false,
    mode: 'client',
    options: moduleOptions
  })
  consola.success(
    `${moduleOptions.namespace} # Semantic UI JavaScript :: DONE.`
  )
  consola.info(
    `${moduleOptions.namespace} # Semantic UI StyleSheet :: INSTALLING...`
  )
  this.options.head.link.push({
    rel: 'stylesheet',
    href: '/semantic/semantic.min.css'
  })
  consola.success(
    `${moduleOptions.namespace} # Semantic UI StyleSheet :: DONE.`
  )
}
module.exports.meta = require('../../package.json')
