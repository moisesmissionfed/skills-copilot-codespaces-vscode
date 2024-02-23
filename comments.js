// Create a web server

var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var comments = [];

var server = http.createServer(function(req, res) {
  var urlObj = url.parse(req.url, true);
  var pathname = urlObj.pathname;
  if (pathname === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), function(err, data) {
      if (err) {
        res.end('read file index.html error');
      }
      res.end(data);
    });
  } else if (pathname === '/comment') {
    var comment = urlObj.query;
    comments.push(comment);
    res.end(JSON.stringify(comments));
  } else {
    fs.readFile(path.join(__dirname, pathname), function(err, data) {
      if (err) {
        res.end('read file error');
      }
      res.end(data);
    });
  }
});

server.listen(8080, function() {
  console.log('server is listening on 8080');
});
```

###