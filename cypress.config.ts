// import { defineConfig } from 'cypress';

// Populate process.env with values from .env file
// require('dotenv').config();

// export default defineConfig {
export default {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.REACT_APP_GOOGLE_CLIENTID = '1651324181-ra4bdq8rm1rnrmc3649u6rgvlphm4tfr.apps.googleusercontent.com'
      config.env.REACT_APP_GOOGLE_CLIENT_SECRET = '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'
      config.env.GOOGLE_REFRESH_TOKEN = '1//04N8KV4JFW-kcCgYIARAAGAQSNwF-L9Ir6lVP4S93ZR7DGY0UiTzn8W4TWW4toIR6v98Oztb1xlhDLvEQWDjcTmaNw2Iio43b8fU'
      // on('task', myTask),
    },
    env: {
      googleRefreshToken: "1//04N8KV4JFW-kcCgYIARAAGAQSNwF-L9Ir6lVP4S93ZR7DGY0UiTzn8W4TWW4toIR6v98Oztb1xlhDLvEQWDjcTmaNw2Iio43b8fU",
      googleClientId: "1651324181-ra4bdq8rm1rnrmc3649u6rgvlphm4tfr.apps.googleusercontent.com",
      googleClientSecret: "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"
    }

  }

  // ,

  // env: {
  //   googleClientId: '1651324181-ra4bdq8rm1rnrmc3649u6rgvlphm4tfr.apps.googleusercontent.com',
  //   googleClientSecret: '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',
  //   googleRefreshToken: '1//04erw4SpzqDR8CgYIARAAGAQSNwF-L9IrdYF7ox0qTzq6yztjuPEUis7ViHos0wYVajwy6r-ML8lQLOiPi2J_H97I_22jZiT0CgU',
  // }
};


