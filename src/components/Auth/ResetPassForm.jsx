const ResetPassForm = ({ prevStep, nextStep }) => {
    return (
        <form>
            <p className="form-title">Confirm successfully. Please enter your new password.</p>
            <div>
                <div>
                    <div className="form-label">Enter new password</div>
                    <div className="form-input">
                        {/* <div><i class="fa-solid fa-lock"></i></div> */}
                        <input type="text" />
                    </div>
                </div>
                <div className="">
                    <div className="form-label">Enter confirm password</div>
                    <div className="form-input">
                        {/* <div><i class="fa-solid fa-lock"></i></div> */}
                        <input type="text" />
                    </div>
                </div>
                <div className="form-btns">
                    <button className="confirm-btn" onClick={nextStep}>Request reset code</button>
                    <button className="back-btn" onClick={prevStep}>Back to Login</button>
                </div>
            </div>
        </form>
    );
}

export default ResetPassForm;