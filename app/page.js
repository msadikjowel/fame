import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import ParallaxSection from "../components/ParallaxSection";
import Stats from "../components/Stats";
import TestimonialsSlider from "../components/TestimonialsSlider";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <HeroSlider />
      <Services />
      <ParallaxSection />
      <Stats />
      <TestimonialsSlider />
      <Footer />
    </>
  );
}
