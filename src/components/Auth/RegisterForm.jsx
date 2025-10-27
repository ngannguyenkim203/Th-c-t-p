import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from 'react-router-dom';
import { validateDate, validateEmail, validateExistingEmail, validatePassword } from "../../utils/formValidators";
import authService from "../../services/authService";

const RegisterForm = ({ setShowLogin }) => {
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: 1,
        birthday: ""
    });

    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const { login } = useAuth();
    // const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        // validate ở bên formValidators.js
        if (await validateExistingEmail(form.email) === true) {
            setError("Email already exists. Please use a different email.");
            return;
        }

        if (!form.fullname || !form.email || !form.password || !form.confirmPassword || !form.birthday) {
            setError("Please enter full information.");
            return;
        }

        if (!validateEmail(form.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!validateDate(form.birthday)) {
            setError("Please enter a valid birthday.");
            return;
        }

        if (!validatePassword(form.password)) {
            setError("Password must has 8+ characters including uppercase, lowercase, digit, and special character.");
            return;
        }

        if (!(form.password === form.confirmPassword)) {
            setError("Password and confirm password do not match.");
            return;
        }

        setError("");
        try {
            const user = await authService.registerService(form);
            login(user.data);
            alert("Registration successful! Welcome to Care's Paw!\nPlease login to join the community.");
            // navigate("/login");
            window.location.reload();
        } catch (error) {
            console.error("Error during registration:", error);
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div className="">
            <div className='slogan'>
                <h2>Welcome you to Care's Paw!</h2>
                {error ? <div className="text-danger">{error}</div> : <div>Please fill in form below to become member of Care's Paw</div>}
            </div>
            <form onSubmit={handleRegister}>
                <div className="form-floating mb-3 input-wrapper ">
                    <input type="text"
                        className="form-control"
                        placeholder='email'
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <label className='fw-medium text-dark' htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3 input-wrapper ">
                    <input type="text"
                        className="form-control"
                        placeholder='username'
                        name="fullname"
                        value={form.fullname}
                        onChange={handleChange}
                    />
                    <label className='fw-medium text-dark' htmlFor="fullname">Full Name</label>
                </div>
                <div className="mb-3 input-wrapper ">
                    <div className='form-control dropdown' style={{ 'marginRight': '20px' }}>
                        <select name="gender" value={form.gender} onChange={handleChange} style={{ padding: 0 }}>
                            <option value={1}>Male</option>
                            <option value={2}>Female</option>
                            <option value={3}>Other</option>
                        </select>
                    </div>
                    <div className='dropdown'>
                        <input type="date"
                            name="birthday"
                            value={form.birthday}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-floating mb-3 input-wrapper ">
                    <input
                        type={showPassword ? "password" : "text"}
                        className="form-control"
                        placeholder='Password'
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                    <i
                        className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} password-toggle`}
                        onClick={() => setShowPassword(!showPassword)}
                    ></i>
                    <label className='fw-medium text-dark' htmlFor="password">Password</label>
                </div>
                <div className="form-floating mb-3 input-wrapper ">
                    <input
                        type={showConfirmPassword ? "password" : "text"}
                        className="form-control"
                        placeholder='Confirm password'
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />
                    <i 
                        className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"} password-toggle`}
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    ></i>
                    <label className='fw-medium text-dark' htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <button type="submit" className="auth-btn">Sign up</button>
            </form>
            <div className='text-center auth-note'><span className='note-line'>Already have an account?</span> <button type='button' className='btn btn-link p-0' onClick={() => setShowLogin(true)}>Sign in</button></div>
        </div >
    );
}

export default RegisterForm;