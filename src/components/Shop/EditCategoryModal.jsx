import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Image } from 'react-bootstrap';
import {createCategory, updateCategory } from '../../api/categoryApi';

const EditCategoryModal = ({ show, onClose, category, onSave, isCreate }) => {
    const [categoryName, setCategoryName] = useState('');
    const [categoryLogo, setCategoryLogo] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (show) {
            if (category) {
                // Trường hợp chỉnh sửa
                setCategoryName(category.categoryName || '');
                setCategoryLogo(category.categoryLogo || '');
                setFile(null);
            } else {
                // Trường hợp tạo mới
                setCategoryName('');
                setCategoryLogo('');
                setFile(null);
            }
        }
    }, [show, category]);

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setCategoryLogo(URL.createObjectURL(selectedFile));
        }
    };

    const handleSave = async () => {
        // if (!category?.categoryId) {
        //     alert("Không tìm thấy ID danh mục để cập nhật.");
        //     return;
        // }

        const formData = new FormData();
        formData.append("categoryName", categoryName);

        if (file) {
            formData.append("categoryLogo", file);
        }

        try {
            let response;
            if (category && category.categoryId) {
                response = await updateCategory(category.categoryId, formData);
            } else {
                response = await createCategory(formData);
            }
            // await updateCategory(category.categoryId, formData);
            alert("Cập nhật danh mục thành công!");
            onSave(response); //reload danh sách ở cha
            onClose(); //đóng popup sau khi cập nhật
        } catch (err) {
            console.error("Lỗi khi cập nhật:", err);
            alert("Cập nhật thất bại.");
        }
    };


    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{category ? 'Chỉnh sửa phân loại' : 'Thêm phân loại mới'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Tên phân loại</Form.Label>
                        <Form.Control
                            type="text"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            placeholder="Nhập tên danh mục"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Ảnh phân loại</Form.Label>
                        {categoryLogo && (
                            <div className="mb-2">
                                <Image src={categoryLogo} width="80" height="80" rounded />
                            </div>
                        )}
                        <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Hủy
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Lưu
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditCategoryModal;
