import React, { useEffect, useState } from 'react';
import { Modal, Button, Row, Col, Image, Spinner, Dropdown } from 'react-bootstrap';
import { fetchCategories, deleteCategory } from '../../services/categoryService.js';
import EditCategoryModal from '../Shop/EditCategoryModal';

const CategoryModal = ({ show, handleClose }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [isCreateMode, setIsCreateMode] = useState(false); // <--- dùng để phân biệt tạo mới

    useEffect(() => {
        if (show) {
            setLoading(true);
            fetchCategories()
                .then((data) => {
                    setCategories(Array.isArray(data) ? data : []);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [show]);

    const handleEditCategory = (cat) => {
        setEditingCategory(cat);
        setIsCreateMode(false);
        setShowEditModal(true);
    };

    const handleDeleteCategory = async (category) => {
        const confirm = window.confirm(`Bạn có chắc chắn muốn xóa phân loại "${category.categoryName}" không?`);
        if (!confirm) return;

        try {
            await deleteCategory(category.categoryId);
            setCategories(prev => prev.filter(c => c.categoryId !== category.categoryId));
        } catch (error) {
            console.error('Lỗi khi xóa category:', error);
            alert('Xóa phân loại thất bại. Vui lòng thử lại.');
        }
    };

    const handleSaveCategory = (savedCategory) => {
        if (isCreateMode) {
            setCategories(prev => [...prev, savedCategory]); // thêm mới
        } else {
            const updatedList = categories.map((c) =>
                c.categoryId === savedCategory.categoryId ? savedCategory : c);
            setCategories(updatedList); // cập nhật
        }
        setShowEditModal(false);
    };


    const handleCreateNew = () => {
        setEditingCategory(null);
        setIsCreateMode(true);
        setShowEditModal(true);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" centered scrollable>
                <Modal.Header closeButton>
                    <Modal.Title>Danh sách phân loại sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {loading ? (
                        <div className="text-center py-4">
                            <Spinner animation="border" variant="primary" />
                        </div>
                    ) : categories.length === 0 ? (
                        <div className="text-center text-muted py-5">
                            <p className="mb-3">Chưa có phân loại sản phẩm nào.</p>
                            <Button variant="success" onClick={handleCreateNew}>
                                <i className="bi bi-plus-circle me-1"></i> Thêm phân loại mới
                            </Button>
                        </div>
                    ) : (
                        <Row className="g-3">
                            {categories.map((cat, idx) => (
                                <Col md={6} key={idx}>
                                    <div
                                        className="position-relative border rounded p-3 shadow-sm"
                                        style={{ minHeight: '72px' }}
                                    >
                                        <div className="d-flex align-items-center">
                                            <Image src={cat.categoryLogo} width="50" height="50" className="me-3" />
                                            <span className="fw-bold">{cat.categoryName}</span>
                                            <div className="justify-content-end ms-auto">
                                                <Dropdown align="end">
                                                    <Dropdown.Toggle
                                                        variant="light"
                                                        className="border-0 p-1"
                                                        style={{ boxShadow: 'none' }}
                                                    >
                                                        <i className="bi bi-three-dots-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={() => handleEditCategory(cat)}>
                                                            <i className="bi bi-pencil me-2"></i> Chỉnh sửa
                                                        </Dropdown.Item>
                                                        <Dropdown.Item onClick={() => handleDeleteCategory(cat)}>
                                                            <i className="bi bi-trash me-2"></i> Xóa
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    {categories.length > 0 && (
                        <Button variant="success" onClick={handleCreateNew}>
                            <i className="bi bi-plus-circle me-1"></i> Thêm phân loại mới
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>

            <EditCategoryModal
                show={showEditModal}
                onClose={() => setShowEditModal(false)}
                category={editingCategory}
                onSave={handleSaveCategory}
                isCreate={isCreateMode}
            />
        </>
    );
};

export default CategoryModal;
