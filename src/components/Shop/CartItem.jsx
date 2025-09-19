import React, { useEffect, useState } from "react";
import defaultImage from "../../assets/dog.png"; // ảnh mặc định nếu ảnh lỗi
import { useNavigate } from "react-router-dom";
import { updateCartItem } from "../../api/cartApi";

const CartItem = ({ cart,shopId, item, handleSelectItem, deleteCartItem }) => {
    const navigate = useNavigate(); // hook dùng để điều hướng
   const [quantity, setQuantity] = useState(item?.cartItemQuantity || 1);

  useEffect(() => {
    // nếu prop item thay đổi từ cha -> sync lại
    setQuantity(item?.cartItemQuantity || 1);
  }, [item]);
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
    const handleClick = (productId) => {
    navigate(`/product/${productId}`); // chuyển tới URL chi tiết sản phẩm
  };
    const handleUpdate = async (newQuantity) => {
  const updatedItem = {
      productId: item?.product?.productId,  // cần cho backend tìm ProductEntity
      cartItemQuantity: newQuantity,
      cartItemPrice: item?.cartItemPrice
    };


    try {
      const result = await updateCartItem(cart?.cartId, item?.cartItemId, updatedItem);
     setQuantity(newQuantity);
    } catch (err) {
      alert("Lỗi khi update cart item!");
    }
  };
  return (
    <div className="cart-item"   >
      <div className="product-row">
        <div className="product-left" >
           <input type="checkbox" checked={checked} onChange={handleCheck} />
          <div onClick={() => handleClick(item?.product?.productId)}>
              <img
            src={item?.product?.imageUrls?.[0]?.imageProductUrl || defaultImage}
            alt={item?.product?.productName || "Product"}
            className="product-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImage;
            }}
          />
        </div>
        </div>

        <div className="product-info">
          <div className="product-name">{item?.product?.productName || "No name"}</div>
          <div className="product-attr">
            Size: {item?.product?.productVarriants?.[0]?.productVarriantValue || "N/A"} &nbsp;&nbsp; Color: {item?.product?.productVarriants?.[1]?.productVarriantValue || "N/A"}
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
        <button 
          onClick={() => {
            if (quantity  > 1) {
              handleUpdate(quantity - 1);
            } else {
              alert("Số lượng tối thiểu là 1");
            }
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button 
          onClick={() => handleUpdate(quantity  + 1)}
        >
          +
        </button>
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
