import About from "../src/components/About/About.jsx";
import BackToTop from "../src/components/BackToTop/BackToTop.jsx";
import Carousel from "../src/components/Carousel/Carousel.jsx";
import Contact from "../src/components/Contact/Contact.jsx";
import Faq from "../src/components/Faq/Faq.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import Header from "../src/components/Header/Header.jsx";
import Hero from "../src/components/Hero/Hero.jsx";
import MetaHead from "../src/components/MetaHead/MetaHead.jsx";
import Services from "../src/components/Services/Services.jsx";

const Home = () => (
  <>
    <MetaHead />
    <Header />
    <Hero />
    <div className="max-w-7xl mx-auto text-center px-7">
      <About />
      <Carousel />
      <Services />
      {/* <Faq /> */}
      <Contact />
    </div>
    <BackToTop />
    <Footer />
  </>
);

export default Home;
