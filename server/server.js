var app, argv, config, express, fs, http, https, httpsPort, httpsServer, ip, options, os, port, request, server, _;

express = require('express');
request = require('request');
fs = require('fs');
http = require('http');
https = require('https');
express = require('express');
_ = require('lodash');
os = require('os');
ip = require('ip');
argv = require('optimist').argv;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

ip = argv.local ? ip.address() : argv.ip || '127.0.0.1';
port = 7070;
httpsPort = 7443;

config = {
  useHttps: false
};

app = express();

server = http.createServer(app);

server.listen(port, ip, function() {
  return console.log("Express server listening on " + ip + ":" + port);
});

if (config.useHttps) {
  options = {
    hostname: 'local.slkwrrm.com',
    key: fs.readFileSync('host.key', 'utf8'),
    cert: fs.readFileSync('host.cert', 'utf8')
  };

  httpsServer = https.createServer(options, app);
  httpsServer.listen(httpsPort, ip, function() {
    return console.log("Express https server listening on " + ip + ":" + httpsPort);
  });
}

app.use(express["static"]('build'));

app.get('*', function(req, res) {
  return res.sendfile('build/index.html');
});
