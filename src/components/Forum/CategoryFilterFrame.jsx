import CategoryFilterItem from "./CategoryFilterItem";

const CategoryFilterFrame = () => {
    return (
        <div className="d-flex flex-column" style={{ height: "100%", width: "100%", gap: "10px" }}>
            <div className="w-100 category-filter-line">
                <CategoryFilterItem />
                <CategoryFilterItem />
            </div>
            <div className="w-100 category-filter-line">
                <CategoryFilterItem />
                <CategoryFilterItem />
            </div>
            <div className="w-100 category-filter-line">
                <CategoryFilterItem />
                <CategoryFilterItem />
            </div>
        </div>
    );
};

export default CategoryFilterFrame;