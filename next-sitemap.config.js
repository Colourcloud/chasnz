// next-sitemap.config.js

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.chasnz.org', // Replace with your site's URL
    generateRobotsTxt: true, // Generate robots.txt
    // Optional: if you have additional sitemaps or policies, add them here
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
      ],
    },
  }
  