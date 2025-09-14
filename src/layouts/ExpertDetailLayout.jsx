import MainHeader from "../components/Common/MainHeader";
import AchivementItem from "../components/Expert/AchivementItem";
import ExpertIntro from "../components/Expert/ExpertIntro";
import ExpertNav from "../components/Expert/ExpertNav";
import FeedbackItem from "../components/Expert/FeedbackItem";

const ExpertDetailLayout = ({ children }) => {
    return (
        <div className="forum-layout">
            {/* header */}
            <MainHeader />
            {/* body */}
            <div className="d-flex flex-row" style={{ padding: "20px" }}>
                {/* left */}
                <div>
                    <ExpertIntro />
                    <ExpertNav />
                    {/* nav content */}
                    <div></div>
                </div>
                {/* right */}
                <div>
                    <div>
                        <p>Achivement</p>
                        <div className="d-flex flex-row">
                            <AchivementItem icon={"fa-regular fa-gem"} content={"1 year operation"} />
                            <AchivementItem icon={"fa-brands fa-rocketchat"} content={"40 appoinments"} />
                            <AchivementItem icon={"fa-solid fa-bell"} content={"0 reports"} />
                        </div>
                    </div>
                    <div>
                        <p>Feedbacks</p>
                        <div>
                            <FeedbackItem
                                feedback={"After the session with the pet care expert, I gained a much deeper understanding of my cat's behavior and needs."}
                                date={"June 20, 2022 "} />
                            <FeedbackItem
                                feedback={"After the session with the pet care expert, I gained a much deeper understanding of my cat's behavior and needs."}
                                date={"June 20, 2022 "} />
                            <FeedbackItem
                                feedback={"After the session with the pet care expert, I gained a much deeper understanding of my cat's behavior and needs."}
                                date={"June 20, 2022 "} />
                            <FeedbackItem
                                feedback={"After the session with the pet care expert, I gained a much deeper understanding of my cat's behavior and needs."}
                                date={"June 20, 2022 "} />
                            <FeedbackItem
                                feedback={"After the session with the pet care expert, I gained a much deeper understanding of my cat's behavior and needs."}
                                date={"June 20, 2022 "} />
                            <FeedbackItem
                                feedback={"After the session with the pet care expert, I gained a much deeper understanding of my cat's behavior and needs."}
                                date={"June 20, 2022 "} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertDetailLayout;