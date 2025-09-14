import authService from "../services/authService";

export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export const validateExistingEmail = async (email) => {
    const isValid = await authService.checkExistingEmailService(email);
    console.log("Checking existing email:", isValid);
    return isValid;
}

export const validateDate = (date) => {
    return new Date(date).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0);
}

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordRegex.test(password);
}