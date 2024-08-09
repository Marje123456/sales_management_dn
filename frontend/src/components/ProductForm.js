import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ProductForm = ({ match, history }) => {
  const [product, setProduct] = useState({ name: '', price: '', stock: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (match.params.id) {
      api.get(`/products/${match.params.id}`)
        .then(response => {
          setProduct(response.data);
          setIsEditing(true);
        })
        .catch(error => console.log(error));
    }
  }, [match.params.id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = isEditing ? 'put' : 'post';
    const url = isEditing ? `/products/${match.params.id}` : '/products';

    api[method](url, product)
      .then(() => history.push('/products'))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>{isEditing ? 'Edit Product' : 'Add Product'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={product.name} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={product.price} onChange={handleChange} required />
        </label>
        <label>
          Stock:
          <input type="number" name="stock" value={product.stock} onChange={handleChange} required />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProductForm;