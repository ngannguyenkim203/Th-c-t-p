import { getForumDataApi } from "../api/forumApi";

export const getForumDataService = async () => {
    try {
        // const userId = parseFloat((localStorage.getItem("userId")) ? localStorage.getItem("userId") : 0)
        // const response = await getPostDetailApi(postId, userId);
        const data = await getForumDataApi(1);
        return data;
    } catch (error) {
        console.error("Error fetching forum data:", error);
        throw error;
    }
}