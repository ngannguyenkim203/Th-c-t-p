import React, { useEffect, useState } from "react";
import CartShop from "../../components/Shop/CartShop";
import CartSummary from "../../components/Shop/CartSummary";
import "../../styles/cart.css";
import MainLayout from '../../layouts/MainLayout';
import { useAuth } from "../../context/AuthContext";
import { deleteCart, getCartByUserId, getProductImages, getProductVariants } from "../../services/cartService.js";

const CartPage = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState();
  const [selectedItems, setSelectedItems] = useState([]);


  // const updateQuantity = (shopId, productId, amount) => {
  //   const updatedCart = cart.map((shop) => {
  //     if (shop.shopId === shopId) {
  //       const updatedProducts = shop.products.map((product) => {
  //         if (product.id === productId) {
  //           return {
  //             ...product,
  //             quantity: Math.max(1, product.quantity + amount),
  //           };
  //         }
  //         return product;
  //       });
  //       return { ...shop, products: updatedProducts };
  //     }
  //     return shop;
  //   });

  //   setCart(updatedCart);
  // };

  // const calculateTotals = (cart) => {
  //   let totalItems = 0;
  //   let totalPayment = 0;

  //   cart && cart.forEach((shop) => {
  //     shop.products.forEach((product) => {
  //       totalItems += product.quantity;
  //       totalPayment += product.price * product.quantity;
  //     });
  //   });

  //   return { totalItems, totalPayment };
  // };

  // const { totalItems, totalPayment } = calculateTotals(cart);
useEffect(() => {
  const fetchCart = async () => {
    try {
      const response = await getCartByUserId(user.id);
      let cartData = response.data; // dữ liệu giỏ hàng gốc
      console.log("cartData",cartData);
      
      // Nếu có items trong giỏ hàng thì loop để gọi thêm API
      if (cartData?.cartItems?.length > 0) {
        const updatedItems = await Promise.all(
          cartData.cartItems.map(async (item) => {
            // Gọi API lấy ảnh sản phẩm
            const imgRes = await getProductImages(item.product.productId);
            // Gọi API lấy variants
            const variantRes = await getProductVariants(item.product.productId);

            return {
              ...item,
              product: {
                ...item.product,
                imageUrls: imgRes.data,       // ép thêm vào product
                productVarriants: variantRes.data, // ép thêm vào product
              },
            };
          })
        );

        cartData = {
          ...cartData,
          cartItems: updatedItems,
        };
      }

      setCart(cartData); // ✅ gán data cuối cùng vào state
    } catch (error) {
      console.error("Lỗi khi lấy giỏ hàng:", error);
    }
  };

  if (user?.id) {
    fetchCart();
  }
}, [user?.id, cart?.cartItems.length]);

const deleteCartItem = async (id) => {
  try {
    await deleteCart(id); // gọi API backend xoá
    // Sau khi xoá xong thì gọi lại fetchCart để load giỏ hàng mới
    const response = await getCartByUserId(user.id);
    setCart(response.data);
  } catch (error) {
    console.error("Lỗi khi xoá giỏ hàng:", error);
  }
};

  const handleSelectItem = (item, checked) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, item]); // thêm vào list
    } else {
      setSelectedItems((prev) => prev.filter((i) => i.cartItemId !== item.cartItemId)); // bỏ ra
    }
  };
  const totalItems = cart?.cartItems?.reduce(
  (sum, item) => sum + item.cartItemQuantity,
  0
  );
  const totalPayment = cart?.cartItems?.reduce(
  (sum, item) => sum + item.cartItemQuantity * item.cartItemPrice,
  0
);
  return (
    <MainLayout>
      <div className="cart-container">
        <div className="cart-header">
          <div className="header-left">
            <input type="checkbox" />
            <span>All products</span>
          </div>
        </div>

        {cart && 
          <CartShop
            key={cart.cartId}
            shop={cart}
          handleSelectItem={handleSelectItem}
          deleteCartItem={deleteCartItem}
          />
     }

        <CartSummary totalItems={totalItems || 0} totalPayment={totalPayment} selectedItems={selectedItems} />
      </div>
    </MainLayout>
  );
};

export default CartPage;
