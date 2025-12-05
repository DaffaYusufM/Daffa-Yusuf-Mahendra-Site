export default function Interests() {
    const interests = [
        {
            title: "UI/UX Design",
            description:
                "Saya tertarik pada desain antarmuka yang responsif dan estetis, serta bagaimana pengalaman pengguna dapat ditingkatkan melalui tata letak dan interaksi yang rapi.",
        },
        {
            title: "Web Development",
            description:
                "Saya tertarik membangun website yang interaktif, responsif, dan efisien dengan fokus pada performa dan kemudahan penggunaan.",
        },
        {
            title: "Machine Learning",
            description:
                "Saya memiliki minat dalam memahami bagaimana sistem dapat belajar dari data dan membuat prediksi atau keputusan secara otomatis.",
        },
        {
            title: "AI Automation",
            description:
                "Saya memiliki minat mengembangkan otomatisasi berbasis kecerdasan buatan untuk menyederhanakan pekerjaan berulang dan meningkatkan produktivitas.",
        },
    ];

    return (
        <section className="section-interest" id="interest">
            <div className="interest-container">
                <h2>My Interests</h2>
                <div className="interest-grid">
                    {interests.map((interest, index) => (
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
