const { Sale, Product, Customer } = require('../models');

exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sale.findAll({ include: [Product, Customer] });
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSaleById = async (req, res) => {
  try {
    const sale = await Sale.findByPk(req.params.id, { include: [Product, Customer] });
    if (sale) {
      res.json(sale);
    } else {
      res.status(404).json({ message: 'Sale not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSale = async (req, res) => {
  const { customerId, products } = req.body;
  try {
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    const sale = await Sale.create({ customerId });
    for (const product of products) {
      const item = await Product.findByPk(product.id);
      if (item) {
        if (item.stock < product.quantity) {
          return res.status(400).json({ message: `Not enough stock for product ${item.name}` });
        }
        await item.update({ stock: item.stock - product.quantity });
        await sale.addProduct(item, { through: { quantity: product.quantity } });
      }
    }

    res.status(201).json(sale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};