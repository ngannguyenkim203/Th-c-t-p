import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
        // return savedUser ? savedUser : null
    });

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        // sessionStorage.setItem("userId", userData.id); // ✅ lưu userId
        // localStorage.setItem("userId", userData.id);
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
         sessionStorage.removeItem("userId"); // ✅ xoá khi logout
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);