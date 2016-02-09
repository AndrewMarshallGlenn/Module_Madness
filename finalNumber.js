var random = require('./random');
var usd = require('./usd');

var randomUSD = function(){
    return usd(random(100, 1000000));
};

var textReturn = function(){
    return 'Account balance: \n'
};

exports.randomUSD = randomUSD;
exports.textReturn = textReturn;