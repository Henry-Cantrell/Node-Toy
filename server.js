var fs = require('fs'); 
var url = require('url');
const express = require('express');
const app = express();
const port = 8080;

app.get('/index', (req,res) => {
fs.readFile('./index.html', function(err, data) {
res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();
});
});

app.get('/contact', (req,res) => {
fs.readFile('./contact-me.html', function(err, data) {
res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();
});
});

app.listen(port, () => {
console.log("App is listening on port 8080!")
});
