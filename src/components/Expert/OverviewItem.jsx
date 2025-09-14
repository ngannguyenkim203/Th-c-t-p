import expertImg from "../../assets/expert-img.png";

const OverviewItem = () => {
    return (
        <div className="card overflow-hidden" style={{ height: "533px" }}>
            <div className="w-100" style={{ height: "203px", overflow: "hidden" }}><img className="w-100" src={expertImg} alt="Service" /></div>
            <div className="d-flex flex-column p-3 gap-2">
                <h4>Pet Care & Training Essentials</h4>
                <div className="d-flex flex-row align-items-center gap-2">
                    <i class="fa-solid fa-calendar-days"></i>
                    <span>dd/mm/yyyy</span>
                </div>
                <div className="d-flex flex-row align-items-center gap-0">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <span>Animal Wellness Academy</span>
                </div>
                <p className="m-0">* Demonstrated understanding of pet health and hygiene</p>
                <p className="m-0">* Completed basic pet training modules</p>
                <p className="m-0">* Applied first aid principles for small animals</p>
            </div>
        </div>
    );
};

export default OverviewItem;