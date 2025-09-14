import StarFeedback from "./StarFeedback";

const FeedbackItem = ({ feedback, date }) => {
    return (
        <div className="feedback-item d-flex flex-row">
            <div><img src="" alt="" /></div>
            <div>
                <p>{feedback}</p>
                <div>
                    <span>{date}</span>
                    <StarFeedback />
                </div>
            </div>
        </div>
    );
};

export default FeedbackItem;