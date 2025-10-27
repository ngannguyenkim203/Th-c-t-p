import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL;
console.log("🔗 API_URL =", process.env.REACT_APP_API_URL);

export const loginApi = async (email, password) => {
    const res = await axios.post(`${API_URL}/auth/login`, {
        email,
        password
    });

    return res.data;
};

export const registerApi = async (userData) => {
    const res = await axios.post(`${API_URL}/auth/register`, userData);
    return res.data;
};

// export const checkExistingEmailApi = async (email) => {
//     try {
//         await axios.post(`${API_URL}/auth/check-email`, { email },
//             { headers: { 'Content-Type': 'application/json' } });
//         return { exist: false }
//     } catch (error) {
//         console.error("Error checking existing email:", error);
//         if (error.response.status === 409) {
//             return { exist: true };
//         }
//         throw error;
//     }
// };
export const checkExistingEmailApi = async (email) => {
    const url = `${API_URL}/auth/check-email/${email}`;
    console.log("🔍 Gọi API:", url);
    return axios.get(url);
};


export const checkAuthApi = async () => {
    try {
        const token = localStorage.getItem("token"); // lấy token đã lưu trong localStorage (ở trình duyệt) ra để dùng
        const res = await axios.post(`${API_URL}/profile/check-login`, {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        // console.log("Response from checkAuth API:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error checking authentication:", error);
        throw error;
    }
};