import Image from "next/image";

export default function About() {
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
                    <h2>About Me</h2>
                    <p>
                        Saya Daffa Yusuf Mahendra, mahasiswa Sistem Informasi yang memiliki
                        ketertarikan kuat di bidang web development, UI/UX design, serta
                        perkembangan kecerdasan buatan (AI). Saya senang mengeksplorasi cara
                        teknologi dapat menciptakan solusi inovatif yang bermanfaat bagi
                        masyarakat. Dengan latar belakang akademik dan minat yang beragam,
                        saya berusaha untuk terus belajar dan mengasah kemampuan dalam
                        membangun sistem serta antarmuka yang fungsional, estetis, dan
                        berorientasi pada pengguna.
                    </p>
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
