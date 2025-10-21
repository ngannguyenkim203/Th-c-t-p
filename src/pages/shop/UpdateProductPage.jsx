import React, { useState, useEffect, useRef } from "react";
import { getProductById, updateProduct } from "../../services/productService.js";
import { fetchCategories } from "../../services/categoryService.js";
import "../../styles/addProduct.css";

const MAX_IMAGES = 9;

const UpdateProductPage = ({ productId, onCancel }) => {
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState(null);

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productPriceSale, setProductPriceSale] = useState("");
    const [productAmount, setProductAmount] = useState("");
    const [productDescribe, setProductDescribe] = useState("");
    const [productUsing, setProductUsing] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [sizeValue, setSizeValue] = useState("");
    const [colorValue, setColorValue] = useState("");

    // media
    const [images, setImages] = useState([]); // ảnh mới chọn
    const [imagePreviews, setImagePreviews] = useState([]); // preview ảnh cũ + mới
    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [video, setVideo] = useState(null); // video mới
    const [videoPreview, setVideoPreview] = useState(null); // preview video cũ + mới

    const imageInputRef = useRef(null);
    const videoInputRef = useRef(null);

    // Load dữ liệu sản phẩm
    useEffect(() => {
        const loadProduct = async () => {
            try {
                const data = await getProductById(productId);
                setProduct(data);

                // gán dữ liệu text
                setProductName(data.productName);
                setProductPrice(data.productPrice);
                setProductPriceSale(data.productPriceSale || 0);
                setProductAmount(data.productAmount);
                setProductDescribe(data.productDescribe);
                setProductUsing(data.productUsing);
                setCategoryId(data.categoryId || "");

                // size & color (tùy vào BE)
                if (data.productVarriants && data.productVarriants.length > 0) {
                    const sizeVar = data.productVarriants.find(v => v.varriantId === 2);
                    const colorVar = data.productVarriants.find(v => v.varriantId === 1);
                    console.log("Found variants:", { sizeVar, colorVar });
                    if (sizeVar) setSizeValue(sizeVar.productVarriantValue);
                    if (colorVar) setColorValue(colorVar.productVarriantValue);
                }

                // media cũ
                if (data.imageUrls && data.imageUrls.length > 0) {
                    setImagePreviews(data.imageUrls); // danh sách ảnh cũ
                }
                if (data.productVideoUrl) {
                    setVideoPreview(data.productVideoUrl); // video cũ
                }
            } catch (err) {
                console.error("Error loading product:", err);
            }
        };

        const loadCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (err) {
                console.error("Error loading categories:", err);
            }
        };

        loadProduct();
        loadCategories();
    }, [productId]);

    // chọn ảnh mới
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

    // chọn video mới
    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setVideo(file);
            setVideoPreview(URL.createObjectURL(file));
        }
    };

    // submit update
    const handleUpdate = async () => {
        try {
            const formData = new FormData();
            formData.append("productId", product?.productId);
            formData.append("productName", productName);
            formData.append("productDescribe", productDescribe);
            formData.append("productPrice", productPrice);
            formData.append("productPriceSale", productPriceSale || 0.0);
            formData.append("productAmount", productAmount);
            formData.append("productStatus", 1);
            formData.append("productUsing", productUsing);
            formData.append("categoryId", categoryId);
            formData.append("shopId", product.shopId);

            const variants = [
                { varriantId: 2, value: sizeValue },
                { varriantId: 1, value: colorValue },
            ];
            formData.append("productVarriants", JSON.stringify(variants));

            images.forEach((img) => {
                formData.append("images", img);
            });

            if (video) {
                formData.append("video", video);
            }

            await updateProduct(productId, formData);
            alert("Cập nhật sản phẩm thành công!");
            onCancel();
        } catch (err) {
            console.error("Error updating product:", err);
            alert("Cập nhật thất bại");
        }
    };

    if (!product) return <p>Loading...</p>;

    // Xóa ảnh (cũ hoặc mới)
    const handleRemoveImage = (index) => {
        setImagePreviews((prev) => prev.filter((_, i) => i !== index));
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <form className="add-product-container" onSubmit={(e) => e.preventDefault()}>
            <h2>Edit product</h2>

            {/* Hiển thị ảnh cũ + ảnh mới */}
            <div className="form-group">
                <label>Images</label>
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
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        ref={imageInputRef}
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                    />
                </div>
            </div>

            {/* Ảnh bìa */}
            <div className="form-group">
                <label>Cover photo</label>
                <div className="image-grid">
                    {imagePreviews.length > 0 ? (
                        <div className="image-thumb">
                            <img src={imagePreviews[0]} alt="Thumbnail" />
                        </div>
                    ) : (
                        <p>No photos selected yet</p>
                    )}
                </div>
                <small>The first photo will be the default cover photo</small>
            </div>

            {/* Hiển thị video cũ + video mới */}
            <div className="form-group">
                <label>Video</label>
                <div className="video-grid">
                    {videoPreview && (
                        <video className="video-thumb" controls>
                            <source src={videoPreview} type="video/mp4" />
                        </video>
                    )}
                    <input type="file" accept="video/mp4" hidden ref={videoInputRef} onChange={handleVideoChange} />
                </div>
            </div>

            <div className="form-group">
                <label>Product Name</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Price</label>
                <input
                    type="number"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Price Sale</label>
                <input
                    type="number"
                    value={productPriceSale}
                    onChange={(e) => setProductPriceSale(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Amount</label>
                <input
                    type="number"
                    value={productAmount}
                    onChange={(e) => setProductAmount(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Describe</label>
                <textarea
                    value={productDescribe}
                    onChange={(e) => setProductDescribe(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>How to use</label>
                <input
                    type="text"
                    value={productUsing}
                    onChange={(e) => setProductUsing(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Category</label>
                <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                >
                    <option value="">-- Select category --</option>
                    {categories.map((cat) => (
                        <option key={cat.categoryId} value={cat.categoryId}>
                            {cat.categoryName}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Size</label>
                <input
                    type="text"
                    value={sizeValue}
                    onChange={(e) => setSizeValue(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Color</label>
                <input
                    type="text"
                    value={colorValue}
                    onChange={(e) => setColorValue(e.target.value)}
                />
            </div>

            <div className="form-actions">
                <button type="button" className="cancel" onClick={onCancel}>
                    Hủy
                </button>
                <button type="button" className="save" onClick={handleUpdate}>
                    Cập nhật
                </button>
            </div>
        </form>
    );
};

export default UpdateProductPage;
