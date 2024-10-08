const express = require('express');
const app = express();
const productRoutes = require('./src/routes/productRoutes');

app.use(express.json());
app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});