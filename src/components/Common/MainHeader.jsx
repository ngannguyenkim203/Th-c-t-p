import React from 'react';
import headerImage from "../../assets/header-img.png";
import { useNavigation } from "../../context/NavigationContext";
import avatarImage from "../../assets/shop/avatar.jpeg";
import cartImage from "../../assets/shop/cart.png";
import { useAuth } from "../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
    const { openNav } = useNavigation();
    const navigate = useNavigate();

    const { user, logout } = useAuth(); // lấy user và hàm logout từ context

    const goToCart = () => {
        navigate("/cart");
    };

    // Ép role về number để tránh lỗi so sánh
    const userRole = user ? parseInt(user.role) : null;

    return (
        <header className="main-header w-100 d-flex flex-row justify-content-between align-items-center p-1 bg-white" style={{ height: '80px' }}>
            {/* Logo */}
            <div className="h-100">
                <img src={headerImage} alt="HeaderImg" style={{ height: '100%' }} />
            </div>

            {/* Icon bên phải */}
            <div className="d-flex align-items-center gap-3">

                {/* Avatar dropdown menu */}
                <div className="dropdown-shop">
                    <button
                        className="btn p-0 border-0"
                        type="button"
                        id="avatarDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src={avatarImage}
                            alt="User"
                            className="rounded-circle"
                            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                        />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="avatarDropdown">
                        {user ? (
                            <>
                                {userRole === 2 && (
                                    <>
                                        <li>
                                            <a className="dropdown-item" href="/shopManager">Product Manager</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/profileShop">Profile Shop</a>
                                        </li>
                                    </>
                                )}
                                <li><a className="dropdown-item" href="/cart">My Cart</a></li>
                                {userRole !== 2 && (
                                    <li><a className="dropdown-item" href="/registerShop">Register Shop</a></li>
                                )}
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <button
                                        className="dropdown-item text-danger"
                                        onClick={() => {
                                            logout();
                                            navigate("/"); // quay về trang chính sau khi logout
                                        }}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li><a className="dropdown-item" href="/cart">My Cart</a></li>
                                <li><a className="dropdown-item" href="/shopCreate">Register Shop</a></li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Giỏ hàng */}
                <button
                    className="justify-content-center align-items-center p-1 h-50 border-0"
                    style={{ background: 'none', width: '50px' }}
                    onClick={goToCart}
                >
                    <img
                        src={cartImage}
                        alt="Shop Cart"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </button>

                {/* Menu bars */}
                <button
                    className="justify-content-center align-items-center p-1 h-50 border-0"
                    style={{ backgroundColor: 'white', borderRadius: '5px', width: '45px' }}
                    onClick={openNav}
                >
                    <i className="fa-solid fa-bars h-100 w-100 d-flex justify-content-center" style={{ fontSize: '25px' }}></i>
                </button>
            </div>
        </header>
    );
};

export default MainHeader;
