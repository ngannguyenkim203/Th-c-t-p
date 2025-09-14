import React from "react";
import defaultImage from "../../assets/dog.png"; // ảnh mặc định nếu ảnh lỗi

const CartItem = ({ shopId, product, updateQuantity }) => {
  const {
    id,
    name,
    price,
    quantity,
    imageUrl,
    size,
    color
  } = product;
   console.log("Render CartItem:",product);
  // Tạm flash sale nếu giá < 20
  const isFlashSale = price < 20;
  const flashSalePrice = isFlashSale ? (price * 0.7).toFixed(2) : null;

  const total = (isFlashSale ? flashSalePrice : price) * quantity;

  return (
    <div className="cart-item">
      <div className="product-row">
        <div className="product-left">
          <input type="checkbox" />
          <img
            src={imageUrl || defaultImage}
            alt={name || "Product"}
            className="product-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImage;
            }}
          />
        </div>

        <div className="product-info">
          <div className="product-name">{name || "No name"}</div>
          <div className="product-attr">
            Size: {size || "N/A"} &nbsp;&nbsp; Color: {color || "N/A"}
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
              <del style={{ marginLeft: 4 }}>${price}</del>
            </>
          ) : (
            <span>${price}</span>
          )}
        </div>

        <div className="quantity-control">
          <button onClick={() => updateQuantity(shopId, id, -1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => updateQuantity(shopId, id, 1)}>+</button>
        </div>

        <div className="product-actions">
          <button className="btn-remove">✕</button>
        </div>
      </div>

      <p className="total-price">Tổng: ${total.toLocaleString("en-US")}</p>
    </div>
  );
};

export default CartItem;
