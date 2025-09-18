import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/cartSummary.css";

const CartSummary = ({ totalItems, totalPayment, selectedItems }) => {
    const navigate = useNavigate();

    const handleBuyNow = () => {
        navigate("/order", {state: selectedItems }); // chuyển sang OrderPage
    };
    return (
        <div className="cart-summary">
            <div className="summary-details">
                <div className="summary-row">
                    {/* Cột bên trái */}
                    <div className="summary-col">
                        <div className="summary-item">
                            {/* <img src="/images/delivery.png" alt="icon" /> */}
                            <span>
                                <b>Delivery Method</b> Fast delivery
                            </span>
                        </div>

                        <div className="summary-item">
                            {/* <img src="/images/product.png" alt="icon" /> */}
                            <span>
                                <b>Total Products</b> {totalItems}
                            </span>
                        </div>

                        <div className="summary-item">
                            {/* <img src="/images/total-payment.png" alt="icon" /> */}
                            <span>
                                <b>Total Payment</b> ${totalPayment}
                            </span>
                        </div>
                    </div>

                    {/* Cột bên phải */}
                    <div className="summary-col">
                        <div className="summary-item">
                            {/* <img src="/images/voucher.png" alt="icon" /> */}
                            <span>
                                <b>Voucher</b> <a href="#">Select voucher</a>
                            </span>
                        </div>

                        <div className="summary-item">
                            {/* <img src="/images/coin.png" alt="icon" /> */}
                            <span>
                                <b>Coin Earned</b> Dùng 10 xu
                            </span>
                            <input type="checkbox" />
                        </div>

                        <div className="summary-buy-btn">
                            <button onClick={handleBuyNow}>BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;
