import React from 'react';
import StarRating from './StarRating';
import '../../styles/productCard.css';
import IconBestSeller from '../../assets/icon/iconBestSeller';
import IconNewProduct from '../../assets/icon/iconNewProduct';
import IconPopularProduct from '../../assets/icon/iconPopularProduct';
import cartImg from '../../assets/shop/cart.png';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Ảnh sản phẩm và label */}
      <div className="product-image-wrapper">
        <img
          src={product.imageUrls?.[0]} // hiển thị ảnh đầu tiên
          alt={product.productName}
          className="productCard-img"
        />

        {/* Nhãn sản phẩm */}
        <div className={`productCard-label ${product.label}`}>
          {product.label === 'best-seller' && (
            <>
              <IconBestSeller />
              <span className="label-text">Best Seller</span>
            </>
          )}
          {product.label === 'new-product' && (
            <>
              <IconNewProduct />
              <span className="label-text">New Product</span>
            </>
          )}
          {product.label === 'popular' && (
            <>
              <IconPopularProduct />
              <span className="label-text">Popular</span>
            </>
          )}
        </div>
      </div>

      {/* Thông tin sản phẩm */}
      <div className="productCard-info">
        <h4 className="productCard-name">{product.productName}</h4>

        <div className="productCard-rating-row">
          <StarRating rating={product.rating || 4.8} />
          <span className="productCard-sold">Sold {product.sold || '0'}</span>
        </div>

        <div className="productCard-price-row">
          <span className="productCard-price-sale">${product.productPriceSale || product.productPrice}</span>
          {/* <span className="productCard-price-original">${product.originalPrice || (product.productPrice * 1.2).toFixed(2)}</span> */}
          <span className="productCard-price-original">${product.productPrice}</span>
        </div>

        {/* Shop */}
        <div className="productCard-shop">
          <img src={product.shopLogo} className="shopCard-logo" alt="shop logo" />
          <div className="shopCard-text">
            <div className="shopCard-name">{product.shopName}</div>
            <div className="shopCard-location">{product.shopAddress}</div>
          </div>
          <button className="add-cart-btn">
            <img src={cartImg} alt="Add to cart" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
