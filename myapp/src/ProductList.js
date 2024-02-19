import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import './ProductList.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Products array not found in data:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (deletedProduct) => {
    setProducts(products.filter(product => product !== deletedProduct));
  };

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductItem key={index} product={product} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ProductList;

