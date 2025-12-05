"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ProjectContext = createContext();

// Default projects
const defaultProjects = [
    {
        id: "1",
        image: "/images/img/coder-telyu.png",
        title: "CODER TELYU SBY",
        roleKey: "frontend",
    },
    {
        id: "2",
        image: "/images/img/recalm.jpg",
        title: "Recalm Project",
        roleKey: "fullstack",
    },
    {
        id: "3",
        image: "/images/img/JelajahWorld.png",
        title: "Jelajah World",
        roleKey: "frontend",
    },
];

export function ProjectProvider({ children }) {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Load projects from localStorage
        const stored = localStorage.getItem("portfolio_projects");
        if (stored) {
            setProjects(JSON.parse(stored));
        } else {
            // Initialize with default projects
            setProjects(defaultProjects);
            localStorage.setItem("portfolio_projects", JSON.stringify(defaultProjects));
        }
        setIsLoading(false);
    }, []);

    const saveProjects = (newProjects) => {
        setProjects(newProjects);
        localStorage.setItem("portfolio_projects", JSON.stringify(newProjects));
    };

    const addProject = (project) => {
        const newProject = {
            ...project,
            id: Date.now().toString(),
        };
        const newProjects = [...projects, newProject];
        saveProjects(newProjects);
        return newProject;
    };

    const updateProject = (id, updatedData) => {
        const newProjects = projects.map(p =>
            p.id === id ? { ...p, ...updatedData } : p
        );
        saveProjects(newProjects);
    };

    const deleteProject = (id) => {
        const newProjects = projects.filter(p => p.id !== id);
        saveProjects(newProjects);
    };

    const getProject = (id) => {
        return projects.find(p => p.id === id);
    };

    return (
        <ProjectContext.Provider value={{
            projects,
            isLoading,
            addProject,
            updateProject,
            deleteProject,
            getProject
        }}>
            {children}
        </ProjectContext.Provider>
    );
}

export function useProjects() {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error("useProjects must be used within a ProjectProvider");
    }
    return context;
}
