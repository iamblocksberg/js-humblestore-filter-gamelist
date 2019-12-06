var maxPrice = 10; // usd
var gameList = document.querySelectorAll(".entity-block-container");

for (var i = 0; i < gameList.length; i++) {
    var list = gameList[i];
    var priceText = list.querySelector('.price').innerHTML;
    var priceNum = priceText.replace("$", "");
    priceNum = parseFloat(priceNum);

    if (priceNum > maxPrice) {
        list.style.display = "none";
    }
}
