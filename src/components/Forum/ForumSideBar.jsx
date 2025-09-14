import FollowingFrame from "./FollowingFrame";
import HistoryFrame from "./HistoryFrame";

const ForumSideBar = ({ limitHistories, limitSaves }) => {
    console.log("limitHistories in side bar: ", limitHistories);

    return (
        <div style={{ width: "345px" }}>
            <div>
                {(limitHistories != null)
                    ? (
                        <>
                            <h4 className="mb-3">Post History</h4>
                            <div style={{ gap: "10px" }} className="d-flex flex-column">
                                {limitHistories.map((history, index) => (
                                    <HistoryFrame post={history} key={index} />
                                ))}
                            </div>
                            <button className="see-more-btn">See more</button>
                        </>
                    )
                    : (<div></div>)}
            </div>
            {/* follow */}
            <div className="following-box">
                <h4>Following</h4>
                <div className="d-flex flex-row" style={{ gap: "20px" }}>
                    <FollowingFrame />
                    <FollowingFrame />
                    <FollowingFrame />
                </div>
            </div>
            {/* saved */}
            <div>
                {(limitSaves != null)
                    ? (
                        <>
                            <h4 className="mb-3">Saved History</h4>
                            <div style={{ gap: "10px" }} className="d-flex flex-column">
                                {limitSaves && limitSaves.map((save, index) => (
                                    <HistoryFrame post={save} key={index} />
                                ))}
                            </div>
                            <button className="see-more-btn">See more</button>
                        </>
                    )
                    : (<div></div>)}




            </div>
        </div>
    );
};

export default ForumSideBar;