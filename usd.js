var usd = function(inputNum){
    var number = parseInt(inputNum);
    number = number.toLocaleString('en-EN', { style: 'currency', currency: 'USD' });
return number;
};

module.exports = usd;

