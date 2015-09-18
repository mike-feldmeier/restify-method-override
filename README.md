# restify-method-override
Simple method override for Restify.  I just wanted something simple to provide query-based method overrides in Restify, but after digging through some false information, I decided to just write something up real quick to save others the search.

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
