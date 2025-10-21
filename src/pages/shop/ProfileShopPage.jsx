import React, { useEffect, useState } from 'react';
import '../../styles/category.css';
import MainHeader from "../../components/Common/MainHeader";
import SearchBox from '../../components/Common/SearchBox';
import CategorySidebar from '../../components/Shop/CategorySidebar';
import ProductCard from '../../components/Shop/ProductCard';
import PaginationComponent from '../../components/Shop/Pagination';
import BrandLogo from '../../components/Shop/BrandLogo';
import Footer from '../../components/Common/Footer';
import ShopInfo from "../../components/Shop/ShopInfo";
import { getSuggestedProducts } from '../../services/productService.js';
import { getShopByUserId } from '../../services/shopService.js';
import { useAuth } from '../../context/AuthContext';

const ProfileShopPage = () => {
  const [products, setProducts] = useState([]);
  const [shop, setShop] = useState(null);
  const { user } = useAuth(); // ✅ lấy user từ context

  useEffect(() => {
    const loadShop = async () => {
      try {
        if (user?.id) {
          const shopData = await getShopByUserId(user.id); // ✅ gọi API theo userId
          setShop(shopData);
        }
      } catch (err) {
        console.error("Lỗi khi load shop:", err);
      }
    };

    const loadSuggestions = async () => {
      try {
        const data = await getSuggestedProducts();
        setProducts(data);
      } catch (err) {
        console.error("Lỗi khi load sản phẩm gợi ý:", err);
      }
    };

    loadShop();
    loadSuggestions();
  }, [user]);

  return (
    <div className="category-page">
      <MainHeader />
      <div className="banner-container">
        <div className="banner-overlay">Profile Shop</div>
      </div>

      {/* Thông tin shop */}
      <div className="shop-detail-shopinfo">
        <ShopInfo shop={shop} />
      </div>

      {/* Tìm kiếm sản phẩm */}
      <div className="mt-5 d-flex justify-content-center">
        <SearchBox />
      </div>

      {/* Danh sách sản phẩm */}
      <div className="category-main d-flex gap-5">
        <div className="sidebar">
          <CategorySidebar />
        </div>

        <div className="container-fluid">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
            {products.map((product, idx) => (
              <div className="col" key={idx}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <PaginationComponent />
      <BrandLogo />
      <Footer />
    </div>
  );
};

export default ProfileShopPage;
