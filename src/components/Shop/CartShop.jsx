import React from "react";
import CartItem from "./CartItem";

const CartShop = ({ shop, updateQuantity, handleSelectItem, deleteCartItem }) => {
  
  return (
    <div className="cart-shop">
      <h4>{shop.shopName}</h4>
      {shop.cartItems?.map((s) => (
        <CartItem
          cart={shop}
          key={s.product.productId}
          item={s}
          shopId={shop.productId}
          handleSelectItem={handleSelectItem}
          deleteCartItem={deleteCartItem}
        />
      ))}
    </div>
  );
};

export default CartShop;
