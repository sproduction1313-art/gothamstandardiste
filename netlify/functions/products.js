const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  try {
    const folder = path.join(__dirname, '../../content/produits');
    () => {
  try {
    const folder = path.join(__dirname, '../../content/produits');
    const files = fs.readdirSync(folder);

    const baseURL = 'https://raw.githubusercontent.com/sproduction1313-art/gothamstandardiste/main/content/produits/';

    const urls = files
      .filter(file => file.endsWith('.md'))
      .map(file => `${base const files = fs.readdirSync(folder);

    const baseURL = 'https://raw.githubusercontent.com/sproduction1313-art/gothamstandardiste/main/content/produits/';

    const urls = files
      .filter(file => file.endsWith('.md'))
      .map(file => `${baseURL}${file}`);

    return {
      statusCode: 200URL}${file}`);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(urls, null, 2)
    };
  } catch (err) {
,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(urls, null, 2)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
``    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
