import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

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

export const checkExistingEmailApi = async (email) => {
    try {
        await axios.post(`${API_URL}/auth/check-email`, { email },
            { headers: { 'Content-Type': 'application/json' } });
        return { exist: false }
    } catch (error) {
        console.error("Error checking existing email:", error);
        if (error.response.status === 409) {
            return { exist: true };
        }
        throw error;
    }
};

