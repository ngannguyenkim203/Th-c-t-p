import avatarImage from "../../assets/avatar-img.png";

const FollowingFrame = () => {
    return (
        <div className="following-frame h-100 d-flex flex-column align-items-center" style={{ width: "80px", gap: "5px" }}>
            <div className="following-image" style={{ width: "80px", height: "80px", borderRadius: "30px", overflow: "hidden", position: "relative" }}>
                <img src={avatarImage} alt="Following" className="h-100" />
            </div>
            <div className="text-center" style={{ fontSize: "18px" }}>
                harry porter
            </div>
        </div>
    );
};

export default FollowingFrame;