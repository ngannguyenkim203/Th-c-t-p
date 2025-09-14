
const EditPostBtn = ({ icon }) => {
    return (
        <button className="btn p-1" style={{ width: "32px", height: "32px" }} data-bs-toggle="tooltip" data-bs-placement="top" title={icon.split(' ').slice(1).join(' ')}>
            <i class={icon} style={{ fontSize: "14px" }}></i>
        </button >
    );
};

export default EditPostBtn;