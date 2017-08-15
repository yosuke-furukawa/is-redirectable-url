# is-redirectable-url

Check url is redirectable to avoid open redirect vulnerability.

# How to use

```
npm install is-redirectable-url
```

```
const isRedirectableUrl = require('is-redirectable-url')
isRedirectableUrl('/') // true
isRedirectableUrl('/foo') // true
isRedirectableUrl('http://evil.co.jp') // false
isRedirectableUrl('//evil.co.jp') // false
isRedirectableUrl('/ /evil.co.jp') // true http://example.com/%20/evil.co.jp
```
