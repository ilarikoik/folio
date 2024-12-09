import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Historia from "./components/historia";
import Courses from "./components/courses";
import Proje from "./components/proje";
import "./jscss/scrollReveal";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  AOS.init();

  return (
    <div aos="flip-up" className="bg-custom-beige min-h-screen ">
      <Header aos="fade-in"></Header>
      <About aos="fade-in"></About>
      <div className="hidden lg:block">
        <Proje></Proje>
      </div>
      <div className="lg:hidden">
        <Projects aos="zoom-in-up"></Projects>
      </div>
      <Historia aos="zoom-in-up"></Historia>
      <Courses aos="zoom-in-up"></Courses>
      <Footer aos="fade-in"></Footer>
      {/*joku pieni hoveri ja ehkä kuvat tekstin tilalle ja nappi mist saa "listätietoja ja siin ois se teksti*/}
      {/*/OTA yhteyttä lomake*/}
    </div>
  );
}
