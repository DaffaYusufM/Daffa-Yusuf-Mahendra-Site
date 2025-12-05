"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
    const { t, language } = useLanguage();

    const projects = [
        {
            image: "/images/img/coder-telyu.png",
            title: "CODER TELYU SBY",
            roleKey: "frontend",
        },
        {
            image: "/images/img/recalm.jpg",
            title: "Recalm Project",
            roleKey: "fullstack",
        },
        {
            image: "/images/img/JelajahWorld.png",
            title: "Jelajah World",
            roleKey: "frontend",
        },
    ];

    return (
        <section className="section-project" id="project">
            <div className="project-container">
                <h2>{t("projects.title")}</h2>
                <h4>{t("projects.subtitle")}</h4>

                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={200}
                                style={{ objectFit: "cover" }}
                            />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{t(`projects.roles.${project.roleKey}`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
