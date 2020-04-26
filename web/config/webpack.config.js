/*module.exports = (config, { env }) => {
  if (env === 'development') {
    // Add dev plugin
    module.exports.watchOptions = {
      //https://github.com/redwoodjs/redwood/issues/475#issuecomment-619498123 and https://redwoodjs.com/guides/webpack-config
      poll: 1000, // Check for changes every second https://webpack.js.org/configuration/watch/#watchoptionspoll
      aggregateTimeout: 600, // https://webpack.js.org/configuration/watch/#watchoptionsaggregatetimeout
      ignored: [
        'node_modules/**',
        'api/node_modules/**',
        'web/node_modules/**',
      ],
    }
  }
  //config.module.rules.push({...})

  return config
}
*/
