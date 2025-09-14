import React from 'react';
import { useParams } from 'react-router-dom'; // <-- Dùng để lấy category từ URL
import '../../styles/category.css';
import SearchBox from '../../components/Common/SearchBox';
import MainHeader from '../../components/Common/MainHeader';
import CategorySidebar from '../../components/Shop/CategorySidebar';
import ProductCard from '../../components/Shop/ProductCard';
import shopLogo from '../../assets/shop/logo pet mart.png';
import PaginationComponent from '../../components/Shop/Pagination';
import BrandLogo from '../../components/Shop/BrandLogo';
import Footer from '../../components/Common/Footer';

// Danh sách sản phẩm mẫu
const products = [
  {
    name: 'Pet Shampoo',
    category: 'Hygiene',
    label: 'new-product',
    image: require('../../assets/shop/categories/logo_clothing.png'),
    salePrice: 10,
    originalPrice: 12,
    sold: '5.2k',
    shopName: 'PET MART',
    shopLocation: 'Da Nang',
    rating: 4.8,
    shopLogo: shopLogo,
  },
  {
    name: 'Cat"s Best Smart Pellets Organic Clumping Litter..',
    category: 'Housing',
    label: 'best-seller',
    image: require('../../assets/shop/categories/logo_clothing.png'),
    salePrice: 10,
    originalPrice: 12,
    sold: '5.2k',
    shopName: 'PET MART',
    shopLocation: 'Da Nang',
    rating: 4.8,
    shopLogo: shopLogo,
  },
  {
    name: 'Pet Shampoo',
    category: 'Hygiene',
    label: 'popular',
    image: require('../../assets/shop/categories/logo_clothing.png'),
    salePrice: 10,
    originalPrice: 12,
    sold: '5.2k',
    shopName: 'PET MART',
    shopLocation: 'Da Nang',
    rating: 4.8,
    shopLogo: shopLogo,
  },
  {
    name: 'Pet Shampoo',
    category: 'Toys',
    label: 'new-product',
    image: require('../../assets/shop/categories/logo_clothing.png'),
    salePrice: 10,
    originalPrice: 12,
    sold: '5.2k',
    shopName: 'PET MART',
    shopLocation: 'Da Nang',
    rating: 4.8,
    shopLogo: shopLogo,
  },
  {
    name: 'Cat"s Best Smart Pellets Organic Clumping Litter..',
    category: 'Housing',
    label: 'best-seller',
    image: require('../../assets/shop/categories/logo_clothing.png'),
    salePrice: 10,
    originalPrice: 12,
    sold: '5.2k',
    shopName: 'PET MART',
    shopLocation: 'Da Nang',
    rating: 4.8,
    shopLogo: shopLogo,
  },
  {
    name: 'Pet Shampoo',
    category: 'Supplements',
    label: 'popular',
    image: require('../../assets/shop/categories/logo_clothing.png'),
    salePrice: 10,
    originalPrice: 12,
    sold: '5.2k',
    shopName: 'PET MART',
    shopLocation: 'Da Nang',
    rating: 4.8,
    shopLogo: shopLogo,
  }
];

const CategoryPage = () => {
  const { categoryName } = useParams(); // Lấy từ URL

  // Lọc sản phẩm theo category (phân biệt chữ hoa/thường nếu cần)
  const filteredProducts = products.filter(
    (product) => product.category?.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <div className="category-page">
        <MainHeader />
      {/* Banner */}
      <div className="banner-container">
        {/* <div className="banner-overlay">{categoryName?.toUpperCase()}</div> */}
        <div className="banner-overlay">Category</div>
      </div>

      {/* Search Box */}
      <div className="mt-5">
        <SearchBox />
      </div>

      {/* Nội dung chính */}
      <div className="category-main d-flex gap-5">
        {/* Sidebar bên trái */}
        <div className="sidebar">
          {/* <CategorySidebar /> */}
          <CategorySidebar currentCategory={categoryName} />
        </div>

        {/* Danh sách sản phẩm */}
        <div className="container-fluid">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, idx) => (
                <div className="col" key={idx}>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p>Không có sản phẩm trong danh mục này.</p>
            )}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <PaginationComponent />
      <BrandLogo />
      <Footer />
    </div>
  );
};

export default CategoryPage;
