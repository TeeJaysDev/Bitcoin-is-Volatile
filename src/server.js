const express = require('express');
const app = express();
const request = require('request');
const dotenv = require('dotenv');

dotenv.config();

app.get('/', (req, res) => {
  const url = `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC&convert=USD`

  request.get({
    url: url,
    json: true,
    headers: {
      'X-CMC_PRO_API_KEY': process.env.API_KEY,
    }
  }, (error, response, data) => {

    if (error) {
      return res.send({
        error: error
      });
    }

    res.send({
      data: data.data.BTC[0].quote.USD.price
    });

  });

});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});