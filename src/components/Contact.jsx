import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    const contactInfo = [
        {
            icon: "/images/svg/email-svgrepo-com.svg",
            title: "Email",
            value: "dayundraofficial@gmail.com",
            href: "mailto:dayundraofficial@gmail.com",
        },
        {
            icon: "/images/svg/icons8-linkedin.svg",
            title: "LinkedIn",
            value: "linkedin.com/in/daffa",
            href: "https://www.linkedin.com/in/daffa-yusuf-mahendra/",
        },
        {
            icon: "/images/svg/icons8-github.svg",
            title: "GitHub",
            value: "github.com/daffa",
            href: "https://github.com/DaffaYusufM",
        },
        {
            icon: "/images/svg/whatsapp-svgrepo-com.svg",
            title: "Phone",
            value: "+62 8953 2570 9058",
            href: "https://wa.me/0895325709058",
        },
    ];

    return (
        <section className="section-contact" id="contact">
            <div className="contact-container">
                {/* Left: Text and Contact Cards */}
                <div className="contact-left">
                    <div className="contact-text">
                        <h2>Let&apos;s Work Together</h2>
                        <p>
                            I&apos;m always excited to collaborate on creative projects, web
                            development, or UI/UX design ideas. Feel free to reach out through
                            the contacts below!
                        </p>
                    </div>

                    <div className="contact-cards">
                        {contactInfo.map((contact, index) => (
                            <div className="contact-card" key={index}>
                                <Image
                                    src={contact.icon}
                                    alt={`${contact.title} Icon`}
                                    width={40}
                                    height={40}
                                />
                                <div className="contact-info">
                                    <h4>{contact.title}</h4>
                                    <p>
                                        <Link href={contact.href} target="_blank">
                                            {contact.value}
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="contact-right">
                    <div className="contact-form">
                        <h3>Send Me a Message</h3>
                        <form
                            action="https://formsubmit.co/dayundraofficial@gmail.com"
                            method="POST"
                        >
                            <input type="hidden" name="_subject" value="Pesan Baru dari Portfolio Daffa!" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="Tell me about your project or just say hello!"
                                    rows="5"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-submit">
                                Send Message
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22 2L11 13"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M22 2L15 22L11 13L2 9L22 2Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
