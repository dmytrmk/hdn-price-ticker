const { ipcRenderer } = require('electron');
const axios = require('axios');

const { LineChart, AutoScaleAxis, Interpolation } = require('chartist');

var price = document.getElementById('price');

updateTickerData();

// update the graph every minute
setInterval(updateTickerData, 60 * 1_000);

let chartData = [];

// // Extract x and y values
// let x = [];
// let y = [];

// for (let timestamp in points) {
//   if (!points[timestamp].c && !points[timestamp].v) {
//     // No data, skip this point
//     continue;
//   }

//   if (points[timestamp].c) {
//     // Point has "c"
//     y.push(points[timestamp].c[0]);
//   } else if (points[timestamp].v) {
//     // No "c", use "v" instead
//     y.push(points[timestamp].v[0]);
//   }

//   x.push(new Date(Number(timestamp) * 1000));
// }

function updatePrice() {
  axios
    .get(
      'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=hydranet&start=1&limit=10&category=spot&centerType=all&sort=cmc_rank_advanced&direction=desc'
    )
    .then((res) => {
      const {
        data: { marketPairs },
      } = res.data;
      const cryptos = marketPairs[0].price;
      price.innerHTML = '$' + cryptos.toLocaleString('en');
    });
}

function updateTickerData() {
  updatePrice();
  axios
    .get(
      'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?id=19689&range=1D'
    )
    .then((res) => {
      const {
        data: { points },
      } = res.data;
      const dataPoints = [];

      for (let timestamp in points) {
        if (!points[timestamp].c && !points[timestamp].v) {
          // No data, skip this point
          continue;
        }

        if (points[timestamp].c) {
          // Point has "c"
          dataPoints.push({
            y: points[timestamp].c[0],
          });
        } else if (points[timestamp].v) {
          // No "c", use "v" instead
          dataPoints.push({
            y: points[timestamp].v[0],
          });
        }
      }

      chartData = [...dataPoints];

      new LineChart(
        '#chartContainer',
        {
          series: [
            chartData.map((point, i) => {
              return {
                x: i,
                y: point.y,
              };
            }),
          ],
        },
        {
          height: '100px',
          width: '100%',
          low: 0,
          showArea: true,
          axisX: {
            // type: AutoScaleAxis,
            // onlyInteger: true,
            showGrid: false,
            showLabel: false,
            offset: 0,
          },
          axisY: {
            type: AutoScaleAxis,
            onlyInteger: true,
            showGrid: false,
            showLabel: false,
            offset: 0,
          },
          showPoint: false,
          fullWidth: true,
          showGridBackground: false,
          lineSmooth: Interpolation.simple(),
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        }
      );

      // priceXRP.innerHTML = '$' + cryptos.toLocaleString('en');
    });
}

ipcRenderer.on('toggle-theme', (event, theme) => {
  if (theme === 'dark') {
    // Apply dark theme
    document.body.classList.add('dark-theme');
  } else {
    // Apply light theme
    document.body.classList.remove('dark-theme');
  }
});
