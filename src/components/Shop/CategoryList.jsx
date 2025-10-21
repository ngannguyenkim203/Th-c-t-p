import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/categoryList.css';
import { fetchCategorieSystem } from '../../services/categoryService.js';

const CategoryList = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  // Danh sách màu nền theo thứ tự
  const colorList = [
    "#E3F2FD", // Xanh baby pastel – dịu mắt
    "#FCE4EC", // Hồng nhạt
    "#FFF3E0", // Cam sáng
  ];

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCategorieSystem();
      setCategories(data);
    };
    loadData();
  }, []);

  const handleClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  return (
    <div className="category-wrapper">
      {categories.map((cat, index) => (
        <div
          className="category-card"
          key={index}
          style={{ backgroundColor: colorList[index % colorList.length] }}
        >
          <div className="category-info">
            {/* <div className="category-title">{cat.title}</div> */}
            <div className="category-name">{cat.name}</div>

          </div>
          <img src={cat.imageUrl} alt={cat.name} className="category-image" />
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
