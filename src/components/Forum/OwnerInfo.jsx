import avatarImage from "../../assets/avatar-img.png";
const OwnerInfo = () => {
    return (
        <div className="d-flex flex-row align-items-center" style={{ height: "34px" }}>
            <div className="h-100 avatar-box me-2">
                <div>
                    <img src={avatarImage} alt="" className="h-100" />
                </div>
                <div className="avatar-state"><i class="fa-solid fa-star"></i></div>
            </div>
            <div>
                <div className="owner-name fw-bold">Dobby</div>
                <div className="d-flex flex-row align-items-center owner-info justify-content-between">
                    <div className="" style={{ color: "black" }}>
                        Follow
                    </div>
                    <div>.</div>
                    <div>June 20, 2022</div>
                </div>
            </div>
        </div>
    )
};

export default OwnerInfo;