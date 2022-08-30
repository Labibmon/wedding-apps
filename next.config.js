/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = () => {
  const serverRuntimeConfig = {
    rowSelectedAPI: {
      list: 'id, name, arrival, message'
    },
    guestUrlAPI: {
      list: 'guest'
    }
  }

	const publicRuntimeConfig = {
		baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
		apiUrl: process.env.NEXT_PUBLIC_API_URL,
  }

  return {
    serverRuntimeConfig,
    publicRuntimeConfig
  }
}