import { useNavigate } from "react-router-dom";

const ConfirmEmailForm = ({ nextStep }) => {

    const navigate = useNavigate();

    return (
        <form>
            <p className="form-title">Please enter the email address associated with your account to receive confirm code.</p>
            <div>
                <div className="form-label">Enter email address</div>
                <div className="form-input">
                    {/* <div className="form-input-icon"><i className="fa-regular fa-envelope"></i></div> */}
                    <input type="text" />
                </div>
                <div className="form-btns">
                    <button className="confirm-btn" onClick={nextStep}>Request reset code</button>
                    <button className="back-btn" onClick={() => navigate('/login')}>Back to Login</button>
                </div>
            </div>
        </form>
    );
}

export default ConfirmEmailForm;