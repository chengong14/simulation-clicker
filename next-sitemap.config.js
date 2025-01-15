/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://simulation-clicker.vercel.app', // 请替换为你的实际网站URL
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://simulation-clicker.vercel.app/sitemap.xml',
    ],
  },
} 