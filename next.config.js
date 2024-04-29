/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/uk', // можна змінити на іншу мову, якщо потрібно
            permanent: true,
          },
        ];
      },
}
const withNextIntl = require('next-intl/plugin')(
  
)
module.exports = withNextIntl(nextConfig);

