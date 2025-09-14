import "../../styles/common.css";
import avatarImage from "../../assets/avatar-img.png";

const CommentBox = () => {
    return (
        <div className="search-box d-flex flex-row justify-content-between mb-4 w-100 gap-3 my-3" style={{ height: "fit-content" }}>
            <div style={{ width: "50px", height: "50px" }}>
                <img src={avatarImage} alt="" className="h-100" />
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between w-100 border rounded-pill p-1" style={{ backgroundColor: "transparent", height: "fit-content" }}>
                <input
                    type="text"
                    placeholder="Add a comment"
                    className="form-control border-0 h-100 me-1"
                />
                <button className="mainBtn border-1 rounded-circle" style={{ width: "40px", height: "40px" }}>
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </div>
    );
};

export default CommentBox;