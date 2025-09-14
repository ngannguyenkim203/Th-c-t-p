import React, { useState } from "react";
import EditPostBtn from "./EditPostBtn";
import "../../styles/post-edit.css";
import { addPostService } from "../../services/postService";

const PostEditPopup = ({ state, setDisplay, onListSet }) => {
    const [selectedType, setSelectedType] = useState('Choose Type');
    const [selectedCategory, setSelectedCategory] = useState('Choose Category');

    const [form, setForm] = useState({
        title: "",
        content: "",
        state: "active",
        type: "",
        userId: 1,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSelect = (type) => {
        setSelectedType(type);
        setForm({ ...form, type: type });
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        // setForm({ ...form, category: type });
    };

    const handleAddPost = async (e) => {
        e.preventDefault();

        if (!form.title || !form.content) {
            alert("Please fill in all fields.");
            return;
        }

        // add category
        if (!form.type) {
            alert("Please select an animal type.");
            return;
        }

        try {
            const post = await addPostService(form);
            if (post) {
                alert("Post added successfully!");
                setForm({ userId: "", title: "", content: "", state: "active", type: "" });
                setDisplay()
                onListSet(post);
            }
        } catch (error) {
            console.error("Error adding post:", error);
            alert("Failed to add post. Please try again.");
        }
        // finally {
        //     setDisplay(false);
        // };
    }

    return (
        <div className={`post-edit-popup p-3 d-flex flex-column ${state ? 'd-block' : 'd-none'}`}>
            {/* header */}
            <div className="d-flex flex-row justify-content-between align-items-center mb-2" style={{ height: 'fit-content' }}>
                <h3 id="postEditPopupLabel">Edit Post</h3>
                {/* exit */}
                <button
                    className="close-edit-popup-btn"
                    onClick={setDisplay}
                ><i class="fa-solid fa-xmark"></i></button>
            </div>
            {/* content */}
            <form onSubmit={handleAddPost} className="d-flex flex-column w-100 h-100">
                <div className="d-flex flex-row align-items-start w-100 flex-grow-1" style={{ gap: '20px' }}>
                    {/* <textarea */}
                    <div style={{ width: '712px', borderRadius: "5px" }} className="d-flex flex-column h-100">
                        <textarea
                            className="w-100 form-control p-2 topic-input mb-3"
                            placeholder="Edit topic of your here..."
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            rows={2} maxLength={100} />
                        {/* icons */}
                        <div className="card shadow-sm w-100 flex-grow-1 d-flex flex-column">
                            <div className="d-flex flex-row align-items-center" style={{ height: 'fit-content' }}>
                                <button className="bg-transparent h-100 d-flex flex-row align-items-center paragraph-btn flex-grow-1"><span>Paragraph</span> <i class="fa-solid fa-chevron-down"></i></button>
                                <div className="edit-post-btns-line">
                                    <EditPostBtn icon={"fa-solid fa-bold"} />
                                    <EditPostBtn icon={"fa-solid fa-italic"} />
                                    <EditPostBtn icon={"fa-solid fa-underline"} />
                                    <EditPostBtn icon={"fa-solid fa-strikethrough"} />
                                </div>
                                <div className="edit-post-btns-line">
                                    <EditPostBtn icon={"fa-solid fa-align-left"} />
                                    <EditPostBtn icon={"fa-solid fa-align-center"} />
                                    <EditPostBtn icon={"fa-solid fa-align-right"} />
                                </div>
                                <div className="edit-post-btns-line">
                                    <EditPostBtn icon={"fa-solid fa-list-ol"} />
                                    <EditPostBtn icon={"fa-solid fa-list-ul"} />
                                </div>
                                <div className="edit-post-btns-line">
                                    <EditPostBtn icon={"fa-regular fa-face-smile"} />
                                    <EditPostBtn icon={"fa-regular fa-image"} />
                                </div>

                            </div>
                            <textarea className="border-0 p-2 fs-6 flex-grow-1" rows={10} placeholder="Write content..."
                                name="content"
                                value={form.content}
                                onChange={handleChange}
                                maxLength={2000}></textarea>
                            <div className="word-count-line">Word Count: 1,158</div>
                        </div>
                    </div>
                    {/* attribute */}
                    <div className="flex-grow-1" style={{ backgroundColor: "white", borderRadius: "5px", border: "1px solid #E2E8F0", color: "#475569" }}>
                        <div className="attribute-frame fw-bolder" style={{ padding: "12px 16px" }}>Attributes</div>
                        <div className="attribute-frame" style={{ padding: "20px 16px" }}>
                            <div>Animal Type</div>
                            <div className="dropdown">
                                <button className="btn d-flex align-items-center justify-content-between border rounded-pill px-3 py-2 w-100"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span><i class="fa-solid fa-paw"></i> {selectedType}</span>
                                    <span><i class="fa-solid fa-chevron-down"></i></span>
                                </button>

                                <ul className="dropdown-menu w-100 shadow-sm mt-1">
                                    {['Dog', 'Cat', 'Bird', 'Fish', 'Reptile'].map((type) => (
                                        <li key={type}>
                                            <button
                                                className="dropdown-item"
                                                type="button"
                                                onClick={() => handleSelect(type)}>
                                                <span>{type}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="attribute-frame" style={{ padding: "20px 16px" }}>
                            <div>Post Categories</div>
                            <div className="dropdown">
                                <button className="btn d-flex align-items-center justify-content-between border rounded-pill px-3 py-2 w-100"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span><i class="fa-solid fa-icons mr-3"></i> <span className="ml-2">{selectedCategory}</span></span>
                                    <span><i class="fa-solid fa-chevron-down"></i></span>
                                </button>
                                <ul className="dropdown-menu w-100 shadow-sm mt-1">
                                    {['Style', 'Health', 'Product', 'Take care', 'Training'].map((category) => (
                                        <li key={category}>
                                            <button
                                                className="dropdown-item"
                                                type="button"
                                                onClick={() => handleCategorySelect(category)}>
                                                <span>{category}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="attribute-frame d-flex flex-row justify-content-end" style={{ padding: "12px 16px" }}>
                            <button className="sub-attr-btn" type="submit"
                                onClick={() => setForm({ ...form, state: "draft" })}
                            >Save Draft</button>
                            <button className="main-attr-btn" type="submit"
                                onClick={() => setForm({ ...form, state: "active" })}
                            >Publish</button>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    );
};

export default PostEditPopup;