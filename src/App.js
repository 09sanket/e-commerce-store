import React from 'react';
import ProductList from './components/ProductList/ProductList';
import './styles/global.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Ecommerce Store</h1>
      <ProductList />
    </div>
  );
};

export default App;
