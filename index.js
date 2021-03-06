'use strict'
const url = require('url')
const SAFEHOST = 'https://example.com/'

module.exports = function (path) {
  if (!path) {
    return false
  }
  const result = url.parse(url.resolve(SAFEHOST, path))
  return result.href.indexOf(SAFEHOST) == 0
}
