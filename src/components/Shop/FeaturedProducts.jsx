// components/FeaturedProducts.jsx
import React from 'react';
import '../../styles/featuredProducts.css';
import StarRating from './StarRating';

export default function FeaturedProducts({ products }) {
  return (
    <div className="featured-products">
      <div className="featured-title">FEATURED PRODUCTS</div>
      <div className="featured-grid">
        {products.map(p => (
          <div key={p.id} className="featured-item">
            <img src={p.image} alt={p.title} className="featured-image" />
            <div className="featured-info">
              <div className="featured-name">{p.title}</div>
              <div className="featured-category">category: {p.category}</div>
              <div className="featured-rating-price">
                <div className="featured-price">${p.price.toFixed(2)}</div>
                <StarRating rating={p.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
