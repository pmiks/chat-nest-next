const withCSS = require('@zeit/next-css')
const dotenv = require('dotenv')
const path = require('path')
const Dotenv = require('dotenv-webpack')

dotenv.config()

module.exports = withCSS({
  env: { EXAMPLE: 'helloWorld' },
  webpack: config => {
    config.plugins = config.plugins || []

    config.node = {
      fs: 'empty',
    }

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ]

    return config
  },
})
