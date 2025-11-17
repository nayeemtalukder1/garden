import Hero from "./components/Hero";
import About from "./components/About";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div id="about"><About /></div>
      <div id="shop"><Shop /></div>
      <div id="contact"><Footer /></div>

    </div>
  );
}
