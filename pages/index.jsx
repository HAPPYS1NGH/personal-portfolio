import Image from "next/image";
import Header from '../components/Header'
import About from '../components/About'
import Projects from "../components/Projects"
import Blog from "../components/Blog"
import Community from "../components/Community"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import BuyMeACoffee from "@/components/BuyMeACoffee";
export default function Home() {
  return (<>
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <div className="relative">
        <Community />
        <div className="relative top-28 z-10">
          <BuyMeACoffee />
        </div>
        <Contact />
      </div>
    </div>
  </>)
    ;
}
