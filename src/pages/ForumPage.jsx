import React, { useEffect, useState } from "react";
import SearchBox from "../components/Common/SearchBox";
import ForumLayout from "../layouts/ForumLayout"
import PopularFrame from "../components/Forum/PopularFrame";
import ShortcutFame from "../components/Forum/ShortcutFame";
import TypeFilterFrame from "../components/Forum/TypeFilterFrame";
import CategoryFilterFrame from "../components/Forum/CategoryFilterFrame";
import "../styles/forum.css";
import FilterTag from "../components/Forum/FilterTag";
import PostEditPopup from "../components/Forum/PostEditPopup";
import { getForumDataService } from "../services/forumService";

const ForumPage = () => {
    const [activeTag, setActiveTab] = useState('type');
    const [isShowPopup, setShowPopup] = useState(false);
    const [postList, setPostList] = useState(null);
    const [popularList, setPopularList] = useState(null);
    const [historyList, setHistoryList] = useState(null);
    const [saveList, setSaveList] = useState(null);

    const [data, setData] = useState(null);

    useEffect(() => {
        getForumDataService()
            .then(response => {
                setData(response);
                setPopularList(response.popularPosts);
                setPostList(response.postList);
                setHistoryList(response.historyPosts);
                setSaveList(response.savePosts);
            })
            .catch(err => console.error("Error load forum data:", err));
    }, []);

    if (!data) return <div>Loading...</div>;
    console.log("History data:", historyList);

    const renderTabContent = (activeTag) => {
        switch (activeTag) {
            case 'type':
                return <TypeFilterFrame />;
            case 'category':
                return <CategoryFilterFrame />;
            default:
                return null;
        }
    };

    const setDisplay = () => {
        switch (isShowPopup) {
            case false:
                setShowPopup(true);
                break;
            case true:
                setShowPopup(false);
                break;
            default:
                setShowPopup(false);
        }
    }

    return (
        <ForumLayout limitHistoryList={historyList} limitSaves={saveList}>
            {/* question */}
            <div>
                <h2>What do you want?</h2>
                <SearchBox onListSet={setPostList} type={"post"} />
            </div>
            {/* content */}
            <div className="d-flex flex-row justify-content-between align-items-start w-fit-content" style={{ gap: "20px" }}>
                {/* left */}
                <div className="p-0 filter-column" style={{ width: "261px" }}>
                    {/* open popup */}
                    <button className="w-100 new-post-btn d-flex flex-row align-items-center justify-content-between mb-3"
                        onClick={setDisplay}
                    >
                        <i class="fa-solid fa-paper-plane"></i>
                        <span>Post new question</span>
                    </button>
                    <div className="filter-box pb-3">
                        {/* tabs */}
                        <div className="position-relative d-flex flex-row w-100 filter-tabs">
                            <div className={`tab-slider ${activeTag}`} />
                            <button
                                className={`${activeTag === 'type' ? 'active-button' : 'unactive-button'}`}
                                onClick={() => setActiveTab('type')}
                            >Type</button>
                            <button
                                className={`${activeTag === 'category' ? 'active-button' : 'unactive-button'}`}
                                onClick={() => setActiveTab('category')}
                            >Category</button>
                        </div>
                        {/* content tab */}
                        <div className="mt-2 w-100" style={{ height: "257px" }}>
                            {renderTabContent(activeTag)}
                        </div>
                    </div>
                    {/* filter */}
                    <div className="pt-3">
                        <h3>Filter</h3>
                        {/* type name */}
                        <div style={{ gap: "10px" }} className="d-flex flex-column">
                            <div className="d-flex flex-row filter-tag-line">
                                <FilterTag filter="Styles" />
                                <FilterTag filter="Stories" />
                                <FilterTag filter="Service" />
                            </div>
                            <div className="d-flex flex-row filter-tag-line">
                                <FilterTag filter="Health and Take care" />
                                <FilterTag filter="Product" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* main */}
                <div className="py-0 w-100" style={{ padding: "0 20px" }}>
                    {/* slide */}
                    <div className="d-flex flex-row" style={{ gap: "20px" }}>
                        {/* <PopularFrame />
                        <PopularFrame /> */}
                        {popularList.map(post => (
                            <PopularFrame key={post.id} post={post} />
                        ))}
                    </div>
                    {/* normal posts */}
                    <div style={{ gap: "20px" }} className="d-flex flex-column">
                        {/* <ShortcutFame />
                        <ShortcutFame />
                        <ShortcutFame /> */}
                        {(postList.length > 0) ? (
                            postList.map(post => (
                                <ShortcutFame key={post.id} post={post} />
                            ))
                        ) : (<div className="text-muted text-center mt-4">No suitable result!</div>)}
                    </div>
                </div>
            </div>
            <PostEditPopup state={isShowPopup} setDisplay={setDisplay} onListSet={(newPost) => setPostList([newPost, postList])} />
            {/* <PostEditPopup /> */}
            <div className={`d-flex popup-overlay w-100 h-100 ${isShowPopup ? 'd-block' : 'd-none'}`}
                onClick={setDisplay}
            ></div>
        </ForumLayout>
    );
};

export default ForumPage;