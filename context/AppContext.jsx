"use client"

import { useUser } from "@clerk/nextjs";
import React, { createContext, useContext } from "react";

export const AppContext = createContext({ user: null });

export const AppContextProvider = (props) => {
    const { user } = useUser();
    return (
        <AppContext.Provider value={{ user }}>
            {props.children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);