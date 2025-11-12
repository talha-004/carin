import AppDownloadSection from "../components/HomeComponents/AppDownloadSection";
import HeroSection from "../components/HomeComponents/HeroSection";
import HowItWorks from "../components/HomeComponents/HowItWorks";
import ImpressiveCollection from "../components/HomeComponents/ImpressiveCollection";
import SearchBar from "../components/HomeComponents/SearchBar";
import ServicesSection from "../components/HomeComponents/ServicesSection";
import TestimonialSection from "../components/HomeComponents/TestimonialSection";

const Home = () => (
  <>
    <HeroSection />
    <SearchBar />
    <ImpressiveCollection />
    <HowItWorks />
    <ServicesSection />
    <TestimonialSection />
    <AppDownloadSection />
  </>
);
export default Home;
