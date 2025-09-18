const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

exports.handler = async () => {
  try {
    const folder = path.join(__dirname, '../../content/produit');
    const files = fs.readdirSync(folder);

    const products = files.map(file => {
      const content = fs.readFileSync(path.join(folder, file), 'utf8');
      const data = matter(content).data;
      return {
        name: data.title || '',
        price: data.price || 0,
        description: data.description || '',
        image: data.image || '',
        slug: file.replace('.md', '')
      };
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(products, null, 2)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
