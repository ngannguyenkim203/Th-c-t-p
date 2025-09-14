import React from 'react';
import '../../styles/shopInfo.css'; 
import StarRating from './StarRating';
import shopLogo from '../../assets/shop/logo pet mart.png';

export default function ShopInfo({ shop }) {
  if (!shop) return null;
  return (
    <div className="shop-info-container">
      <div className="shop-info-left">
        <img
          src={shop.shopLogo || ""}
          alt="Shop Logo"
          className="shop-info-logo"
        />

        <div className="shop-meta">
          <h3 className="shop-info-name">{shop.shopName}</h3>
          <div className="shop-rating">
            <StarRating/>
            <span className="score">5/5</span>
          </div>
          <p className="shop-online">Online 10 minutes ago</p>

          <div className="shop-buttons">
            <button className="chat-btn">Chat now</button>
            <button className="visit-btn">Shop</button>
          </div>
        </div>
      </div>

      <div className="shop-info-right">
        <div className="shop-info-row">
          <span>Feedback</span>
          <span className="highlight">50k</span>

          <span>Reply</span>
          <span className="highlight">90%</span>

          <span>Date</span>
          <span className="highlight">{shop.created_at ? new Date(shop.created_at).toLocaleDateString() : "N/A"}</span>
        </div>

        <div className="shop-info-row">
          <span>Products</span>
          <span className="highlight">300</span>

          <span>Address</span>
          <span className="highlight">{shop.shopAddress || "N/A"}</span>

          <span>Follower</span>
          <span className="highlight">150</span>
        </div>
      </div>
    </div>
  );
}


