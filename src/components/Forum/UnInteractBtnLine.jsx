import SaveBtn from "./SaveBtn";
import UnInteractBtn from "./UnInteractBtn";

const UnInteractBtnLine = ({ viewNum, commentNum }) => {
    return (
        <div className="d-flex flex-row uninteract-line">
            <UnInteractBtn content={viewNum} icon="fa-solid fa-eye" />
            <UnInteractBtn content={commentNum} icon="fa-solid fa-comment" />
            <SaveBtn />
        </div>
    );
};

export default UnInteractBtnLine;