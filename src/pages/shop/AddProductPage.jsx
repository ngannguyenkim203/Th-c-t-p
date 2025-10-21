import React, { useState, useRef, useEffect } from 'react';
import '../../styles/addProduct.css';
import { createProduct } from '../../services/productService.js';
import { fetchCategories } from '../../services/categoryService.js';
import { getShopByUserId } from '../../services/shopService.js';

const MAX_IMAGES = 9;

const AddProductPage = ({onCancel}) => {
  const [shopId, setShopId] = useState(null);
  const [categories, setCategories] = useState([]);

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productPriceSale, setProductPriceSale] = useState('');
  const [productAmount, setProductAmount] = useState('');
  const [productDescribe, setProductDescribe] = useState('');
  const [productUsing, setProductUsing] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [sizeValue, setSizeValue] = useState('');
  const [colorValue, setColorValue] = useState('');

  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [video, setVideo] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  // Lấy shopId từ userId trong session
  useEffect(() => {
    const fetchShop = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user?.id;
        if (!userId) {
          alert("You are not logged in");
          return;
        }

        const shopRes = await getShopByUserId(userId);
        setShopId(shopRes.shopId);
        console.log("Shop ID:", shopRes.shopId);
      } catch (error) {
        console.error("Error select shop:", error);
        alert("Shop information not found");
      }
    };

    fetchShop();
  }, []);

  //Load danh mục sản phẩm
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error loading category:", error);
      }
    };

    loadCategories();
  }, []);

  //Xử lý ảnh
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.slice(0, MAX_IMAGES - images.length);
    const previews = newFiles.map(file => URL.createObjectURL(file));

    const combinedImages = [...images, ...newFiles];
    const combinedPreviews = [...imagePreviews, ...previews];

    setImages(combinedImages);
    setImagePreviews(combinedPreviews);

    if (combinedImages.length > 0) {
      setThumbnailPreview(combinedPreviews[0]);
    }
  };

  //Xử lý video
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  //Hàm xử lý khi ấn nút "Lưu"
  const handleSubmit = async () => {
    if (!shopId) {
      alert("Shop information not found");
      return;
    }
    const formData = new FormData();
    // Gán thông tin chính
    formData.append("productName", productName);
    formData.append("productDescribe", productDescribe);
    formData.append("productPrice", productPrice);
    formData.append("productPriceSale", productPriceSale || 0.0);
    formData.append("productAmount", productAmount);
    formData.append("productStatus", 1); // Bạn có thể cho người dùng chọn trạng thái nếu muốn
    formData.append("productUsing", productUsing);
    formData.append("categoryId", categoryId);
    formData.append("shopId", shopId);
    //Gửi biến thể dưới dạng JSON (BE dùng ObjectMapper để parse)
    const variants = [
      { varriantId: 2, value: sizeValue },
      { varriantId: 1, value: colorValue }
    ];
    formData.append("productVarriants", JSON.stringify(variants));
    //Thêm ảnh
    images.forEach((img) => {
      formData.append("images", img);
    });
    //Thêm video
    if (video) {
      formData.append("video", video);
    }
    try {
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
      await createProduct(formData);
      alert("Product added successfully!");
       onCancel();
    } catch (error) {
      console.error("Error adding product:", error);
      if (error.response?.data) {
        alert("Error: " + JSON.stringify(error.response.data));
      } else {
        alert("Unknown error");
      }
    }
  };

  const handleRemoveImage = (index) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <form className="add-product-container" onSubmit={(e) => e.preventDefault()}>
      <h2>Add product</h2>

      {/* Ảnh */}
      <div className="form-group">
        <label>Product Image</label>
        <div className="image-grid">
          {imagePreviews.map((src, index) => (
            <div key={index} className="image-thumb">
              <img src={src} alt={`img-${index}`} />
              <button
                type="button"
                className="delete-btn"
                onClick={() => handleRemoveImage(index)}
              >
                ✕
              </button>
            </div>
          ))}
          {images.length + imagePreviews.length < MAX_IMAGES && (
            <div
              className="upload-box"
              onClick={() => imageInputRef.current.click()}
            >
              + Add photo
            </div>
          )}
        </div>
        <input type="file" multiple accept="image/*" hidden ref={imageInputRef} onChange={handleImageChange} />
      </div>

      {/* Ảnh bìa */}
      <div className="form-group">
        <label>Cover photo</label>
        <div className="image-grid">
          {thumbnailPreview ? (
            <div className="image-thumb"><img src={thumbnailPreview} alt="Thumbnail" /></div>
          ) : <p>No photos selected yet</p>}
        </div>
        <small>The first photo will be the default cover photo</small>
      </div>

      {/* Video */}
      <div className="form-group">
        <label>Video product</label>
        <div className="video-grid">
          {videoPreview ? (
            <video className="video-thumb" controls>
              <source src={videoPreview} type="video/mp4" />
            </video>
          ) : (
            <div className="upload-box" onClick={() => videoInputRef.current.click()}>+ Thêm video</div>
          )}
          <input type="file" accept="video/mp4" hidden ref={videoInputRef} onChange={handleVideoChange} />
        </div>
      </div>

      {/* Tên sản phẩm */}
      <div className="form-group">
        <label>Product Name</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} maxLength={100} placeholder="Enter product name" />
        <div className="char-count">{productName.length}/100</div>
      </div>

      {/* Giá */}
      <div className="form-group">
        <label className="form-label">Price Origin</label>
        <input type="number"
          className="form-control"
          value={productPrice}
          onChange={(e) => {
            const value = e.target.value;
            // Chỉ cho nhập số nguyên dương
            if (/^\d*$/.test(value)) {
              setProductPrice(value);
            }
          }}
          placeholder="Enter product price" />
      </div>

      {/* Giá */}
      <div className="form-group">
        <label className="form-label">Price Sale</label>
        <input type="number"
          className="form-control"
          value={productPriceSale}
          onChange={(e) => {
            const value = e.target.value;
            // Chỉ cho nhập số nguyên dương
            if (/^\d*$/.test(value)) {
              setProductPriceSale(value);
            }
          }}
          placeholder="Enter product price" />
      </div>

      {/* Số lượng */}
      <div className="form-group">
        <label className="form-label">Amount</label>
        <input type="number"
          className="form-control"
          value={productAmount}
          onChange={(e) => setProductAmount(e.target.value)}
          placeholder="Enter product amount" />
      </div>

      {/* Mô tả */}
      {/* <div className="form-group">
        <label>Describe</label>
        <textarea value={productDescribe} onChange={(e) => setProductDescribe(e.target.value)} maxLength={1000} placeholder="Enter product description" rows={7} />
        <div className="char-count">{productDescribe.length}/1000</div>
      </div> */}

      {/* Cách sử dụng */}
      <div className="form-group">
        <label>How to use</label>
        <input type="text" value={productUsing} onChange={(e) => setProductUsing(e.target.value)} maxLength={300} placeholder="Enter how to use the product" />
        <div className="char-count">{productUsing.length}/300</div>
      </div>

      {/* Danh mục */}
      <div className="form-group">
        <label>Category</label>
        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
          <option value="">-- Select category --</option>
          {categories?.map((cat) => (
            <option key={cat.categoryId} value={cat.categoryId}>{cat.categoryName}</option>
          ))}
        </select>
      </div>

      {/* Size */}
      <div className="form-group">
        <label>Size</label>
        <input type="text" value={sizeValue} onChange={(e) => setSizeValue(e.target.value)} />
      </div>

      {/* Màu */}
      <div className="form-group">
        <label>Color</label>
        <input type="text" value={colorValue} onChange={(e) => setColorValue(e.target.value)} />
      </div>

      {/* Hành động */}
      <div className="form-actions">
        <button type="button" className="cancel">Hủy</button>
        <button type="button" className="save" onClick={handleSubmit}>Lưu</button>
      </div>
    </form>
  );
};

export default AddProductPage;
