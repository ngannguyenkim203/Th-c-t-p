import PublishItem from "./PublishItem";

const PublishFrame = () => {
    return (
        <div className="d-flex flex-column">
            {/* moment */}
            <PublishItem name={"Moment"} content={
                (<div></div>)
            } />
            {/* blog */}
            <PublishItem name={"Blog"} content={
                (<div></div>)
            } />
            {/* forum */}
            <PublishItem name={"Forum Post"} content={
                (<div></div>)
            } />
        </div>
    );
};

export default PublishFrame;