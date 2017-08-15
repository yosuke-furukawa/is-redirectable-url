'use strict'
const url = require('url')
const SAFEHOST = 'https://example.com'

module.exports = function (path) {
  const result = url.parse(url.resolve(SAFEHOST, path))
  return result.href.indexOf(SAFEHOST) >= 0
}
