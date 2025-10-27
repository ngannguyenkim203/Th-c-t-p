import React, { createContext, useContext, useState, useEffect } from "react";

// Tạo Context
const AuthContext = createContext();

// Provider bao quanh toàn bộ app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Khi app load lại, đọc từ localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  // Khi login thành công
  const login = (userData, token) => {
    setUser(userData);
    setToken(token);
  };

  // Khi logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook để dùng nhanh
export const useAuth = () => useContext(AuthContext);
