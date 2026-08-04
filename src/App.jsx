import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import "react-toastify/dist/ReactToastify.css";
import Gallery from "./pages/Gallery";
import { ToastContainer } from "react-toastify";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import Responses from "./pages/Responses";
import {Provider} from "react-redux"
import {store,persistor} from './store/store'
import { PersistGate } from "redux-persist/integration/react";
import Login from "./pages/Login";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useEffect(() => {
    AOS.init({
      once:true
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer />
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/responses" element={<Responses />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
