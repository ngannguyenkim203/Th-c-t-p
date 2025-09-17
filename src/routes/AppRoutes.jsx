import { Route, Routes } from "react-router-dom";
import ForumPage from "../pages/ForumPage";
import AuthPage from "../pages/AuthPage";
import ExpertPage from "../pages/ExpertPage";
import ForumDetailPage from "../pages/ForumDetailPage";
import ExpertDetailPage from "../pages/ExpertDetailPage";
import ShopPage from "../pages/shop/ShopPage";
import DetailProductPage from "../pages/shop/DetailProductPage";
import CategoryPage from "../pages/shop/CategoryPage";
import ProfileShopPage from "../pages/shop/ProfileShopPage";
import ProductManagerPage from "../pages/shop/ProductManagerPage";
import AddProductPage from "../pages/shop/AddProductPage";
import UpdateProductPage from "../pages/shop/UpdateProductPage";
import ShopLayout from "../layouts/ShopLayout";
import CartPage from "../pages/shop/CartPage";
import RegisterShopPage from "../pages/shop/RegisterShopPage";
import OrderPage from "../pages/shop/OrderPage";

function AppRoutes() {
    return (
        <Routes>
            {/* Forum & Auth */}
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/expert" element={<ExpertPage />} />
            <Route path="/forum-detail/:id" element={<ForumDetailPage />} />
            <Route path="/expert-detail" element={<ExpertDetailPage />} />
            <Route path="/" element={<AuthPage />} />

            {/* Shop khách hàng */}
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/registerShop" element={<RegisterShopPage />} />
            <Route path="/product/:productId" element={<DetailProductPage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/profileShop" element={<ProfileShopPage />} /> 
            <Route path="/order" element={<OrderPage />} />

            {/* Shop Manager */}
            <Route path="/shopManager" element={<ShopLayout />}>
                <Route index element={<ProductManagerPage />} />
                <Route path="products/add" element={<AddProductPage />} />
                <Route path="products/edit/:id" element={<UpdateProductPage />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
