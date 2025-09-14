const UnInteractBtn = ({ icon, content }) => {
    return (
        <button className="btn btn-outline-secondary uninteract-btn h-100 w-fit-content d-flex flex-row align-items-center justify-content-center gap-1">
            <i className={icon}></i>
            <span> {content}</span>
        </button>
    );
};

export default UnInteractBtn;