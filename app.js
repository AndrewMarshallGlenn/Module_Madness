var http = require('http');
var random = require('./random');
var usd = require('./usd');
var finalNumber = require('./finalNumber');

http.createServer(function(req, res){
    res.writeHead(200);
    res.write(finalNumber.textReturn() + finalNumber.randomUSD());
    res.end();
}).listen(3000);

console.log('listening on port 3000');