const TypeItem = ({ type, image }) => {
    return (
        <div className="type-item" style={{ backgroundImage: `url(${image})` }}>
            <span className="">{type}</span>
        </div>
    );
};

export default TypeItem;