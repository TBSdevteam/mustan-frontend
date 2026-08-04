import { Link } from "react-router-dom";
import logo1 from "../assets/logo.png";
import SubscribeAndContact from "./SubscribeAndContact";

const ContactComponent = () => {
  return (
    <>
      <div className="contact row mx-0 p-md-5 mb-4 flex-wrap">
        <div className="col-md-2 col-12 text-md-start text-center mb-md-0 mb-4">
          <img src={logo1} height={100} alt="logo" style={{ marginLeft:"20px" }} />
        </div>
        <div className="col-md-3 col-12 Menu" style={{ paddingLeft:'55px'}}>
          <p className="fw-max text-md-start text-center" style={{ color: "#2AACE2", fontSize: "18px" }}> 
            Menu
          </p>
          <div className=" d-flex  flex-md-column justify-content-md-between justify-content-center gap-md-2 gap-3 flex-wrap px-md-0 px-5">
            <Link className="ContactLinks" to="/" style={{ textDecoration: "none", color: "black", fontWeight:500 }}>
              Home
            </Link>
            <Link
            className="ContactLinks"
              to="/about"
              style={{ textDecoration: "none", color: "black", fontWeight:500 }}
            >
              About Us
            </Link>
            <Link
            className="ContactLinks"
              to="/services"
              style={{ textDecoration: "none", color: "black", fontWeight:500 }}
            >
              Services
            </Link>
            <Link
            className="ContactLinks"
              to="/gallery"
              style={{ textDecoration: "none", color: "black", fontWeight:500 }}
            >
              Gallery
            </Link>
            <Link
            className="ContactLinks"
              to="/contact"
              style={{ textDecoration: "none", color: "black", fontWeight:500 }}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="col-md-4 col-12 mt-md-0 mt-3 d-flex flex-column text-md-start text-center">
          <p className="fw-max " style={{ color: "#1F4497", fontSize: "18px" }}>
            Contact Us
          </p>
          <div className=" d-flex  flex-column gap-2 pe-md-5 ">
            <Link
              to="tel:045 2281507"
              style={{ textDecoration: "none", color: "black", fontWeight:500 }}
              className="contactLink"
            >
              045 2281507
            </Link>
            <Link
              to="mailto:mustanali55@gmail.com"
              style={{
                textDecoration: "none",
                color: "black",
                wordBreak: "break-word",
                fontWeight:500
              }}
              className="contactLink"
            >
               MUSTANALI55@GMAIL.COM
            </Link>
            <p style={{fontWeight:500}}>Maroubra Sydney</p>
          </div>
        </div>
        <div className="col-md-3 col-12 align-items-md-start align-items-center d-flex flex-column">
          <p className="fw-max" style={{ color: "#DF7AB1", fontSize: "18px" }}>
            Follow Us
          </p>
          <div>
            <Link to="https://www.facebook.com/profile.php?id=61552597383146&mibextid=kFxxJD" style={{ textDecoration: "none", color: "black" , fontWeight:500}}
            className="socialLink"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
      <SubscribeAndContact/>
    </>
  );
};

export default ContactComponent;
