const ConfirmCodeForm = ({ prevStep, nextStep }) => {
    return (
        <form>
            <p className="form-title">Confirm code has been sent to your email address. Please enter it below.</p>
            <div>
                <div className="form-label">Enter confirm code</div>
                <div className="form-input">
                    {/* <div><i className="fa-solid fa-code"></i></div> */}
                    <input type="text" />
                </div>
                <div className="form-btns">
                    <button className="confirm-btn" onClick={nextStep}>Confirm</button>
                    <button className="back-btn" onClick={prevStep}>Make another request</button>
                </div>
            </div>
        </form>
    );
}

export default ConfirmCodeForm;