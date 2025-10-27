import { useNavigate } from "react-router-dom";

const SuccessResetForm = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    return (
        <form>
            <h5 style={{ color: '#00670A', fontWeight: 'bold' }}>Password Reset Successful</h5>
            <p>Your password has been reset successfully. You can now log in with your new password.</p>
            <button
                onClick={handleSubmit}
                className="confirm-btn"
            >Go to Login</button>
        </form>
    );
}

export default SuccessResetForm;
