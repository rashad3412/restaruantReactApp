import About from "./components/About";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import Vibez from "./components/Vibez";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Menu />
      <Vibez />
      <Contact />
      <Footer />
    </div>
  );
}
