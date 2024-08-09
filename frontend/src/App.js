import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import SaleList from './components/SaleList';
import SaleForm from './components/SaleForm';

const App = () => (
  <Router>
    <Switch>
      <Route path="/products" exact component={ProductList} />
      <Route path="/products/new" component={ProductForm} />
      <Route path="/products/edit/:id" component={ProductForm} />
      <Route path="/customers" exact component={CustomerList} />
      <Route path="/customers/new" component={CustomerForm} />
      <Route path="/customers/edit/:id" component={CustomerForm} />
      <Route path="/sales" exact component={SaleList} />
      <Route path="/sales/new" component={SaleForm} />
    </Switch>
  </Router>
);

export default App;