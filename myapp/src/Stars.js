import React from 'react';

const Stars = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<span key={i} className="fa fa-star active"></span>);
    } else if (i < rating) {
      stars.push(<span key={i} className="fa fa-star-half-o active"></span>);
    } else {
      stars.push(<span key={i} className="fa fa-star"></span>);
    }
  }
  return <div>{stars}</div>;
};

export default Stars;

