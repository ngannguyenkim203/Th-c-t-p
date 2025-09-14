import React, { createContext, useState, useContext } from "react";

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => setIsNavOpen(true);
    const closeNav = () => setIsNavOpen(false);

    return (
        <NavigationContext.Provider value={{ isNavOpen, openNav, closeNav }}>
            {children}
        </NavigationContext.Provider>
    );
};