import CTAHome from "../components/home/CTAHome";
import Hero from "../components/home/Hero";
import Partners from "../components/about/Partners";
import SuccessStory from "../components/home/SuccessStory";
import MainHero from "../components/home/MainHero";
import BFooterHome from "../components/home/BFooterHome";
import Vac from "../components/home/Vac";

const Home = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <CTAHome />
      <Hero />     
      <SuccessStory />
      <MainHero />
      <Vac/>
      <BFooterHome />
      <Partners />
    </div>
  );
};

export default Home;
