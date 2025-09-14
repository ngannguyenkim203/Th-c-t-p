import StarFeedback from "./StarFeedback";
import expertImg from "../../assets/expert-img.png";

const ServiceItem = () => {
    return (
        <div className="card overflow-hidden" style={{ height: "566px" }}>
            <div className="w-100" style={{ height: "203px", overflow: "hidden" }}><img className="w-100" src={expertImg} alt="Service" /></div>
            <div className="d-flex flex-column p-3 gap-3">
                <h4>Pet Care & Training Essentials</h4>
                <div className="d-flex flex-row align-items-center gap-2">
                    <i class="fa-solid fa-calendar-days"></i>
                    <span>dd/mm/yyyy</span>
                    <span>-</span>
                    <span>6 weeks</span>
                </div>
                <div className="d-flex flex-row align-items-center gap-2">
                    <i class="fa-solid fa-tag"></i>
                    <span>Price: $99.99</span>
                </div>
                <StarFeedback />
                <p>Would you like a version tailored for dog training only, certified veterinary assistant, or for children/teens learning pet responsibility?</p>
                <button className="d-flex flex-row align-self-center gap-2 align-items-center rounded-pill border-0 fw-bold" style={{ width: "fit-content", backgroundColor: "var(--color-main-button)", padding: "8px 16px" }}>
                    <span>More Info</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default ServiceItem;