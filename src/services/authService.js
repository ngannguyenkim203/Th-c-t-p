import { checkExistingEmailApi, loginApi, registerApi } from "../api/authApi";

// call API + save reducer state
// const loginService = async (email, password) => {
//     const response = await loginApi(email, password);
//     return response;
// };
const loginService = async (email, password) => {
    try {
        const response = await loginApi(email, password);
        console.log("Login success:", response); // ✅ In ra response
        return response;
    } catch (err) {
        console.error("Login error:", err);
        throw err;
    }
};

const registerService = async (userData) => {
    const response = await registerApi(userData);
    return response;
}

const checkExistingEmailService = async (email) => {
    const isExist = await checkExistingEmailApi(email);
    if (isExist.exist) {
        console.log("Yes");
        return true
    }
    else
        return false;
}

const authService = {
    loginService,
    registerService,
    checkExistingEmailService
};

export default authService;