import React from "react";
const tabs = [
    { 'id': "overview", label: "overview" },
    { 'id': "publish", label: "publish" },
    { 'id': "services", label: "services" },
    { 'id': "following", label: "following" }
];

const ExpertNav = ({ activeTab, setActiveTab }) => {
    return (
        <div className="d-flex flex-row justify-content-between align-items-center p-1 expert-nav">
            <div className="d-flex flex-row gap-1">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-4 py-1 fw-bold border-0 expert-nav-item ${activeTab === tab.id ? "expert-nav-item-active" : "expert-nav-item-inactive"}`}
                        onClick={() => setActiveTab(tab.id)}
                    >{tab.label}</button>
                ))}
            </div>
            {/* ... icon */}
            <button className="btn border-0 ">...</button>
        </div>
    );
};

export default ExpertNav;