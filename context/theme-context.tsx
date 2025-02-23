"use client"

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<{ theme: "light" | "dark"; toggleTheme: () => void } | null>(null);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        const LocalTheme = window.localStorage.getItem("theme") as "light" | "dark";
        if (LocalTheme) {
            setTheme(LocalTheme);
            if (LocalTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        }
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useTheme must be used within ThemeContextProvider");
    }
    return context;
}

export default ThemeContextProvider;