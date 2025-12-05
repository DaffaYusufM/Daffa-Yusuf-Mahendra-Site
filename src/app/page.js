import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import About from "@/components/About";
import Interests from "@/components/Interests";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Interests />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  );
}
