import Image from "next/image";
import Link from "next/link";

export default function Profile() {
    return (
        <section className="profile" id="profile">
            <div className="container-profile">
                {/* Left: Text */}
                <div className="profile-content">
                    <h4>Hello, I&apos;m</h4>
                    <h1>Daffa Yusuf Mahendra.</h1>
                    <p>Undergraduate Information System at Telkom University Surabaya</p>

                    {/* Buttons */}
                    <div className="profile-buttons">
                        <Link href="mailto:dayundraofficial@gmail.com" className="btn btn-contact">
                            Contact Me
                        </Link>
                        <button className="btn btn-work">
                            Download CV
                            <Image src="/images/svg/TablerDownload.svg" alt="Download CV" width={18} height={18} />
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="profile-socials">
                        <Link href="https://github.com/DaffaYusufM" aria-label="GitHub" target="_blank">
                            <Image src="/images/svg/icons8-github.svg" alt="Github" width={32} height={32} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/daffa-yusuf-mahendra/" aria-label="LinkedIn" target="_blank">
                            <Image src="/images/svg/icons8-linkedin.svg" alt="LinkedIn" width={32} height={32} />
                        </Link>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="profile-image">
                    <Image
                        className="profile-img"
                        src="/images/img/daffa.png"
                        alt="Daffa Yusuf Mahendra"
                        width={500}
                        height={500}
                    />
                </div>

                {/* Background Circles */}
                <div className="circle-yellow"></div>
                <div className="circle-purple"></div>
                <div className="circle-green"></div>
                <div className="circle-blue"></div>
            </div>
        </section>
    );
}
