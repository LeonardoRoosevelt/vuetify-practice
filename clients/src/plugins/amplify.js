import Amplify from '@aws-amplify/core'

export default {
  setAmplify (config) {
    const awsConfig = {
      API: {
        endpoints: [
          {
            name: 'API',
            endpoint: process.env.VUE_APP_API
          }
        ]
      }
    }
    Amplify.configure(awsConfig)
  }
}
