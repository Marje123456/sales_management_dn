const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const customerRoutes = require('./routes/customerRoutes');
const saleRoutes = require('./routes/saleRoutes');

app.use(express.json());

app.use('/products', productRoutes);
app.use('/customers', customerRoutes);
app.use('/sales', saleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});