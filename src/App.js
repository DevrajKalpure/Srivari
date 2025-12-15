import logo from './logo.svg';
import './App.css';
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import VideoSection from './components/VideoSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FormSection from './components/FormSection';
import AmenitiesSection from './components/AmenitiesSection';
import LocationSection from './components/LocationSection';
import SocialIcons from './components/SocialIcons';
import Masterplan from './components/MasterPlan';

function App() {
  return (
    <div className="App">
      {/* <ScrollToTop/> */}
      <SocialIcons/>
      <Header/>
      <HeroSection/>
      <ProjectSection/>
      <VideoSection/>
      <GallerySection/>
      <Masterplan/>
      <AmenitiesSection/>
      <FormSection/>
      <LocationSection/>
      <Footer/>
    </div>
  );
}

export default App;

