var random = function(min, max){
    var randomNumber = Math.floor((Math.random() * max) + min);
    randomNumber = randomNumber.toString();
    return randomNumber;
};

module.exports = random;


