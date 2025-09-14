import TypeItem from "./TypeItem";
import filterImage from "../../assets/dog.png";

const TypeFilterFrame = ({ activeTag, setActiveTab }) => {
    return (
        <div className="d-flex flex-column justify-content-between" style={{ width: "261px", height: "257px" }}>
            <div className="justify-content-between d-flex flex-row w-100">
                <TypeItem type="dog" image={filterImage} />
                <TypeItem type="cat" image={filterImage} />
                <TypeItem type="bird" image={filterImage} />
            </div>
            <div className="justify-content-between d-flex flex-row w-100">
                <TypeItem type="dog" image={filterImage} />
                <TypeItem type="cat" image={filterImage} />
                <TypeItem type="bird" image={filterImage} />
            </div>
            <div className="justify-content-between d-flex flex-row w-100">
                <TypeItem type="dog" image={filterImage} />
                <TypeItem type="cat" image={filterImage} />
                <TypeItem type="bird" image={filterImage} />
            </div>
        </div>
    );
};

export default TypeFilterFrame;
