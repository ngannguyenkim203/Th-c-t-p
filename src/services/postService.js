import { addPostApi, getPostDetailApi, getPostListApi, getPostSearchApi } from "../api/postApi";

export const addPostService = async (postData) => {
    const response = await addPostApi(postData);
    return response;
};

export const getPostDetailService = async (postId) => {
    // const userId = parseFloat((localStorage.getItem("userId")) ? localStorage.getItem("userId") : 0)
    // const response = await getPostDetailApi(postId, userId);
    const response = await getPostDetailApi(postId, "1");
    return response;
};

export const getPostSearchService = async (keyword) => {
    const response = await getPostSearchApi(keyword);
    return response;
};

export const getPostListService = async () => {
    const response = await getPostListApi();
    return response;
};



