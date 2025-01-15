/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.stimulationclick.com', // 请替换为你的实际网站URL
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.stimulationclick.com/sitemap.xml',
    ],
  },
} 