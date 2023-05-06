import Image from "next/image";
import Header from '../components/Header'
import About from '../components/About'
import Projects from "../components/Projects"
import Blog from "../components/Blog"
import Community from "../components/Community"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
export default function Home() {
  return (<>
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Community />
      {/* <Blog /> */}
      <Contact />
    </div>
  </>)
    ;
}
