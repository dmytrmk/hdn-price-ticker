<p align="center"><img src="https://raw.githubusercontent.com/Furqan17/crypto-desk/master/img-src/updatedlogo.png"></p>

<p align="center">
  <a href="https://github.com/axios/axios"><img src="https://img.shields.io/badge/axios-0.18.0-blue.svg"></a>
  <a href="https://electronjs.org/"><img src="https://img.shields.io/badge/electron-2.0.8-blue.svg"></a>
  <a href="https://github.com/Furqan17/crypto-desk/blob/master/package.json"><img src="https://img.shields.io/badge/version-1.0.0-orange.svg"></a>
  <a href="https://technet.microsoft.com/en-us/library/bb496995.aspx"><img src="https://img.shields.io/badge/platform-win64%20%7C%20osx-brightgreen.svg" alt="ver"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-ff69b4.svg"></a>
</p>

<p align="center"> <b> A responsive desktop application displaying live <a href="https://www.cryptocompare.com/">Cryptocurrency</a> prices </b> </p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Furqan17/crypto-desk/master/img-home-src/crypto-home.PNG">
</p>

## :zap: Installation
Crypto desk **requires** _nodejs_. If you don't have it already you can download it [here.](https://nodejs.org/en/)  
**1.** Fork this repository  
**2.** clone and extract zip    
**3.** `cd` into the repo  
**4.** `npm install` to install the dependencies *(listed below)*  
**5.** Run `npm start` to launch crypto-desk

## :currency_exchange: API 
Cryptocurrency prices are provided by [Cryptocompare API.](https://min-api.cryptocompare.com/)  

The **CryptocompareAPI** is a *free API* for getting cryptocurrency live pricing data, OHLC historical data, volume data or tick data from multiple exchanges. You can also get free aggregated news and block explorer data (supply, hashrate, latest block number etc). 

## :open_file_folder: Dependencies
This application is built using vanilla **HTML/CSS** and utilises the following dependencies:
- **[Axios:](https://www.npmjs.com/package/axios)** A promise based HTTP client for the browser and node.js. Some features *(from the [readme](https://github.com/Furqan17/crypto-desk/blob/master/axios/README.md))* include:
  - Make [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser
  - Make [http](http://nodejs.org/api/http.html) requests from node.js
  - Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
  - Automatic transforms for JSON data
  
- **[Electron:](https://electronjs.org)** *(from their [website](https://electronjs.org/docs/tutorial/about))* "is an open source library developed by GitHub for building cross-platform desktop applications with HTML, CSS, and JavaScript. Electron accomplishes this by combining [Chromium](https://www.chromium.org/Home) and [Node.js](https://nodejs.org/en/) into a single runtime and apps can be packaged for Mac, Windows, and Linux."

## :money_with_wings: Cryptocurrency
This chart shows more information about each cryptocoin, Coin information is provided by [CryptoCompare.](https://www.cryptocompare.com)

| Coin       | Max Supply    | Start Date | Algorithm | Proof Type |
| :--- |:---:|:---:|:---:|:---:|
|[Bitcoin](https://bitcoin.org/en/) (BTC)|21,000,000|03/01/2009|SHA256|[Proof of Work](https://en.bitcoin.it/wiki/Proof_of_work)|
|[Etereum](https://www.ethereum.org/) (ETH)|N/A|30/07/2015|Ethash|[Proof of Work](https://en.bitcoin.it/wiki/Proof_of_work)|
|[Litecoin](https://litecoin.com/) (LTC)|84,000,000|13/10/2011|Scrypt|[Proof of Work](https://en.bitcoin.it/wiki/Proof_of_work)|
|[Ripple](https://ripple.com/) (XRP)|100,000,000,000|02/02/2013| - | - |

## :wrench: Build Customization
#### 1.) Borderless Application
There are many customizable elements of an [Electron](https://electronjs.org) app. In this specific application I decided not to add a frame, hence why the application is borderless. If you would like to have a border for your application, make the following changes:  
**1.** Open **main.js**.  
**2.** Find the `createWindow()` function.  
**3.** Edit this line 


## :heavy_exclamation_mark: To-Do List
A list of components to *(eventually)* add.
- [x] Add new/more coins (partially done)
- [ ] Add price setting for desktop notifications

<p align="center"> ...
           <br>Copyright (c) 2018 <strong>Furqan17</strong>
           <br> Licensed under the <a href="https://github.com/Furqan17/crypto-desk/blob/master/LICENSE">MIT License</a>
</p>


