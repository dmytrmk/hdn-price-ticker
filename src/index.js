const electron = require("electron");
const axios = require("axios");

var priceBTC = document.getElementById("priceBTC");
var priceETH = document.getElementById("priceETH");
var priceLTC = document.getElementById("priceLTC");
var priceXRP = document.getElementById("priceXRP");

function getBTC() {
  axios
    .get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=CAD")
    .then(res => {
      const cryptos = res.data.CAD;
      priceBTC.innerHTML = "$" + cryptos.toLocaleString("en");
    });
}

function getETH() {
  axios
    .get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=CAD")
    .then(res => {
      const cryptos = res.data.CAD;
      priceETH.innerHTML = "$" + cryptos.toLocaleString("en");
    });
}

function getLTC() {
  axios
    .get("https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=CAD")
    .then(res => {
      const cryptos = res.data.CAD;
      priceLTC.innerHTML = "$" + cryptos.toLocaleString("en");
    });
}

function getXRP() {
  axios
    .get("https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=CAD")
    .then(res => {
      const cryptos = res.data.CAD;
      priceXRP.innerHTML = "$" + cryptos.toLocaleString("en");
    });
}

//setInterval controls the refresh time; note in ms.

getBTC();
setInterval(getBTC, 5000);

getETH();
setInterval(getETH, 5000);

getLTC();
setInterval(getLTC, 5000);

getXRP();
setInterval(getXRP, 5000);
