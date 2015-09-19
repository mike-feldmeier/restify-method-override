# restify-method-override
Simple method override for [Restify](http://restify.com/).  I just wanted something simple to provide query-based method overrides in Restify, but after digging through a few different places that almost had the right solution, I decided to just write something up real quick to save others the search.

This module allows one to replace a restful method with one specified in a query string.  This can be easier in some cases than using a true method.

## Example
`GET /path?_method=POST` becomes `POST /path`

## Usage
```js
var methodOverride = require('restify-method-override');
var server = restify.createServer();
server.pre(methodOverride({ key: '_method' ));
```

## Options
The configuration object is optional

### key
Specifies what query key to use.  Defaults to '_method'.
