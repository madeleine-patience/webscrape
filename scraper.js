// EQ bank rates

const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.eqbank.ca/personal-banking/investments/gics';

request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

const gicRates = $('#contentPlaceholder_C123_Col00');

  let registeredTFSA = Number(gicRates.text().split('\n').filter(items=>items.length>2)[7].slice(0,-2))
  let nonRegistered= Number(gicRates.text().split('\n').filter(items=>items.length>2)[10].slice(0,-2))


  }
});

