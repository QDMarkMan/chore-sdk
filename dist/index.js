(function () {
  'use strict';

  function addUrlParam(url, name, value) {
      url += (url.indexOf('?') === -1 ? '?' : '&');
      url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
      return url;
  }
  //# sourceMappingURL=url.js.map

  console.log('http.js');
  var demo = addUrlParam('aaa', 'demo', 'asd');
  console.log(demo);
  //# sourceMappingURL=http.js.map

  console.log('chore sdk');
  console.log('start');
  //# sourceMappingURL=index.js.map

}());
//# sourceMappingURL=index.js.map
