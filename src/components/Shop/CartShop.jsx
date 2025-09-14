import React from "react";
import CartItem from "./CartItem";

const CartShop = ({ shop, updateQuantity }) => {
  return (
    <div className="cart-shop">
      <h4>{shop.shopName}</h4>
      {shop.products.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          shopId={shop.shopId}
          updateQuantity={updateQuantity}
        />
      ))}
    </div>
  );
};

export default CartShop;
