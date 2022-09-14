alert ("Want to know how many Bitcoins you have? Press 'OK'!");

var priceToday = prompt ("What is Bitcoin price today?");
console.log(priceToday);


var howManyDollarsDoYouHave = prompt ("How many dollars do you have?");
console.log(howManyDollarsDoYouHave);

alert ("You can buy:: " + howManyDollarsDoYouHave / priceToday + " " + "BTC");
console.log("You can buy: " + howManyDollarsDoYouHave / priceToday + " " + "BTC");