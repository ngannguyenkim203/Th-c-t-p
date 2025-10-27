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

// export const validateDate = (date) => {
//     return new Date(date).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0);
// }
export const validateDate = (date) => {
  if (!date) return false;

  const birthDate = new Date(date);
  if (isNaN(birthDate.getTime())) return false; // Ngày không hợp lệ

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  //Không được chọn ngày trong tương lai
  if (birthDate > today) return false;

  //Kiểm tra đủ 13 tuổi
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age >= 13;
};

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordRegex.test(password);
}