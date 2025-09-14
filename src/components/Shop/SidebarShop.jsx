import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarShop = () => {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ height: '88vh' }}>
      {/* <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Quản trị</span>
      </a>
      <hr /> */}
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/shopManager" className="nav-link text-white nav-link active" activeClassName="active">
            <i className="bi bi-house-door me-2"></i>
            Product Manager
          </NavLink>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <i className="bi bi-speedometer2 me-2"></i>
            Shop Manager
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <i className="bi bi-box-seam me-2"></i>
            Order Management
          </a>
        </li>
        <li className="nav-item">
          <NavLink to="/shop" className="nav-link text-white nav-link ">
            <i className="bi bi-house-door me-2"></i>
            Shop
          </NavLink>
        </li>
        {/* <li>
          <a href="#" className="nav-link text-white">
            <i className="bi bi-grid me-2"></i>
            Sản phẩm
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <i className="bi bi-people me-2"></i>
            Khách hàng
          </a>
        </li> */}
      </ul>
      <hr />
      <button className="btn btn-outline-light btn-sm d-flex align-items-center gap-1">
        <i className="bi bi-box-arrow-right"></i>
        Đăng xuất
      </button>

    </div>
  );
};

export default SidebarShop;