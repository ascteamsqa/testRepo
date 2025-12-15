import { defineConfig } from 'cypress'
import fs from 'fs'
import { allureCypress } from 'allure-cypress/reporter'

export default defineConfig({
  e2e: {
    baseUrl: 'https://acemoneytransfer.com',
    testIsolation: true,

    setupNodeEvents(on, config) {
      // Allure reporter
      allureCypress(on, config, {
        resultsDir: 'allure-results',
      })

      // Custom log task
      on('task', {
        log(message) {
          fs.appendFileSync('cypress/logs/test.log', message + '\n')
          return null
        },
      })

      return config
    },
  },
})
