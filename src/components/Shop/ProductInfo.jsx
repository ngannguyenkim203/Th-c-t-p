import React, { useEffect, useState } from 'react';
import '../../styles/productInfo.css';
import StarRating from './StarRating';
import { getCategoryById } from '../../api/categoryApi.js';

export default function ProductInfo({ product, qty, setQty, onAddToCart }) {
  const [categoryName, setCategoryName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedAttributes, setSelectedAttributes] = useState({});

  console.log("Variants:", product.productVarriants);

  useEffect(() => {
    if (product?.categoryId) {
      getCategoryById(product.categoryId)
        .then(data => setCategoryName(data.categoryName))
        .catch(err => console.error("Can not select category", err));
    }
  }, [product?.categoryId]);

  // ======== Lấy ra các key hợp lệ (ví dụ: size, color, weight) mà người dùng đã điền =========
  const variantKeys = product.productVarriants?.length > 0
    ? Object.keys(product.productVarriants[0]).filter(
        key =>
          !['id', 'productId', 'productVarriantId', 'variantId'].includes(key) &&
          product.productVarriants.some(v => v[key] !== null && v[key] !== '')
      )
    : [];

  const labelMap = {
    color: 'Màu sắc',
    size: 'Kích thước',
    weight: 'Trọng lượng'
  };

  const handleDecrease = () => {
    if (qty > 1) setQty(qty - 1);
    setErrorMsg('');
  };

  const handleIncrease = () => {
    if (qty < 10 && qty < product.productAmount) {
      setQty(qty + 1);
    } else {
      setErrorMsg("Maximum quantity selected is 10 products!");
    }
  };

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 1;
    if (value > 10) {
      setErrorMsg("Maximum quantity selected is 10 products!");
      value = 10;
    }
    if (value > product.productAmount) value = product.productAmount;
    if (value < 1) value = 1;
    setQty(value);
  };

  return (
    <div className="product-info">
      <p className="product-title">{product.productName}</p>
      <p className="product-category">{categoryName}</p>

      <div className="product-details">
        <p className="product-price">${product.productPrice?.toLocaleString()}</p>
        <StarRating rating={product.rating} />
      </div>

     <div className="options">
  {product.productVarriants &&
    product.productVarriants.length > 0 &&
    Array.from(new Set(product.productVarriants.map(v => v.variantName)))
      .filter(name => name && name.trim() !== "")
      .map((variantName) => {
        const options = product.productVarriants
          .filter(v => v.variantName === variantName)
          .map(v => v.variantValue)
          .filter((val, i, self) => self.indexOf(val) === i); // unique

        return (
          <div key={variantName} className="variant-group">
            <label>{variantName}</label>
            <select
              className="form-select"
              value={selectedAttributes[variantName] || ""}
              onChange={(e) =>
                setSelectedAttributes(prev => ({
                  ...prev,
                  [variantName]: e.target.value
                }))
              }
            >
              <option value="">Chọn {variantName}</option>
              {options.map((opt, idx) => (
                <option key={idx} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        );
      })}
</div>

      {/* ======== Số lượng ======== */}
      <div className="quantity-selector">
        <label className="quantity-label">Quantity</label>
        <div className="quantity-controls">
          <button className="quantity-btn" onClick={handleDecrease}>-</button>
          <input
            type="number"
            className="quantity-value"
            value={qty}
            onChange={handleInputChange}
            min={1}
            max={Math.min(10, product.productAmount)}
          />
          <button className="quantity-btn" onClick={handleIncrease}>+</button>
        </div>
      </div>
      {errorMsg && <p className="quantity-error">{errorMsg}</p>}

      <p className="product-stock">Remaining quantity: {product.productAmount}</p>

      {/* ======== Nút hành động ======== */}
      <div className="action-buttons">
        <button className="action-btn add-to-cart" onClick={onAddToCart}>
          ADD TO CART
        </button>
        <button className="action-btn buy-now">BUY NOW</button>
      </div>
    </div>
  );
}
