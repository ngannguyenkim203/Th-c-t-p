import React, { useState } from "react";
import defaultImage from "../../assets/dog.png"; // ảnh mặc định nếu ảnh lỗi

const CartItem = ({ shopId, item, updateQuantity, handleSelectItem, deleteCartItem }) => {
  console.log("item",item);
  
  const [checked, setChecked] = useState(false);
  // Tạm flash sale nếu giá < 20
  const isFlashSale = item?.flashSale;
  const flashSalePrice = isFlashSale ? (item?.cartItemPrice * 0.7).toFixed(2) : null;

  const total = (isFlashSale ? flashSalePrice : item?.cartItemPrice) * item?.cartItemQuantity;
  const handleCheck = (e) => {
    const newChecked = e.target.checked;
    setChecked(newChecked);
    handleSelectItem?.(item, newChecked); // 👈 gửi lên cha
  };
  return (
    <div className="cart-item">
      <div className="product-row">
        <div className="product-left">
           <input type="checkbox" checked={checked} onChange={handleCheck} />
          <img
            src={item?.product?.imageUrls || defaultImage}
            alt={item?.product?.productName || "Product"}
            className="product-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImage;
            }}
          />
        </div>

        <div className="product-info">
          <div className="product-name">{item?.product?.productName || "No name"}</div>
          <div className="product-attr">
            Size: {item?.product?.size || "N/A"} &nbsp;&nbsp; Color: {item?.product?.color || "N/A"}
          </div>
          {isFlashSale && (
            <div className="flash-sale">
              <span style={{ color: "red" }}>🔥 Flash Sale</span>
            </div>
          )}
        </div>

        <div className="product-price">
          {isFlashSale ? (
            <>
              <span>${flashSalePrice}</span>
              <del style={{ marginLeft: 4 }}>${item?.product?.productPrice}</del>
            </>
          ) : (
            <span>${item?.product?.productPrice}</span>
          )}
        </div>

        <div className="quantity-control">
          <button onClick={() => updateQuantity(shopId, item?.product?.productId, -1)}>-</button>
          <span>{item?.cartItemQuantity}</span>
          <button onClick={() => updateQuantity(shopId, item?.product?.productId, 1)}>+</button>
        </div>

        <div className="product-actions">
        <button 
          className="btn-remove" 
          onClick={() => deleteCartItem(item?.cartItemId)}
        >
          ✕
        </button>

        </div>
      </div>

      <p className="total-price">Tổng: ${total.toLocaleString("en-US")}</p>
    </div>
  );
};

export default CartItem;
