import React, { useEffect, useState } from 'react';
import api from '../services/api';

const SaleList = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    api.get('/sales')
      .then(response => setSales(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Sale List</h1>
      <ul>
        {sales.map(sale => (
          <li key={sale.id}>
            Sale ID: {sale.id} - Customer ID: {sale.customerId} - Total: ${sale.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SaleList;