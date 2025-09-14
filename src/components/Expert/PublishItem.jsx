const PublishItem = ({ name, content }) => {
    return (
        <div className="d-flex flex-column p-2 bg-white rounded-2">
            <div className="d-flex flex-row justify-content-between align-items-center">
                <h4>{name}</h4>
                <div className="d-flex flex-row align-items-center gap-1 expert-nav-item">
                    <span className="text-decoration-underline">See all</span>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
            {/* content */}
            <div className="w-100">
                {content}
            </div>
        </div>
    )
}

export default PublishItem;