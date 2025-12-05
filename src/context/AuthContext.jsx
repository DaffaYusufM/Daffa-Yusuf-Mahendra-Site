"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Simple password hash (for basic security)
const hashPassword = async (password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
};

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if admin is logged in
        const session = localStorage.getItem("admin_session");
        if (session) {
            const { expiry } = JSON.parse(session);
            if (new Date().getTime() < expiry) {
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem("admin_session");
            }
        }
        setIsLoading(false);
    }, []);

    const login = async (password) => {
        // Admin password - change this in production
        const ADMIN_PASSWORD = "admin123"; // You can customize this

        if (password === ADMIN_PASSWORD) {
            // Set session with 24 hour expiry
            const session = {
                authenticated: true,
                expiry: new Date().getTime() + (24 * 60 * 60 * 1000)
            };
            localStorage.setItem("admin_session", JSON.stringify(session));
            setIsAuthenticated(true);
            return { success: true };
        }
        return { success: false, error: "Invalid password" };
    };

    const logout = () => {
        localStorage.removeItem("admin_session");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
