import { useNavigate } from "react-router-dom";
import OwnerInfo from "./OwnerInfo";
import UnInteractBtnLine from "./UnInteractBtnLine";

const PopularFrame = ({ post }) => {
    const navigate = useNavigate();
    return (
        <div className="w-50 popular-frame justify-content-between d-flex flex-column">
            <div className="fw-bold popular-name btn-link"
                onClick={() => navigate(`/forum-detail/${post.id}`)}
            >{post.title}</div>
            <OwnerInfo />
            <div className="d-flex flex-row uninteract-main-line">
                <button className="btn btn-outline-secondary popular-btn align-items-center justify-content-center uninteract-btn">
                    <i class="fa-solid fa-fire"></i>
                    <span> popular</span>
                </button>
                <UnInteractBtnLine viewNum={post.viewedAmount} commentNum={post.commentedAmount} />
            </div>
        </div >
    )
};

export default PopularFrame;