import React, { useState, useEffect } from 'react';
import api from '../services/api';

const SaleForm = ({ history }) => {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [sale, setSale] = useState({ customerId: '', products: [] });

  useEffect(() => {
    api.get('/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.log(error));

    api.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleCustomerChange = (e) => {
    setSale({ ...sale, customerId: e.target.value });
  };

  const handleProductChange = (index, e) => {
    const newProducts = [...sale.products];
    newProducts[index] = { ...newProducts[index], [e.target.name]: e.target.value };
    setSale({ ...sale, products: newProducts });
  };

  const handleAddProduct = () => {
    setSale({ ...sale, products: [...sale.products, { id: '', quantity: '' }] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/sales', sale)
      .then(() => history.push('/sales'))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Register Sale</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Customer:
          <select value={sale.customerId} onChange={handleCustomerChange}>
            <option value="">Select a customer</option>
            {customers.map(customer => (
              <option key={customer.id} value={customer.id}>{customer.name}</option>
            ))}
          </select>
        </label>
        {sale.products.map((product, index) => (
          <div key={index}>
            <label>
              Product:
              <select name="id" value={product.id} onChange={(e) => handleProductChange(index, e)}>
                <option value="">Select a product</option>
                {products.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </label>
            <label>
              Quantity:
              <input type="number" name="quantity" value={product.quantity} onChange={(e) => handleProductChange(index, e)} />
            </label>
          </div>
        ))}
        <button type="button" onClick={handleAddProduct}>Add Product</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SaleForm;
