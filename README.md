<h1 align="center">HDN Price Ticker</p>

<p align="center">
  <a href="https://github.com/axios/axios"><img src="https://img.shields.io/badge/axios-0.18.0-blue.svg"></a>
  <a href="https://electronjs.org/"><img src="https://img.shields.io/badge/electron-2.0.8-blue.svg"></a>
  <a href="https://github.com/Furqan17/crypto-desk/blob/master/package.json"><img src="https://img.shields.io/badge/version-1.0.0-orange.svg"></a>
  <a href="https://technet.microsoft.com/en-us/library/bb496995.aspx"><img src="https://img.shields.io/badge/platform-win64%20%7C%20osx-brightgreen.svg" alt="ver"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-ff69b4.svg"></a>
</p>

<p align="center"> <b> A responsive desktop application displaying live <a href="https://coinmarketcap.com/currencies/hydranet/">Hydranet (HDN)</a> price </b> </p>

<p align="center">
  <img src="https://i.snipboard.io/UZar95.jpg">
</p>

<h5>Many thanks to Furqan17 for his beautiful <a href="https://github.com/Furqan17/crypto-desk/">crypto-desk</a> project, which this project is forked from.</h5>

## :zap: Installation
HDN Ticker **requires** _Node.js_. If you don't have it already you can download it **[here.](https://nodejs.org/en/)**  
**1.** Fork/download this repository  
**2.** clone and extract zip    
**3.** `cd` into the repo  
**4.** `npm install` to install the dependencies *(listed below)*  
**5.** Run `npm start` to launch hdn-ticker

## Features
- Cross-platform. (MacOS + Windows + Linux)
- Display realtime HDN prices (USD), refreshed every 1 minute.
- Elegant graph (1d)
- Switch between Extended(default)/compact mode.
- Dark/Light theme support (default is system theme)
- Always on top option (ticker will always on top of other applications)

## :currency_exchange: API 
HDN prices are provided by **[Coinmarketcap API.](https://coinmarketcap.com/currencies/hydranet/)**  

## :wrench: Build Customization
#### 1.) Borderless Application
There are many customizable elements of an [Electron](https://electronjs.org) app. In this specific application I decided not to add a frame, hence why the application is borderless. If you would like to have a border for your application, make the following changes:  
**1.** Open **main.js**.  
**2.** Find the `createWindow()` function.  
**3.** Edit the following line
```javascript
win = new BrowserWindow({
  width: 300, 
  minWidth: 300, 
  height: 515, 
  minHeight:515, 
  frame: false}) // this line here
  ``` 
  change `frame: true` (or remove it completely *as the default value is true*), After saving and starting electron you will now have a border for your application.

#### 2.) App responsiveness
This app was designed with a mobile first approach. The application is responsive and you can resize the app to your liking.

#### 3.) Developer Tools
If you wish to use developer tools, right click and click "Devtools"

## :heavy_exclamation_mark: To-Do List
A list of components to *(eventually)* add.
- [ ] Installer packages
- [ ] New display currency alternatives (EUR, CAD, GBP etc.)
- [ ] Customizable line graph interval
- [ ] Menubar(MacOS) and Taskbar(Windows) support



