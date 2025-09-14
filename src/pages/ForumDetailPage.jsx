import { useParams } from "react-router-dom";
import CommentBox from "../components/Common/CommentBox";
import ForumCommentFrame from "../components/Forum/ForumCommentFrame";
import OwnerInfo from "../components/Forum/OwnerInfo";
import PostCategoryTag from "../components/Forum/PostCategoryTag";
import SaveBtn from "../components/Forum/SaveBtn";
import ForumLayout from "../layouts/ForumLayout";
import "../styles/forum.css";
import { useEffect, useState } from "react";
// import { getPostDetailApi } from "../api/postApi";
import { getPostDetailService } from "../services/postService";

const ForumDetailPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        getPostDetailService(id)
            .then(res => setPost(res))
            .catch(err => console.error("Error fetching post details:", err));
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <ForumLayout>
            <div className="justify-content-between d-flex flex-column w-100 gap-3 pb-4" style={{ borderBottom: "1px solid #ccc" }}>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>{post.title}</div>
                <OwnerInfo />
                <div style={{ fontSize: "16px" }}>{post.content}</div>
                <div className="d-flex flex-row" style={{ gap: "10px", height: "27px" }}    >
                    <PostCategoryTag />
                    <PostCategoryTag />
                    <PostCategoryTag />
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className="d-flex flex-column pe-4 pt-4 gap-2">
                    <div style={{ height: "40px" }}><SaveBtn /></div>
                    <div className="d-flex flex-column rounded border">
                        <button className="border-0 px-1 py-2 d-flex flex-column align-items-center justify-content-center gap-1 border-bottom" style={{ color: "#888", backgroundColor: "transparent" }}>
                            <i class="fa-regular fa-heart"></i>
                            <span>1</span>
                        </button>
                        <button className="border-0 px-1 py-2 d-flex flex-column align-items-center justify-content-center gap-1" style={{ color: "#888", backgroundColor: "transparent" }}>
                            <i class="fa-solid fa-heart-crack"></i>
                            <span>1</span>
                        </button>
                    </div>
                </div>
                {/* comment */}
                <div className="d-flex flex-column">
                    <div style={{ marginRight: "16px" }}>
                        <ForumCommentFrame />
                        <ForumCommentFrame />
                        <ForumCommentFrame />
                    </div>
                    <div>
                        <div className="mt-2 text-decoration-underline btn-link">Show more 4 comments</div>
                        <CommentBox />
                    </div>
                </div>
            </div>
        </ForumLayout>
    );
};

export default ForumDetailPage;