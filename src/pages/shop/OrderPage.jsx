import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/order.css";
import MainLayout from "../../layouts/MainLayout";
import MainHeader from "../../components/Common/MainHeader";
import Footer from '../../components/Common/Footer';

const OrderPage = () => {
    const navigate = useNavigate();

    const [orderItems, setOrderItems] = useState([
        {
            id: 1,
            name: "Thức ăn cho mèo Me-O",
            category: "Food",
            price: 120000,
            quantity: 1,
            image: "/catbest.webp",
        },
        {
            id: 2,
            name: "Vòng cổ cho chó",
            category: "Accessory",
            price: 80000,
            quantity: 2,
            image: "/catbest.webp",
        },
    ]);

    const handleQuantityChange = (id, newQty) => {
        setOrderItems(
            orderItems.map((item) =>
                item.id === id ? { ...item, quantity: newQty } : item
            )
        );
    };

    const handleRemove = (id) => {
        setOrderItems(orderItems.filter((item) => item.id !== id));
    };

    const subtotal = orderItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shippingFee = 30000;
    const total = subtotal + shippingFee;

    const handleCheckout = () => {
        navigate("/payment");
    };

    return (
        <MainLayout>
            <div className="order-container">
                {/* Thanh progress bar */}
                <div className="progress-wrapper">
                    <div className="progress-step">
                        <i className="fas fa-shopping-cart"></i>
                        <span>Checkout</span>
                    </div>

                    {/* <div className="progress-line active"> */}
                    <div className="progress-line">
                        <div className="check-icon">
                            <i className="fas fa-check"></i>
                        </div>
                    </div>

                    <div className="progress-step">
                        <i className="fas fa-credit-card"></i>
                        <span>Payment</span>
                    </div>

                    <div className="progress-line">
                        <div className="check-icon">
                            <i className="fas fa-check"></i>
                        </div>
                    </div>

                    <div className="progress-step">
                        <i className="fas fa-box"></i>
                        <span>Success</span>
                    </div>
                </div>

                <div className="order-content">
                    {/* Danh sách sản phẩm */}
                    <div className="order-items">
                        {orderItems.map((item) => (
                            <div key={item.id} className="order-item">
                                {/* Hình ảnh bên trái */}
                                <img src={item.image} alt={item.name} className="item-image" />

                                {/* Thông tin sản phẩm */}
                                <div className="item-info">
                                    <h4>{item.name}</h4>
                                    <p className="category">Category: {item.category}</p>
                                    <p className="price">{item.price} $</p>
                                </div>

                                {/* Nút tăng giảm số lượng */}
                                <div className="quantity-control">
                                    <button
                                        className="qty-btn"
                                        onClick={() =>
                                            handleQuantityChange(item.id, Math.max(1, item.quantity - 1))
                                        }
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className="qty-btn"
                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Nút xóa */}
                                <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Tóm tắt đơn hàng */}
                    <div className="order-summary">
                        <h3>ORDER SUMMARY</h3>
                        <p>Tạm tính: {subtotal.toLocaleString()} đ</p>
                        <p>Shipping Fee: {shippingFee.toLocaleString()} đ</p>
                        <hr />
                        <h4>Total Price: {total.toLocaleString()} đ</h4>
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
