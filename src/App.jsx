import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";
export default function App() {
  return (
    <div className="bg-custom-beige min-h-screen ">
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}
