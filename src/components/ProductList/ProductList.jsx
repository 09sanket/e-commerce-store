import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://stageapi.monkcommerce.app/task/products/search?search=&page=0&limit=10',
          {
            headers: {
              'X-API-KEY': '72njgfa948d9aS7gs5', // Add your API key here
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('API Response:', response.data); // Log the raw API response
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        if (error.response) {
          alert(`Error ${error.response.status}: ${error.response.data.message || 'Unauthorized'}`);
        } else {
          alert('Unexpected error occurred.');
        }
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
