import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/categorySidebar.css';
import foodImg from '../../assets/shop/categories/logo_food.png';
import toyImg from '../../assets/shop/categories/logo_toy.png';
import accessoryImg from '../../assets/shop/categories/logo_accessory.png';
import clothingImg from '../../assets/shop/categories/logo_clothing.png';
import supplementImg from '../../assets/shop/categories/logo_supplement.png';
import housingImg from '../../assets/shop/categories/logo_housing.png';
import hygieneImg from '../../assets/shop/categories/logo_hygiene.png';
import medicineImg from '../../assets/shop/categories/logo_medicine.png';

const categories = [
  { name: 'FOODS', img: foodImg },
  { name: 'TOYS', img: toyImg },
  { name: 'ACCESSORIES', img: accessoryImg },
  { name: 'CLOTHING', img: clothingImg },
  { name: 'SUPPLEMENTS', img: supplementImg },
  { name: 'HOUSING', img: housingImg },
  { name: 'HYGIENE', img: hygieneImg },
  { name: 'MEDICINE', img: medicineImg },
];

const salePlaces = ['Da Nang', 'Ho Chi Minh', 'Ha Noi'];
const types = ['Best Seller', 'Popular', 'New Product'];

const CategorySidebar = ({ currentCategory }) => {
  const navigate = useNavigate();
  const current = currentCategory?.toLowerCase();

  return (
    <div className="category-sidebar">
      <div className="category-sidebar-list">
        {categories.map((cat, idx) => {
          const isActive = cat.name.toLowerCase() === current;
          return (
            <div
              key={idx}
              className={`category-sidebar-item ${isActive ? 'active' : ''}`}
              onClick={() => navigate(`/category/${encodeURIComponent(cat.name.toLowerCase())}`)}
              style={{ cursor: 'pointer' }}
            >
              <img src={cat.img} alt={cat.name} className="category-sidebar-icon" />
              <span>{cat.name}</span>
            </div>
          );
        })}
      </div>

      {/* Sale Place */}
      <div className="filter-card">
        <p>SALE PLACE</p>
        <input type="text" className="search-place" placeholder="Enter sale place..." />
        <div className="checkbox-group">
          {salePlaces.map((place, idx) => (
            <label key={idx} className="checkbox-item">
              <input type="checkbox" defaultChecked={idx === 0} />
              <span className="custom-checkmark"></span>
              <span className={`check-label ${idx === 0 ? 'green' : ''}`}>{place}</span>
            </label>
          ))}
          <span className="more-toggle">
            More
            <i className="fa-solid fa-angle-down mx-2" style={{ color: '#898585' }}></i>
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="filter-card">
        <p>Price</p>
        <input type="range" min="0" max="2000" step="10" className="price-range" />
        <div className="price-label">Price: 50 - 1600</div>
      </div>

      {/* Product Type */}
      <div className="filter-card">
        <p>Product Type</p>
        <div className="checkbox-group">
          {types.map((type, idx) => (
            <label key={idx} className="checkbox-item">
              <input type="checkbox" defaultChecked={idx === 0} />
              <span className="custom-checkmark"></span>
              <span className={`check-label ${idx === 0 ? 'green' : ''}`}>{type}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
