'use strict'

var merge = require('merge');

function overrideWrapper(options) {
  var opts = merge({
    key: '_method'
  }, options);

  function overrideHandler(req, res, next) {
    req.query().split('&').forEach(function(pair) {
      var parts = pair.split('=');

      if(parts[0] === opts.key) {
        req.method = parts[1];
      }
    });

    return next();
  }

  return overrideHandler;
}

module.exports = overrideWrapper;
