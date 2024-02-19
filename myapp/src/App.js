import React from 'react';
import ProductList from './ProductList';

const App = () => {
  const scrollToFooter = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <header>
        <h1>My Shop</h1>
        <button onClick={scrollToFooter}>Scroll to Footer</button>
      </header>
      <ProductList />
      <footer>
        <p>Footer content here</p>
      </footer>
    </div>
  );
};

export default App;
