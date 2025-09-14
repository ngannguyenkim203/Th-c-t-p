import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

export const addPostApi = async (postData) => {
    const res = await axios.post(`${API_URL}/forum/add-post`, postData);
    return res.data;
};

export const getPostDetailApi = async (postId, userId) => {
    console.log("user detail ask:", userId);
    const res = await axios.post(`${API_URL}/forum/post-detail`, { postId, userId }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log("Post detail response:", postId);
    return res.data;
};

export const getPostSearchApi = async (keyword) => {
    const res = await axios.get(`${API_URL}/forum/search/${keyword}`);
    return res.data;
};

export const getPostListApi = async () => {
    const res = await axios.get(`${API_URL}/forum/post-list`);
    return res.data;
};

