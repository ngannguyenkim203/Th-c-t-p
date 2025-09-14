import StarFeedback from "./StarFeedback";
import expertImg from "../../assets/expert-img.png";
import { useNavigate } from "react-router-dom";

const ExpertItem = () => {
    const navigate = useNavigate();
    return (
        <div className="d-flex flex-row w-100 card overflow-hidden" style={{ height: "140px" }}
            onClick={() => navigate("/expert-detail")}
        >
            <div className="overflow-hidden" style={{ width: "140px", height: "140px", overflow: "hidden" }}><img src={expertImg} alt="" className="h-100" /></div>
            <div className="d-flex flex-column justify-content-between align-items-start p-2" >
                <p className="fw-bold m-0">Dr. Chrism Harmony</p>
                <StarFeedback />
                <div className="d-flex flex-column gap-1">
                    <p className="m-0">Major: Veterinary Medicine</p>
                    <p className="m-0">Experience: 20 years</p>
                </div>
            </div>
        </div>
    );
};

export default ExpertItem;