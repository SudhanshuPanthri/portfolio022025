"use client"

import React, { createContext, useContext, useState } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
    timeofLastClick: number,
    setTimeofLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");

    const [timeofLastClick, setTimeofLastClick] = useState(0);
    return (
        <ActiveSectionContext.Provider value={{
            activeSection,
            setActiveSection,
            timeofLastClick,
            setTimeofLastClick
        }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error("useActiveSectionContext must be used within a ActiveSectionContextProvider");
    }
    return context;
}