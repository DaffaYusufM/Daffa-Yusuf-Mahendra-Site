"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useProjects } from "@/context/ProjectContext";

export default function Projects() {
    const { t } = useLanguage();
    const { projects, isLoading } = useProjects();

    if (isLoading) {
        return (
            <section className="section-project" id="project">
                <div className="project-container">
                    <h2>{t("projects.title")}</h2>
                    <h4>{t("projects.subtitle")}</h4>
                    <div className="project-loading">
                        <div className="spinner"></div>
                        <p>Loading projects...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section-project" id="project">
            <div className="project-container">
                <h2>{t("projects.title")}</h2>
                <h4>{t("projects.subtitle")}</h4>

                <div className="project-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={200}
                                style={{ objectFit: "cover" }}
                                onError={(e) => {
                                    e.target.src = '/images/img/placeholder.png';
                                }}
                            />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{t(`projects.roles.${project.roleKey}`)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {projects.length === 0 && (
                    <div className="project-empty">
                        <p>No projects yet</p>
                    </div>
                )}
            </div>
        </section>
    );
}
