import React, { useState, useEffect } from 'react';
import api from '../services/api';

const CustomerForm = ({ match, history }) => {
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (match.params.id) {
      api.get(`/customers/${match.params.id}`)
        .then(response => {
          setCustomer(response.data);
          setIsEditing(true);
        })
        .catch(error => console.log(error));
    }
  }, [match.params.id]);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = isEditing ? 'put' : 'post';
    const url = isEditing ? `/customers/${match.params.id}` : '/customers';

    api[method](url, customer)
      .then(() => history.push('/customers'))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>{isEditing ? 'Edit Customer' : 'Add Customer'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={customer.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={customer.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={customer.phone} onChange={handleChange} required />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CustomerForm;