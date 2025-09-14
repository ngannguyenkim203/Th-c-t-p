import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

export const getForumDataApi = async (userId) => {
    console.log("user detail of forum:", userId);
    const res = await axios.post(`${API_URL}/forum`, { userId },
        { headers: { 'Content-Type': 'application/json' } }
    );
    return res.data;
}