import React, { useState } from 'react';
// import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Modal, Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext.js';
import MainLayout from '../../layouts/MainLayout.jsx';
import { registerShop } from '../../services/shopService.js';
import { useNavigate } from 'react-router-dom';

function RegisterShopPage() {
  const { user } = useAuth();
  const [shopName, setShopName] = useState('');

  const [email, setEmail] = useState('');
  React.useEffect(() => {
    if (user?.email) setEmail(user.email);
  }, [user]);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [shopAddress, setShopAddress] = useState('');
  // const [location, setLocation] = useState(null);
  const [shopLogo, setShopLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  // const [showMap, setShowMap] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');


  const navigate = useNavigate();

  React.useEffect(() => {
    if (user?.role !== "USER") {  // chỉ USER mới được đăng ký
      alert("Bạn không được phép đăng ký shop!");
      navigate("/shop"); // hoặc route bạn muốn redirect
    }
  }, [user, navigate]);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setShopLogo(file);
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    } else {
      setLogoPreview(null);
    }
  };


  const handleSubmit = async () => {
    const userId = user?.id || sessionStorage.getItem("userId");

    if (!shopName || !shopAddress || !phoneNumber || !userId) {
      setErrorMsg("Vui lòng điền đầy đủ thông tin bắt buộc.");
      return;
    }

    const formData = new FormData();
    formData.append("shopName", shopName);
    formData.append("shopAddress", shopAddress);
    formData.append("phoneNumber", phoneNumber);
    formData.append("userId", parseInt(userId));
    formData.append("status", 1); //Thêm mặc định status = 1
    if (shopLogo) formData.append("shopLogo", shopLogo);

    try {
      const response = await registerShop(formData);
      if (response) {
        setSuccessMsg("Đăng ký shop thành công!");
        setTimeout(() => navigate("/profileShop"), 2000);
      }

    } catch (err) {
      console.error("Đăng ký thất bại:", err);
      setErrorMsg("Đăng ký thất bại. Vui lòng kiểm tra lại thông tin.");
      setSuccessMsg("");
    }
  };

  return (
    <MainLayout>
      <div className="container mt-4" style={{ maxWidth: '600px' }}>
        <h3 className="mb-4">Đăng ký Shop</h3>

        {successMsg && <Alert variant="success">{successMsg}</Alert>}
        {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

        <Form>
          <Form.Group className="mb-3">
            <Form.Label><span className="text-danger">*</span> Tên Shop</Form.Label>
            <Form.Control
              type="text"
              value={shopName}
              maxLength={30}
              onChange={(e) => setShopName(e.target.value)}
            />
            <div className="text-end text-muted">{shopName.length}/30</div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><span className="text-danger">*</span> Địa chỉ lấy hàng</Form.Label>
            <Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={shopAddress}
                  onChange={(e) => setShopAddress(e.target.value)}
                />
              </Col>
              <Col>
                {/* <Button variant="outline-secondary" onClick={() => setShowMap(true)}>
                  Select on Map
                </Button> */}
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><span className="text-danger">*</span> Email</Form.Label>
            <Form.Control type="email" value={email} readOnly />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><span className="text-danger">*</span> Số điện thoại</Form.Label>
            <Form.Control
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Logo Shop (tuỳ chọn)</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
            />
            {logoPreview && (
              <div className="mt-2 text-center">
                <img
                  src={logoPreview}
                  alt="Xem trước logo"
                  style={{ maxWidth: '200px', maxHeight: '200px', border: '1px solid #ccc', borderRadius: '8px' }}
                />
              </div>
            )}
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button variant="secondary" className="me-2">Cancel</Button>
            <Button variant="danger" onClick={handleSubmit}>Save</Button>
          </div>
        </Form>

        {/* <Modal show={showMap} onHide={() => setShowMap(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Chọn vị trí trên bản đồ</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: '400px' }}>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={centerDefault}
                zoom={13}
                onClick={handleMapClick}
              >
                {location && <Marker position={location} />}
              </GoogleMap>
            ) : (
              <p>Đang tải bản đồ...</p>
            )}
          </Modal.Body>
        </Modal> */}
      </div>
    </MainLayout>
  );
}

export default RegisterShopPage;
