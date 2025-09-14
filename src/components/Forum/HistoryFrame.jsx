import { useNavigate } from "react-router-dom";
import OwnerInfo from "./OwnerInfo";
import UnInteractBtnLine from "./UnInteractBtnLine";

const HistoryFrame = ({ post }) => {
    const navigate = useNavigate();
    console.log("HistoryFrame post: ", post);

    if (!post) return null;

    return (
        <div className="w-100 history-frame justify-content-between d-flex flex-column"
        >
            <OwnerInfo />
            <div className="fw-bold btn-link" style={{ fontSize: "14px" }}
                onClick={() => navigate(`/forum-detail/${post.postId}`)}>{post.title}</div>
            <UnInteractBtnLine viewNum={post.viewedAmount} commentNum={post.commentedAmount} />
        </div>
    )
};

export default HistoryFrame;