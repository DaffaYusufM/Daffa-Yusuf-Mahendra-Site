"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { AuthProvider } from "@/context/AuthContext";
import { ProjectProvider } from "@/context/ProjectContext";

export function Providers({ children }) {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <AuthProvider>
                    <ProjectProvider>
                        {children}
                    </ProjectProvider>
                </AuthProvider>
            </LanguageProvider>
        </ThemeProvider>
    );
}
