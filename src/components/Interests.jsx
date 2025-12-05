"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Interests() {
    const { t } = useLanguage();
    const interests = t("interests.items");

    return (
        <section className="section-interest" id="interest">
            <div className="interest-container">
                <h2>{t("interests.title")}</h2>
                <div className="interest-grid">
                    {interests && interests.map((interest, index) => (
                        <div className="interest-card" key={index}>
                            <h3>{interest.title}</h3>
                            <p>{interest.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
