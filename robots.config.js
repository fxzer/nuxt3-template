export default [
  { UserAgent: '*' },
  { Disallow: 'www.xxxx.com/docs/' },
  { BlankLine: true },
  {
    Comment:
      'Site map: indicate the structure of the site, and the search engine saves crawling time',
  },
  { Sitemap: 'https://www.xxx.com/sitemap.xml' },
]
