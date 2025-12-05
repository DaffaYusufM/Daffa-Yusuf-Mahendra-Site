import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            image: "/images/img/coder-telyu.png",
            title: "CODER TELYU SBY",
            role: "Front-End Developer",
        },
        {
            image: "/images/img/recalm.jpg",
            title: "Recalm Project",
            role: "Full Stack Developer",
        },
        {
            image: "/images/img/JelajahWorld.png",
            title: "Jelajah World",
            role: "Front-End Developer",
        },
    ];

    return (
        <section className="section-project" id="project">
            <div className="project-container">
                <h2>Projects</h2>
                <h4>Recent Works</h4>

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
                                <p>{project.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
