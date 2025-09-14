import { useNavigate } from "react-router-dom";
import OwnerInfo from "./OwnerInfo";
import PostCategoryTag from "./PostCategoryTag";
import UnInteractBtnLine from "./UnInteractBtnLine";

const ShortcutFame = ({ post }) => {
    const navigate = useNavigate();
    return (
        <div className="w-100 short-cut-frame justify-content-between d-flex flex-column">
            <OwnerInfo />
            <div style={{ fontSize: "20px", fontWeight: "bold" }} className="btn-link"
                onClick={() => navigate(`/forum-detail/${post.id}`)}
            >{post.title}</div>
            <div style={{ fontSize: "16px" }}
            >{post.summary}</div>
            <div className="d-flex flex-row" style={{ gap: "10px", height: "27px" }}    >
                <PostCategoryTag />
                <PostCategoryTag />
                <PostCategoryTag />
            </div>
            <div className="d-flex flex-row uninteract-main-line">
                <button className="btn btn-outline-secondary popular-btn align-items-center uninteract-btn">
                    <i class="fa-solid fa-fire"></i>
                    <span>1</span>
                </button>
                <UnInteractBtnLine viewNum={post.viewedAmount} commentNum={post.commentedAmount} />
            </div>
        </div>
    )
};

export default ShortcutFame;