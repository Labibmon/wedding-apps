const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === "development",
})

module.exports = withPWA({
  serverRuntimeConfig: {
    rowSelectedAPI: {
      list: 'id, name, arrival, message, time, pax'
    },
    guestUrlAPI: {
      list: 'guest'
    }
  },

  publicRuntimeConfig: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
  }, 

  headers: {
    "X-Frame-Options": "sameorigin",
  },
});