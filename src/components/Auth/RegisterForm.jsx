import { useState } from "react";
// import registerService from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { validateDate, validateEmail, validateExistingEmail, validatePassword } from "../../utils/formValidators";
import authService from "../../services/authService";

const RegisterForm = ({ setShowLogin }) => {
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "1",
        birthday: "",
    });

    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

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
            alert("Registration successful! Welcome to Care's Paw!");
            navigate("/shop");
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
                <div className="mb-3 input-wrapper">
                    <input type="text" className="form-control" placeholder='email'
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 input-wrapper ">
                    <input type="text" className="form-control" placeholder='username'
                        name="fullname"
                        value={form.fullname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 input-wrapper ">
                    <div className='form-control dropdown' style={{ 'marginRight': '20px' }}>
                        <span className='icon'></span>
                        <select name="gender" value={form.gender} onChange={handleChange} id="">
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Other</option>
                        </select>
                        <span className='icon'></span>
                    </div>
                    <div className='dropdown'>
                        <span className='icon'></span>
                        <input type="date" placeholder='Select birthday'
                            name="birthday"
                            value={form.birthday}
                            onChange={handleChange}
                        />
                        <span className='icon'></span>
                    </div>
                </div>
                <div className="mb-3 input-wrapper ">
                    <input type="text" className="form-control" placeholder='password'
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 input-wrapper ">
                    <input type="text" className="form-control" placeholder='confirm password'
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="auth-btn">Sign up</button>
            </form>
            <div className='text-center auth-note'><span className='note-line'>Already have an account?</span> <button type='button' className='btn btn-link p-0' onClick={() => setShowLogin(true)}>Sign in</button></div>
        </div >
    );
}

export default RegisterForm;
