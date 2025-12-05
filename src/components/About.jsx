"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();
    const skills = ["UI/UX", "Web Dev", "Machine Learning", "AI Automation"];

    return (
        <section className="section-about" id="about">
            <div className="about-container">
                {/* Left: Image */}
                <div className="about-image">
                    <Image
                        src="/images/img/daffa.png"
                        alt="About Illustration"
                        width={500}
                        height={500}
                    />
                </div>

                {/* Right: Text */}
                <div className="about-text">
                    <h2>{t("about.title")}</h2>
                    <p>{t("about.description")}</p>
                    <ul className="about-skills">
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
