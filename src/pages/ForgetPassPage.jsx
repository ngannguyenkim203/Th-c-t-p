import { useState } from "react";
import ConfirmCodeForm from "../components/Auth/ConfirmCodeForm";
import ConfirmEmailForm from "../components/Auth/ConfirmEmailForm";
import ResetPassForm from "../components/Auth/ResetPassForm";
import SuccessResetForm from "../components/Auth/SuccessResetForm";

const ForgetPassPage = () => {

    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const renderStep = () => {
        switch (step) {
            case 1:
                return <ConfirmEmailForm nextStep={nextStep} />;
            case 2:
                return <ConfirmCodeForm prevStep={prevStep} nextStep={nextStep} />;
            case 3:
                return <ResetPassForm prevStep={prevStep} nextStep={nextStep} />;
            case 4:
                return <SuccessResetForm />;
            default:
                return null;
        }
    }

    return (
        <div
            className="w-100 h-100 d-flex flex-column align-items-center justify-content-center reset-pass-form"
        >
            <h3 className="mb-4">Forgot Password?</h3>
            {renderStep()}
            <div className="mt-3">
                {[1, 2, 3, 4].map((s) => (
                    <span key={s}
                        className={`mx-1 rounded-circle d-inline-block ${step === s ? 'bg-primary' : 'bg-secondary'} `}
                        style={{ width: '10px', height: '10px' }}>

                    </span>
                ))}
            </div>
        </div>
    );
}

export default ForgetPassPage;