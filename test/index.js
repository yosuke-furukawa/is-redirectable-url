const assert = require('assert')
const isRedirectableUrl = require('..')

assert(isRedirectableUrl('/') === true)
assert(isRedirectableUrl('/foo') === true)
assert(isRedirectableUrl('bar') === true)
assert(isRedirectableUrl('http://evil.co.jp') === false)
assert(isRedirectableUrl('//evil.co.jp') === false)
assert(isRedirectableUrl('/ /evil.co.jp') === true)
