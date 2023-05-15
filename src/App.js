import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layouts/Navbar";
import Banner from "./layouts/Banner";
import About from "./layouts/About";
import Projects from "./components/Projects";
import Footer from "./layouts/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
