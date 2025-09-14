import CommentIconLine from "./CommentIconLine";
import OwnerInfo from "./OwnerInfo";

const ForumCommentFrame = () => {
    return (
        <div className="w-100 d-flex flex-column gap-3 pt-4 pb-4" style={{ borderBottom: "1px solid #ccc" }}>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <OwnerInfo />
                <button className="d-flex flex-row align-items-center gap-2 border-0" style={{ fontSize: "14px", color: "#888", backgroundColor: "transparent" }}>
                    {/* until push the bell, this line will appear */}
                    <span>repoted</span>
                    <i class="fa-solid fa-bell"></i>
                </button>
            </div>
            <div>Addressing Separation Anxiety:Separation anxiety is common in rescue dogs, especially if they've experienced abandonment or frequent changes in their living situation. Start by creating a positive association with your departures. You can do this by giving her a special treat or toy that she only gets when you leave. Gradually increase the time you spend away from home in small increments, starting with just a few minutes and slowly building up to longer periods. Make sure your departures and arrivals are low-key to avoid reinforcing anxiety. Additionally, providing a safe, comforting space, like a crate or a cozy bed with a blanket that smells like you, can help her feel more secure.</div>
            <CommentIconLine />
        </div>
    );
};

export default ForumCommentFrame;