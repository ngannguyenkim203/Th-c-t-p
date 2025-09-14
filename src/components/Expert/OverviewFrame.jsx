import OverviewItem from "./OverviewItem";

const OverviewFrame = () => {
    return (
        <div className="d-flex flex-row justify-content-between gap-3">
            <OverviewItem />
            <OverviewItem />
            <OverviewItem />
        </div>
    );
};

export default OverviewFrame;