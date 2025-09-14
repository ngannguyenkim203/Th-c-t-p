import React, { useEffect, useState } from "react";
import CartShop from "../../components/Shop/CartShop";
import CartSummary from "../../components/Shop/CartSummary";
import "../../styles/cart.css";
import MainLayout from '../../layouts/MainLayout';

const CartPage = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const updateQuantity = (shopId, productId, amount) => {
    const updatedCart = cart.map((shop) => {
      if (shop.shopId === shopId) {
        const updatedProducts = shop.products.map((product) => {
          if (product.id === productId) {
            return {
              ...product,
              quantity: Math.max(1, product.quantity + amount),
            };
          }
          return product;
        });
        return { ...shop, products: updatedProducts };
      }
      return shop;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotals = (cart) => {
    let totalItems = 0;
    let totalPayment = 0;

    cart.forEach((shop) => {
      shop.products.forEach((product) => {
        totalItems += product.quantity;
        totalPayment += product.price * product.quantity;
      });
    });

    return { totalItems, totalPayment };
  };

  const { totalItems, totalPayment } = calculateTotals(cart);

  return (
    <MainLayout>
      <div className="cart-container">
        <div className="cart-header">
          <div className="header-left">
            <input type="checkbox" />
            <span>All products</span>
          </div>
        </div>

        {cart.map((shop) => (
          <CartShop
            key={shop.shopId}
            shop={shop}
            updateQuantity={updateQuantity}
          />
        ))}

        <CartSummary totalItems={totalItems} totalPayment={totalPayment} />
      </div>
    </MainLayout>
  );
};

export default CartPage;
