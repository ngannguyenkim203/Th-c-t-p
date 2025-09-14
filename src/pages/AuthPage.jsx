import React, { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import "../styles/auth.css";
import slideImage from "../assets/login-img.png";

const AuthPage = () => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="auth-page">
            <div className="auth-wrapper">
                <div className="form-container left-form">
                    {showLogin && <LoginForm setShowLogin={setShowLogin} />}
                </div>
                <div className="form-container right-form">
                    {!showLogin && <RegisterForm setShowLogin={setShowLogin} />}
                </div>

                {/* Cửa sổ chứa ảnh trượt */}
                <div
                    className="sliding-image"
                    style={{
                        transform: showLogin ? 'translateX(123%)' : 'translateX(0%)',
                    }}
                >
                    <img src={slideImage} alt="Sliding" />
                    <div className='cover-layer'></div>
                </div>
            </div>
            <div className="bg-cover-layer"></div>
        </div>
    )
}

export default AuthPage;
