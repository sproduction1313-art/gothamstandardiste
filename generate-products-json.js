const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, 'content/produits');
const files = fs.readdirSync(folder);

const baseURL = 'https://raw.githubusercontent.com/sproduction1313-art/gothamstandardiste/main/content/produits/';

const urls = files
  .filter(file => file.endsWith('.md'))
  .map(file => `${baseURL}${file}`);

fs.writeFileSync(
  path.join(__dirname, 'products.json'),
  JSON.stringify(urls, null, 2)
);
