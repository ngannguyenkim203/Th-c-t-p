import { checkAuthApi, checkExistingEmailApi, loginApi, registerApi } from "../api/authApi";

// call API + save reducer state
const loginService = async (email, password) => {
    const response = await loginApi(email, password);
    console.log("Response login:", response); 
    // Lưu token và user info vào localStorage
    if (response?.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify({
            id: response.userId,
            email: response.email,
            role: response.role,
        }));
    }
    return response;
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

export const checkAuth = async () => {
    const isAuth = await checkAuthApi();
    if (isAuth === "Login-ok") {
        // console.log("User is authenticated");
        return true;
    }
    return false;
}

export default authService;