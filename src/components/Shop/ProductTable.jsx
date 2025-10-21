import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/productService.js';
import { fetchCategories } from '../../services/categoryService.js';
import { fetchVarriants } from '../../api/varriantApi';

const ProductTable = ({ onEdit, handleDelete }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [varriantsMap, setVarriantsMap] = useState({});

  const loadProducts = async (page) => {
    try {
      const { data, totalPages } = await fetchProducts(page);
      setProducts(data);
      setTotalPages(totalPages);
    } catch (error) {
      console.error('Lỗi khi load sản phẩm:', error);
    }
  };

  const loadCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (error) {
      console.error('Lỗi khi load categories:', error);
    }
  };

  useEffect(() => {
    loadProducts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    const loadVarriants = async () => {
      const data = await fetchVarriants();
      const map = {};
      data.forEach(v => {
        map[v.varriantId] = v.varriantName;
      });
      setVarriantsMap(map);
    };
    loadVarriants();
  }, []);

  const getCategoryName = (categoryId) => {
    const c = categories.find((c) => c.categoryId === Number(categoryId));
    return c ? c.categoryName : 'Không rõ';
  };

  const getStatusText = (status) => {
    switch (status) {
      case 1: return 'Hiển thị';
      case 2: return 'Tạm ngưng';
      case 3: return 'Ẩn';
      default: return 'Không xác định';
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 1: return 'badge bg-success-subtle text-success';
      case 2: return 'badge bg-warning-subtle text-warning';
      case 3: return 'badge bg-secondary-subtle text-secondary';
      default: return 'badge bg-light text-dark';
    }
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light text-center">
            <tr>
              <th>Media</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Amount</th>
              {/* <th>Describe</th> */}
              <th>Using</th>
              <th>Other</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {products.map((p) => (
              <tr key={p.productId}>
                <td>
                  <div className="d-flex overflow-auto" style={{ width: '70px', gap: '6px' }}>
                    {p.productVideoUrl && (
                      <video
                        key="video"
                        controls
                        style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '6px' }}
                      >
                        <source src={p.productVideoUrl} type="video/mp4" />
                      </video>
                    )}
                    {(p.imageUrls || []).map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt="Product"
                        className="rounded"
                        style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                      />
                    ))}
                  </div>
                </td>
                <td>{p.productName}</td>
                <td>{getCategoryName(p.categoryId)}</td>
                <td>${p.productPriceSale.toLocaleString()}</td>
                <td>{p.productAmount}</td>
                {/* <td>{p.productDescribe}</td> */}
                <td>{p.productUsing}</td>
                <td>
                  {p.productVarriants?.length > 0 ? (
                    <div className="d-flex flex-column text-start gap-1">
                      {p.productVarriants.map((v, idx) => {
                        const name = varriantsMap?.[Number(v.varriantId)] || 'Size';
                        return (
                          <span key={idx}>
                            <strong>Property: </strong> {v.productVarriantValue}
                          </span>
                        );
                      })}
                    </div>
                  ) : (
                    <span className="text-muted">Không có</span>
                  )}
                </td>
                <td>
                  <span className={getStatusBadgeClass(p.productStatus)}>
                    {getStatusText(p.productStatus)}
                  </span>
                </td>
                <td>
                  <div className="d-flex flex-column align-items-center gap-2">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => onEdit(p.productId)}
                    >
                      <i className="fa-light fa-pencil"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-danger"
                       onClick={() => handleDelete(p.productId)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center px-2 mt-3">
        <span className="text-muted">
          Trang {currentPage} / {totalPages}
        </span>
        <div>
          <button
            className="btn btn-outline-secondary btn-sm me-2"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
