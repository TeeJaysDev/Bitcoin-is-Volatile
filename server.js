const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC&convert=USD', {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.API_KEY
      },
    });
  } catch(error) {
    response = null;
    // error
    console.log(error);
    reject(error);
  }
  if (response) {
    // success
    const res = response.data.data.BTC[0].quote.USD.price;
    console.log(res);
    resolve(res);
    module.exports = res;
  }
});