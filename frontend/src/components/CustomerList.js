import React, { useEffect, useState } from 'react';
import api from '../services/api';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    api.get('/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Customer List</h1>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            {customer.name} - {customer.email} - {customer.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;