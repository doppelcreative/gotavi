const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors('*'));

app.use(express.json());

require('./config/db');
const blogRoute = require('./Blog/controller');
const productsRoute = require('./Products/controller');

app.use('/api/blogs', blogRoute);
app.use('/api/products', productsRoute);

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
