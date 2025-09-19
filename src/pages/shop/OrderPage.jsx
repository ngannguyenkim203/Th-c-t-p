import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/order.css";
import MainLayout from "../../layouts/MainLayout";
import Footer from "../../components/Common/Footer";
import ProgressBar from "../../components/Common/ProgressBar";

const OrderPage = () => {
  const navigate = useNavigate();
    const location = useLocation();
  const selectedItems  = location.state || {};
  const [orderItems, setOrderItems] = useState(selectedItems);

  const handleQuantityChange = (id, newQty) => {
    setOrderItems(
      orderItems.map((item) =>
        item.id === id ? { ...item, cartItemQuantity: newQty } : item
      )
    );
  };

  const handleRemove = (id) => {
    setOrderItems(orderItems.filter((item) => item.cartItemId !== id));
  };


  const handleCheckout = () => {
    navigate("/payment");
  };
  const totalItems = orderItems?.reduce(
  (sum, item) => sum + item.cartItemQuantity,
  0
  );
  const totalPayment = orderItems?.reduce(
  (sum, item) => sum + item.cartItemQuantity * item.cartItemPrice,
  0
  );
  
  const shippingFee = 30000;
  const total = totalPayment + shippingFee;
  return (
    <MainLayout>
      <div className="order-container">
        {/* Thanh progress bar */}
        <ProgressBar />

        <div className="order-content">
          {/* Danh sách sản phẩm */}
          <div className="order-items">
            {orderItems.map((item) => (
              <div key={item.id} className="order-item">
                {/* Hình ảnh bên trái */}
                <img src={item.product.imageUrls?.[0]?.imageProductUrl} alt={item.product.productName} className="item-image" />

                {/* Thông tin sản phẩm */}
                <div className="item-info">
                  <h4>{item.product.productName}</h4>
                  <p className="category">Category: {item.category}</p>
                  <p className="price">{item.cartItemPrice} $</p>
                </div>

                {/* Nút tăng giảm số lượng */}
                <div className="quantity-control">
                  <button
                    className="qty-btn"
                    onClick={() =>
                      handleQuantityChange(item.id, Math.max(1, item.cartItemQuantity - 1))
                    }
                  >
                    -
                  </button>
                  <span>{item.cartItemQuantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => handleQuantityChange(item.id, item.cartItemQuantity + 1)}
                  >
                    +
                  </button>
                </div>

                {/* Nút xóa */}
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.cartItemId)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Tóm tắt đơn hàng */}
          <div className="order-summary">
            <h3>ORDER SUMMARY</h3>
            <p>Tạm tính: {totalPayment} đ</p>
            <p>Shipping Fee: {shippingFee.toLocaleString()} đ</p>
            <hr />
            <h4>Total Price: {total} đ</h4>
            <button className="checkout-btn" onClick={handleCheckout}>
              PAYMENT
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </MainLayout>
  );
};

export default OrderPage;
