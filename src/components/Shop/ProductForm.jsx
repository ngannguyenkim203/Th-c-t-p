// import React, { useState, useRef, useEffect } from "react";
// import "../styles/addProduct.css";

// const MAX_IMAGES = 9;

// const ProductForm = ({ initialValues = {}, categories = [], shopId, onSubmit }) => {
//   const [productName, setProductName] = useState(initialValues.productName || "");
//   const [productPrice, setProductPrice] = useState(initialValues.productPrice || "");
//   const [productPriceSale, setProductPriceSale] = useState(initialValues.productPriceSale || "");
//   const [productAmount, setProductAmount] = useState(initialValues.productAmount || "");
//   const [productDescribe, setProductDescribe] = useState(initialValues.productDescribe || "");
//   const [productUsing, setProductUsing] = useState(initialValues.productUsing || "");
//   const [categoryId, setCategoryId] = useState(initialValues.categoryId || "");
//   const [sizeValue, setSizeValue] = useState(initialValues.sizeValue || "");
//   const [colorValue, setColorValue] = useState(initialValues.colorValue || "");

//   const [images, setImages] = useState([]);
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [thumbnailPreview, setThumbnailPreview] = useState(null);
//   const [video, setVideo] = useState(null);
//   const [videoPreview, setVideoPreview] = useState(null);

//   const imageInputRef = useRef(null);
//   const videoInputRef = useRef(null);

//   // Nếu có dữ liệu cũ thì load ảnh/video preview (ở đây giả sử BE trả về URL sẵn)
//   useEffect(() => {
//     if (initialValues.images) {
//       setImagePreviews(initialValues.images);
//       setThumbnailPreview(initialValues.images[0] || null);
//     }
//     if (initialValues.video) {
//       setVideoPreview(initialValues.video);
//     }
//   }, [initialValues]);

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     const newFiles = files.slice(0, MAX_IMAGES - images.length);
//     const previews = newFiles.map((file) => URL.createObjectURL(file));

//     const combinedImages = [...images, ...newFiles];
//     const combinedPreviews = [...imagePreviews, ...previews];

//     setImages(combinedImages);
//     setImagePreviews(combinedPreviews);

//     if (combinedImages.length > 0) {
//       setThumbnailPreview(combinedPreviews[0]);
//     }
//   };

//   const handleVideoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setVideo(file);
//       setVideoPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async () => {
//     if (!shopId) {
//       alert("Shop information not found");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("productName", productName);
//     formData.append("productDescribe", productDescribe);
//     formData.append("productPrice", productPrice);
//     formData.append("productPriceSale", productPriceSale || 0.0);
//     formData.append("productAmount", productAmount);
//     formData.append("productStatus", 1);
//     formData.append("productUsing", productUsing);
//     formData.append("categoryId", categoryId);
//     formData.append("shopId", shopId);

//     const variants = [
//       { varriantId: 1, value: sizeValue },
//       { varriantId: 2, value: colorValue },
//     ];
//     formData.append("productVarriants", JSON.stringify(variants));

//     images.forEach((img) => {
//       formData.append("images", img);
//     });

//     if (video) {
//       formData.append("video", video);
//     }

//     await onSubmit(formData);
//   };

//   return (
//     <form className="add-product-container" onSubmit={(e) => e.preventDefault()}>
//       <h2>{initialValues.productId ? "Edit Product" : "Add Product"}</h2>

//       {/* Ảnh */}
//       <div className="form-group">
//         <label>Product Image</label>
//         <div className="image-grid">
//           {imagePreviews.map((src, index) => (
//             <div key={index} className="image-thumb">
//               <img src={src} alt={`img-${index}`} />
//             </div>
//           ))}
//           {images.length < MAX_IMAGES && (
//             <div className="upload-box" onClick={() => imageInputRef.current.click()}>
//               + Add photo
//             </div>
//           )}
//         </div>
//         <input
//           type="file"
//           multiple
//           accept="image/*"
//           hidden
//           ref={imageInputRef}
//           onChange={handleImageChange}
//         />
//       </div>

//       {/* Ảnh bìa */}
//       <div className="form-group">
//         <label>Cover photo</label>
//         <div className="image-grid">
//           {thumbnailPreview ? (
//             <div className="image-thumb">
//               <img src={thumbnailPreview} alt="Thumbnail" />
//             </div>
//           ) : (
//             <p>No photos selected yet</p>
//           )}
//         </div>
//         <small>The first photo will be the default cover photo</small>
//       </div>

//       {/* Video */}
//       <div className="form-group">
//         <label>Video product</label>
//         <div className="video-grid">
//           {videoPreview ? (
//             <video className="video-thumb" controls>
//               <source src={videoPreview} type="video/mp4" />
//             </video>
//           ) : (
//             <div className="upload-box" onClick={() => videoInputRef.current.click()}>
//               + Add video
//             </div>
//           )}
//           <input
//             type="file"
//             accept="video/mp4"
//             hidden
//             ref={videoInputRef}
//             onChange={handleVideoChange}
//           />
//         </div>
//       </div>

//       {/* Tên sản phẩm */}
//       <div className="form-group">
//         <label>Product Name</label>
//         <input
//           type="text"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//           maxLength={100}
//           placeholder="Enter product name"
//         />
//         <div className="char-count">{productName.length}/100</div>
//       </div>

//       {/* Giá */}
//       <div className="form-group">
//         <label className="form-label">Price</label>
//         <input
//           type="number"
//           className="form-control"
//           value={productPrice}
//           onChange={(e) => setProductPrice(e.target.value)}
//           placeholder="Enter product price"
//         />
//       </div>

//       {/* Giá sale */}
//       <div className="form-group">
//         <label className="form-label">Price Sale</label>
//         <input
//           type="number"
//           className="form-control"
//           value={productPriceSale}
//           onChange={(e) => setProductPriceSale(e.target.value)}
//           placeholder="Enter product price sale"
//         />
//       </div>

//       {/* Số lượng */}
//       <div className="form-group">
//         <label className="form-label">Amount</label>
//         <input
//           type="number"
//           className="form-control"
//           value={productAmount}
//           onChange={(e) => setProductAmount(e.target.value)}
//           placeholder="Enter product amount"
//         />
//       </div>

//       {/* Mô tả */}
//       <div className="form-group">
//         <label>Describe</label>
//         <textarea
//           value={productDescribe}
//           onChange={(e) => setProductDescribe(e.target.value)}
//           maxLength={1000}
//           placeholder="Enter product description"
//           rows={7}
//         />
//         <div className="char-count">{productDescribe.length}/1000</div>
//       </div>

//       {/* Cách sử dụng */}
//       <div className="form-group">
//         <label>How to use</label>
//         <input
//           type="text"
//           value={productUsing}
//           onChange={(e) => setProductUsing(e.target.value)}
//           maxLength={300}
//           placeholder="Enter how to use the product"
//         />
//         <div className="char-count">{productUsing.length}/300</div>
//       </div>

//       {/* Danh mục */}
//       <div className="form-group">
//         <label>Category</label>
//         <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
//           <option value="">-- Select category --</option>
//           {categories.map((cat) => (
//             <option key={cat.categoryId} value={cat.categoryId}>
//               {cat.categoryName}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Size */}
//       <div className="form-group">
//         <label>Size</label>
//         <input type="text" value={sizeValue} onChange={(e) => setSizeValue(e.target.value)} />
//       </div>

//       {/* Màu */}
//       <div className="form-group">
//         <label>Color</label>
//         <input type="text" value={colorValue} onChange={(e) => setColorValue(e.target.value)} />
//       </div>

//       {/* Hành động */}
//       <div className="form-actions">
//         <button type="button" className="cancel">
//           Hủy
//         </button>
//         <button type="button" className="save" onClick={handleSubmit}>
//           Lưu
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ProductForm;
