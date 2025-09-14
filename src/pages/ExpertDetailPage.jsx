import { useState } from "react";
import AchivementItem from "../components/Expert/AchivementItem";
import ExpertIntro from "../components/Expert/ExpertIntro";
import ExpertNav from "../components/Expert/ExpertNav";
import FeedbackItem from "../components/Expert/FeedbackItem";
import MainLayout from "../layouts/MainLayout";
import "../styles/expert.css";
import OverviewFrame from "../components/Expert/OverviewFrame";
import PublishFrame from "../components/Expert/PublishFrame";
import ServicesFrame from "../components/Expert/ServicesFrame";
import FollowingFrame from "../components/Expert/FollowingFrame";

const ExpertDetailPage = ({ children }) => {
    const [activeTab, setActiveTab] = useState("overview");
    return (
        <MainLayout>
            <div className="d-flex flex-row gap-4" style={{ padding: "20px" }}>
                {/* left */}
                <div style={{ width: "70%" }}>
                    <ExpertIntro />
                    <ExpertNav activeTab={activeTab} setActiveTab={setActiveTab} />
                    {/* nav content */}
                    <div>
                        {activeTab === "overview" && <OverviewFrame />}
                        {activeTab === "publish" && <PublishFrame />}
                        {activeTab === "services" && <ServicesFrame />}
                        {activeTab === "following" && <FollowingFrame />}
                    </div>
                </div>
                {/* right */}
                <div style={{ width: "fit-content" }}>
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
        </MainLayout>
    );
};

export default ExpertDetailPage;