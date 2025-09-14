import UnInteractBtn from "./UnInteractBtn";

const CommentIconLine = () => {
    return (
        <div className="d-flex flex-row gap-2">
            <button className="border-0 d-flex flex-row align-items-center " style={{ color: "#888", backgroundColor: "transparent" }}><i class="fa-regular fa-face-smile fs-4"></i></button>
            <UnInteractBtn icon={"fa-regular fa-face-laugh-squint"} content={"1"} />
            <button className="d-flex flex-row align-items-center border-0" style={{ textDecoration: "underline", backgroundColor: "transparent" }}>Reply</button>
        </div>
    );
};

export default CommentIconLine;