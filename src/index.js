Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.omit = function (source) {
  var censored = {},
    a = arguments,
    omittedKeys = Array.isArray(a[1]) ? a[1] : Array.prototype.slice.call(a, 1);
  omittedKeys = omittedKeys.map(String); // object keys are always strings
  if (source && typeof source == 'object') {
    var sourceKeys = Object.keys(source), i = 0;
    for (i; i < sourceKeys.length; i++) {
      if (omittedKeys.indexOf(sourceKeys[i]) == -1) censored[sourceKeys[i]] = source[sourceKeys[i]];
    }
  }
  return censored;
};

