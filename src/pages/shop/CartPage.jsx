import React, { useEffect, useState } from "react";
import CartShop from "../../components/Shop/CartShop";
import CartSummary from "../../components/Shop/CartSummary";
import "../../styles/cart.css";
import MainLayout from '../../layouts/MainLayout';
import { useAuth } from "../../context/AuthContext";
import { deleteCart, getCartByUserId } from "../../api/cartApi";

const CartPage = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState();
  const [selectedItems, setSelectedItems] = useState([]);

  const updateQuantity = ()=>{}
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
        console.log("ádasd", response?.data)
        setCart(response.data); // response.data mới là dữ liệu giỏ hàng
      } catch (error) {
        console.error("Lỗi khi lấy giỏ hàng:", error);
      }
    };

    if (user?.id) {
      fetchCart();
    }
  }, [user?.id]);
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
            updateQuantity={updateQuantity}
          handleSelectItem={handleSelectItem}
          deleteCartItem={deleteCartItem}
          />
     }

        <CartSummary totalItems={cart?.cartItems.lenght || 0} totalPayment={cart?.cartTotalPrice} selectedItems={selectedItems} />
      </div>
    </MainLayout>
  );
};

export default CartPage;
