import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Đường dẫn đúng nếu bạn tổ chức khác
import '../../styles/productSuggestion.css'; // CSS dùng chung

const ProductSuggestionSection = ({ title = "PRODUCT SUGGESTIONS", products = [] }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 6); // Hiển thị 6 sản phẩm đầu

  return (
    <>
      {/* ---------- Product Suggestion ---------- */}
      <div className="product-detail-suggestion">
        <p className="product-detail-title">{title}</p>
        <div className="suggested-products-grid">
          {visibleProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      {/* ---------- See more ---------- */}
        <div className="see-more-wrapper" onClick={() => setShowAll(true)} style={{ cursor: "pointer" }}>
          <span className="see-more-text">See more</span>
          <span className="see-more-icon"><i className="fa-solid fa-angle-down"></i></span>
        </div>
    </>
  );
};

export default ProductSuggestionSection;
