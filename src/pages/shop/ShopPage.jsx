import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getNewProducts, getBestSellers, getSuggestedProducts } from "../../api/productApi";
import ProductCard from '../../components/Shop/ProductCard';
import ProductSuggestionSection from '../../components/Shop/ProductSuggestionSection';
import CategoryList from '../../components/Shop/CategoryList';
import CircleCarousel from '../../components/Shop/CircleCarousel';
import Footer from '../../components/Common/Footer';
import BrandLogo from '../../components/Shop/BrandLogo';
import MainLayout from '../../layouts/MainLayout';
import SearchBox from '../../components/Common/SearchBox';
import '../../styles/shop.css';
import shopLogo from '../../assets/shop/logo pet mart.png';
import IconArrowLeft from '../../assets/icon/iconArrowLeft';
import IconArrowRight from '../../assets/icon/iconArrowRight';
import LineWave from '../../assets/icon/lineWave';
import banner from '../../assets/shop/banner.png';

const ProductSection = ({ title, products }) => {
  const scrollRef = useRef();
  const navigate = useNavigate(); // hook dùng để điều hướng

  const handlePrev = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const handleNext = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleClick = (productId) => {
    navigate(`/product/${productId}`); // chuyển tới URL chi tiết sản phẩm
  };

  return (
    <section className="product-section">
      <h3 className="section-title">{title}</h3>
      <div className="product-scroll-wrapper">
        <div className="product-list" ref={scrollRef}>
          {products.map((product, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(product.productId)}
              style={{ cursor: "pointer" }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="arrow-wrapper">
        <button className="arrow-button left" onClick={handlePrev}>
          <IconArrowLeft />
        </button>
        <button className="arrow-button right" onClick={handleNext}>
          <IconArrowRight />
        </button>
      </div>
    </section>
  );
};

const Shop = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [suggestProduct, setSuggestProduct] = useState([]);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const res = await getNewProducts();
        setNewProducts(res);
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm mới:", error);
      }
    };
    fetchNewProducts();
  }, []);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const res = await getBestSellers();
        setBestSellers(res);
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm bán chạy:", error);
      }
    };
    fetchBestSellers();
  }, []);

  useEffect(() => {
    const fetchSuggestedProducts = async () => {
      try {
        const res = await getSuggestedProducts();
        setSuggestProduct(res);
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm gợi ý:", error);
      }
    };
    fetchSuggestedProducts();
  }, []);

  return (
    <MainLayout>
      <div className="shop-page w-100">
        {/* <MainHeader /> */}

        {/* Section 1 - Danh mục + tìm kiếm */}
        <section className="section-block">
          <CategoryList />
          <div className="d-flex justify-content-center mt-4">
            <SearchBox />
          </div>
          <LineWave className="wave-divider" />
        </section>
        <ProductSection title="NEW PRODUCTS" products={newProducts} />
        <ProductSection title="BEST SELLER PRODUCTS" products={bestSellers} />
        <div
          className="banner"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            height: '400px',
          }}
        ></div>
        <ProductSuggestionSection products={suggestProduct} />

        <BrandLogo />
        <Footer />
      </div>
    </MainLayout>
  );
};


export default Shop;
