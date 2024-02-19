import React from 'react';
import Stars from './Stars'; // Импортируем компонент звёздного рейтинга

const ProductItem = ({ product, onDelete }) => {
  const { title, description, price, rating } = product; // Добавляем rating

  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <Stars rating={rating} /> {/* Выводим компонент звёздного рейтинга с передачей значения рейтинга */}
      </div>
      <button onClick={() => onDelete(product)}>Delete</button>
    </div>
  );
};

export default ProductItem;