/**
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
  siteUrl: 'https://mac-vo.github.io/MAC-VI',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
