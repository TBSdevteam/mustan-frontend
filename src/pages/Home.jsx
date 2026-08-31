import { Helmet } from "react-helmet-async";
import ContactComponent from "../components/ContactComponent";
import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import HomeGallery from "../components/HomeGallery";
import ExpectWIthUs from "../components/ExpectWIthUs";
import Reviews from "../components/Reviews";
import IdeaBrief from "../components/IdeaBrief";
import Services from "../components/Services";
import Performance from "../components/Performance";
import WelcomeSection from "../components/WelcomeSection";
import { useEffect, useState } from "react";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [gradient, setGradient] = useState('linear-gradient(90deg,  rgba(23, 138, 54,0.7) 0%, rgba(243, 247, 7,0.5) 50%, rgba(204, 132, 18,1) 100%)');
  const [gradient, setGradient] = useState('linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      console.log(position,'position');
      
      // Change gradient colors when scrolling down
      if (position > 200 && position <3200) {
        setGradient('linear-gradient(90deg,  rgba(23, 138, 54,0.7) 0%,  rgba(204, 132, 18,1) 100%)');
      } else if(position >3200 && position <4250 ) {
        setGradient('linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)');
      }else if (position >4250 && position <5705){
        setGradient('linear-gradient(90deg,  rgba(103, 26, 120,0.5) 0%, rgba(253,29,29,0.6) 100%)');
        // setGradient('linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)');

      }else if(position >5705 && position <8690){
          setGradient('radial-gradient( circle 897px at 9% 80.3%,  rgba(55,60,245,1) 0%, rgba(234,161,15,0.90) 100.2% )')
      }
      else{
        setGradient('linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);
  return (
    <div className="d-md-flex" style={{ height: "100vh" }}>
      <Helmet>
        <title>Mustan Painting and Decorating | Sydney Painting &amp; Decorating Services</title>
        <meta name="description" content="Professional residential and commercial painting and decorating services in Sydney, Australia. Family-run business with 12+ years of experience. Get a free quote today." />
        <meta name="keywords" content="painting services Sydney, decorating services Sydney, residential painters, commercial painters, house painting Sydney, Mustan Painting and Decorating" />
      </Helmet>
      <HomeNavbar />
      <div className="HomeView" style={{ overflowY:"auto"}}>
        <div className=" text-white w-100 mb-md-0 mb-5" style={{background:gradient}}>
          <WelcomeSection />
          <Services />
          <Performance />
          <HomeGallery />
          <ExpectWIthUs />
          <Reviews />
          <IdeaBrief />
        </div>
        <ContactComponent />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
