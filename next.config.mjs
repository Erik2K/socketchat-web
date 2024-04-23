/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // async rewrites () {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: `${process.env.API_URL}/:path*`
  //     }
  //   ]
  // },
  async redirects () {
    return [
      {
        source: '/',
        missing: [
          {
            type: 'cookie',
            key: 'session'
          }
        ],
        permanent: false,
        destination: '/auth/signin'
      },
      {
        source: '/auth/:path*',
        has: [
          {
            type: 'cookie',
            key: 'session'
          }
        ],
        permanent: false,
        destination: '/'
      }
    ]
  }
}

export default nextConfig
