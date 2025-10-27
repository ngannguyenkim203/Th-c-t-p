import { useState } from "react";
import logoImage from "../../assets/logo-img.png";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import { validateEmail } from "../../utils/formValidators";
import authService from "../../services/authService";

const LoginForm = ({ setShowLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const { login } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setError("");
        try {
            const tokenRes = await authService.loginService(email, password);
            login(tokenRes.token, email);
            navigate("/forum");
        } catch (error) {
            setError("Login failed. Please check your credentials.");
            console.error("Error during login: ", error);
        };
    };

    return (
        <div className="">
            <div className="logo-image">
                <img src={logoImage} alt="Sliding" />
            </div>
            <div className='slogan'>
                <h2>Welcome Back!</h2>
                {error ? <div className="text-danger">{error}</div> : <div>Please enter login detail below</div>}
            </div>
            <form onSubmit={handleLogin}>
                <div className="mb-3 input-wrapper">
                    <input type="text"
                        className="form-control fs-6"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3 input-group">
                    <input
                        type={showPassword ? "password" : "text"}
                        className="form-control fs-6"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} fs-5`}></i>
                    </button>
                </div>
                <div style={{ 'display': 'flex', 'width': '100%', 'justifyContent': 'right' }}>
                    <button type='button' id='pw-btn' className="btn btn-link p-0"
                        onClick={() => navigate('/forgot-password')}
                    >Forgot password?</button>
                </div>
                <button type="submit" className="auth-btn">Sign in</button>
            </form>
            <div className='divider'>
                <span>or continue</span>
            </div>
            <button type="submit" className="gg-auth-btn d-flex align-items-center justify-content-center" style={{ gap: "10px" }} >
                <i className="fa-brands fa-google"></i>
                <div>Sign in with google</div>
            </button>
            <div className='text-center auth-note'><span className='note-line'>Don't have an account?</span> <button type='button' className='btn btn-link p-0' onClick={() => setShowLogin(false)}>Sign up</button></div>
        </div>
    );
}

export default LoginForm;