/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = () => {

  const serverRuntimeConfig = {
    rowSelectedAPI: {
      list: 'id, name, arrival, message, time, pax'
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

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
        port: '',
        pathname: '/image/upload/**',
      },
    ],
  },
}