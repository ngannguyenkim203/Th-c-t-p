import { useState } from "react";
import logoImage from "../../assets/logo-img.png";
import { useNavigate } from 'react-router-dom';
// import loginService from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import { validateEmail } from "../../utils/formValidators";
import authService from "../../services/authService";

const LoginForm = ({ setShowLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        // try {
        //     // const user = await authService.loginService(email, password);
        //     // login(user.data);
        //     const user = await authService.loginService(email, password);
        //     console.log("user:", user); // kiểm tra
        //     login(user); // ✅ vì user đã là object chứa id, email, ...
        //     navigate("/forum");
        // } catch (error) {
        //     setError("Login failed. Please check your credentials.");
        //     console.error("Error during login: ", error);
        // };
        try {
            const user = await authService.loginService(email, password);
            if (user) {
                login(user); // gọi từ AuthContext
                navigate("/shop"); // hoặc redirect
            }
        } catch (err) {
            setError("Login failed. Please check your credentials.");
        }
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
                    <input type="text" className="form-control" placeholder='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3 input-wrapper ">
                    <input type="password" className="form-control" placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <i className="bi bi-eye" id="togglePassword"></i>
                </div>
                <div style={{ 'display': 'flex', 'width': '100%', 'justifyContent': 'right' }}><button type='button' id='pw-btn' className="btn btn-link p-0">Forgot password?</button></div>
                <button type="submit" className="auth-btn">Sign in</button>
            </form>
            <div className='divider'>
                <span>or continue</span>
            </div>
            <button type="submit" className="gg-auth-btn">Sign in with google</button>
            <div className='text-center auth-note'><span className='note-line'>Don't have an account?</span> <button type='button' className='btn btn-link p-0' onClick={() => setShowLogin(false)}>Sign up</button></div>
        </div>
    );
}

export default LoginForm;
