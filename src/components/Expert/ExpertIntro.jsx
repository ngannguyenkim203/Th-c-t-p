import StarFeedback from "./StarFeedback";
import expertIntroImg from "../../assets/expertIntro-img.png";

const ExpertIntro = () => {
    return (
        <div className="expert-intro rounded" style={{ backgroundImage: `url(${expertIntroImg})` }}>
            <div className="expert-intro-content h-100 d-flex flex-column gap-3 ">
                <div className="d-flex flex-column gap-1 expert-intro-info p-2 rounded">
                    <div>
                        <h3 className="expert-name fw-bold">Dr. Emily Parker</h3>
                        <p>Certified Pet Behaviorist and Veterinary Technician with 10+ years of experience in animal training and rescue services.</p>
                    </div>
                    <div className="d-flex justify-content-center"><StarFeedback /></div>
                    <div>
                        <p>* Email: emily@gmail.com</p>
                        <p>* Phone Number: +839483833</p>
                    </div>
                </div>
                <button className="btn border-0 d-flex flex-row align-items-center gap-2 fw-bold w-100 justify-content-center expert-intro-btn">
                    <span>Book an appoinment</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
};

export default ExpertIntro;