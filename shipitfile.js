require('dotenv').config()

module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      deployTo: '/var/www/tomgraft.dev',
      repositoryUrl: 'https://github.com/trg/tomgraft.dev-web',
    },
    production: {
      servers: process.env.PRODUCTION_SERVER,
    },
  })
}