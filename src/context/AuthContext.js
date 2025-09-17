import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      // Nếu là null hoặc "undefined" thì trả về null
      if (!savedUser || savedUser === "undefined") return null;
      return JSON.parse(savedUser);
    } catch (error) {
      console.error("Lỗi parse user từ localStorage:", error);
      return null;
    }
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    // sessionStorage.setItem("userId", userData.id); // ✅ lưu userId
    // localStorage.setItem("userId", userData.id);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    sessionStorage.removeItem("userId"); // ✅ xoá khi logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
