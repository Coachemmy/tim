import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutPreview from '../components/AboutPreview';
import Events from '../components/Events';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <Events />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;