import AppDownloadSection from "../components/HomeComponents/AppDownloadSection";
import HeroSection from "../components/HomeComponents/HeroSection";
import HowItWorks from "../components/HomeComponents/HowItWorks";
import ImpressiveCollection from "../components/HomeComponents/ImpressiveCollection";
import RentByBodyType from "../components/HomeComponents/RentByBodyType";
import RentByBrands from "../components/HomeComponents/RentByBrand";
import RentByProviders from "../components/HomeComponents/RentByProviders";
import SearchBar from "../components/HomeComponents/SearchBar";
import ServicesSection from "../components/HomeComponents/ServicesSection";
import TestimonialSection from "../components/HomeComponents/TestimonialSection";

const Home = () => (
  <>
    <HeroSection />
    <SearchBar />
    <RentByProviders />
    <RentByBrands />
    <RentByBodyType />
    <ImpressiveCollection />
    <HowItWorks />
    <ServicesSection />
    <TestimonialSection />
    <AppDownloadSection />
  </>
);
export default Home;
