import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/productApi";
import { getCategoryById } from "../../api/categoryApi";
import '../../styles/productDetailPage.css';
import MainLayout from '../../layouts/MainLayout';
import MainHeader from "../../components/Common/MainHeader";
import Footer from "../../components/Common/Footer";
import ProductGallery from "../../components/Shop/ProductGallery";
import ProductInfo from "../../components/Shop/ProductInfo";
import FeaturedProducts from "../../components/Shop/FeaturedProducts";
import ShopInfo from "../../components/Shop/ShopInfo";
import FeedbackCard from "../../components/Shop/FeedbackShopCard";
import PaginationComponent from "../../components/Shop/Pagination";
import ProductCard from "../../components/Shop/ProductCard";
import shopLogo from "../../assets/shop/logo pet mart.png";
import img5 from "../../assets/shop/jireho.webp";
import img6 from "../../assets/shop/slim down.webp";
import feedbackImg1 from "../../assets/shop/catbest.webp";
import feedbackImg2 from "../../assets/shop/catbest.webp";
import feedbackImg3 from "../../assets/shop/catbest.webp";
import userAvatar from "../../assets/shop/avatar.jpeg";
import { Pagination } from "react-bootstrap";


const FEATURED = [
  {
    id: 101,
    title: "JirehO Tuna Food for Kittens",
    category: "FOOD",
    price: 5.5,
    rating: 5,
    image: img5,
  },
  {
    id: 102,
    title: "Weight control food for cats",
    category: "FOOD",
    price: 3.9,
    rating: 5,
    image: img6,
  },
];

const FEEDBACK_SAMPLE = {
  avatar: userAvatar,
  username: "Username",
  date: "2024-06-08 11:12",
  rating: 5,
  comment:
    "Mình đã thử qua nhiều loại cát khác nhau nhưng Cat’s Best Smart Pellets là loại mình thấy ưng ý nhất. Cát rất tiết kiệm và thân thiện với môi trường. Lông mèo nhà mình giờ sạch sẽ hơn rất nhiều kể từ khi dùng loại cát này. Cát không bám dính vào lông như các loại cát khác.",
  images: [feedbackImg1, feedbackImg2, feedbackImg3],
};

const suggestProduct = [
  {
    name: 'Pet Shampoo',
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
    name: 'Cat"s Best Smart Pellets Organic Clumping Litter..',
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
    name: 'Pet Shampoo',
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
];


const DetailProductPage = () => {

  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  // const [variantSelections, setVariantSelections] = useState({});
  const [selectedImg, setSelectedImg] = useState(null);
  const [qty, setQty] = useState(1);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProductById(productId);
      console.log("product detail from API:", res);
      setProduct(res);
      setSelectedImg(res.imageUrls[0] || null);
      // Lấy tên danh mục từ categoryId
      if (res.categoryId) {
        const categoryRes = await getCategoryById(res.categoryId);
        setCategoryName(categoryRes.name || "");
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <div>Not...</div>;

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const newItem = {
      id: product.productId,
      name: product.productName,
      price: product.productPrice,
      imageUrl: product.imageUrls[0],
      quantity: qty,
      size: product.size,
      color: product.color,
    };

    const shopIndex = cart.findIndex(s => s.shopId === product.shopId);
    if (shopIndex !== -1) {
      const shop = cart[shopIndex];
      const existingProduct = shop.products.find(p => p.id === newItem.id);

      if (existingProduct) {
        existingProduct.quantity += newItem.quantity;
      } else {
        shop.products.push(newItem);
      }
    } else {
      cart.push({
        shopId: product.shopId,
        shopName: product.shopName,
        products: [newItem],
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
  };

  return (
    <MainLayout>
      <div className="product-detail-container">
        {/* ---------- Header ---------- */}
        {/* <MainHeader /> */}
        <div className="product-detail">
          {/* ================= MAIN GRID ================= */}
          <div className="product-detail-grid">
            {/* ---------- Gallery ---------- */}
            <div className="product-detail-gallery">
              <ProductGallery
                images={product.imageUrls}
                video={product.productVideoUrl}
                selected={selectedImg}
                onSelect={setSelectedImg}
              />
            </div>

            {/* ---------- Product info ---------- */}
            <div className="product-detail-info">
              <ProductInfo
                product={{ ...product, categoryName }}
                qty={qty}
                setQty={setQty}
                onAddToCart={handleAddToCart}
              />
            </div>

            {/* ---------- Featured products ---------- */}
            <div className="product-detail-featured">
              <FeaturedProducts products={FEATURED} />
            </div>
          </div>

          {/* ================= DESCRIPTION SECTION ================= */}
          <div className="product-description-block">
            <div className="fake-tabs">
              <button className="fake-tab active">Description</button>
            </div>
            <div className="description-content">
              <h6>Uses</h6>
              <p>{product.productUsing}</p>

              {/* <h6 style={{ marginTop: '16px' }}>Ingredients</h6>
            <p>{PRODUCT.description.ingredients}</p> */}
            </div>
          </div>

          {/* ---------- Shop info (NEW) ---------- */}
          <div className="product-detail-shopinfo">
            <ShopInfo />
          </div>

          {/* ---------- Feedback section ---------- */}
          <div className="product-detail-feedback">
            <p className="title">FEEDBACK ABOUT PRODUCT</p>
            <FeedbackCard {...FEEDBACK_SAMPLE} />
            <FeedbackCard {...FEEDBACK_SAMPLE} />
          </div>
          {/* ---------- Pagination ---------- */}
          <PaginationComponent />

          {/* ---------- Product Suggestion ---------- */}
          <div className="product-detail-suggestion">
            <p className="title">PRODUCT SUGGESTIONS</p>
            <div className="suggested-product-grid">
              {suggestProduct.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>

          {/* ---------- See more ---------- */}
          <div className="see-more-wrapper">
            <span className="see-more-text">See more</span>
            <span className="see-more-icon"><i class="fa-solid fa-angle-down"></i></span>
          </div>
        </div>
        {/* ---------- Footer ---------- */}
        <Footer />
      </div>
    </MainLayout>
  );
}

export default DetailProductPage;