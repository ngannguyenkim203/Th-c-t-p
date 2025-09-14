
const FilterTag = ({ filter }) => {
    return (
        <div className="filter-tag">
            <button className="del-filter-btn"><i class="fa-solid fa-xmark"></i></button>
            <span>{filter}</span>
        </div>
    );
};

export default FilterTag;