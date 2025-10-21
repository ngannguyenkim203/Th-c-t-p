import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import CategoryModal from '../../components/Shop/CategoryModal.jsx';
import SearchBox from '../../components/Common/SearchBox.jsx';
import ProductTable from '../../components/Shop/ProductTable.jsx';
import UpdateProductPage from '../../pages/shop/UpdateProductPage.jsx';
import AddProductPage from '../../pages/shop/AddProductPage.jsx';
import { deleteProduct } from '../../services/productService.js';

const summaryData = [
  { label: 'Total products', value: 50, color: 'text-primary' },
  { label: 'Inventory', value: 11, color: 'text-primary' },
  { label: 'Product out of stock', value: 13, color: 'text-danger' },
  { label: 'Inventory value', value: '$232', color: 'text-warning' },
];

const ProductManagerPage = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [mode, setMode] = useState('list'); // list | add | edit
  const [selectedId, setSelectedId] = useState(null);

  const handleClose = () => setShowCategoryModal(false);
  const handleShow = () => setShowCategoryModal(true);
 

const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this product?")) {
    try {
      await deleteProduct(id);
      alert("Product deleted successfully!");
      // Refresh product list ở đây
      window.location.reload();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    }
  }
};

  return (
    <div className="p-4">
      {/* <h4 className="mb-3">Product Manager</h4> */}

      {mode === 'list' && (
        <>
          {/* Header Section */}
          <div className="p-3 rounded mb-4">
            <div className="d-flex justify-content-between align-items-start flex-wrap">
              <div className="d-flex align-items-center gap-2">
                <SearchBox />
                <Button variant="outline-success mb-4">
                  <i className="bi bi-funnel me-1"></i> Filter Category
                </Button>
              </div>
              <div className="d-flex gap-2">
                <Button variant="success" onClick={() => setMode('add')}>
                  <i className="bi bi-plus-circle me-1"></i> Add new product
                </Button>
                <Button variant="success" onClick={handleShow}>
                  <i className="bi bi-list-ul me-1"></i> Product Category List
                </Button>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="d-flex justify-content-between gap-3 mb-4">
            {summaryData.map((item, idx) => (
              <Card key={idx} style={{ minWidth: '200px' }} className="shadow-sm">
                <Card.Body>
                  <Card.Title className="fs-6 text-center">{item.label}</Card.Title>
                  <Card.Text className={`fw-bold fs-5 text-center ${item.color}`}>{item.value}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>

          {/* Product Table */}
          <div className="bg-white p-3 rounded shadow-sm">
          <ProductTable
            onEdit={(id) => {
              setSelectedId(id);
              setMode('edit');
            }}
            handleDelete={(id) => handleDelete(id)}
          />
          </div>
          <CategoryModal show={showCategoryModal} handleClose={handleClose} />
        </>
      )}

      {mode === 'add' && (
        <AddProductPage
          onCancel={() => setMode('list')}
        />
      )}

      {mode === 'edit' && (
        <UpdateProductPage
          productId={selectedId}
          onCancel={() => setMode('list')}
        />
      )}
    </div>
  );
};

export default ProductManagerPage;
