import { Link } from "react-router-dom";
import FBIcon from "../assets/fb-icon.png";
import logo from "../assets/logo.png";
import Calculator from "./Calculator";
import { useState } from "react";

const WelcomeSection = () => {
  const [showModal,setShowModal]=useState(false);
  const handleClose=()=>{
    setShowModal(!showModal)
  }
  return (
    <div className=" HomeWelcome w-100 m-0" style={{ paddingInline: "80px", paddingBlock:"95px" }}>
      <div className="row m-0">
        <div className="d-md-flex d-none justify-content-between align-items-center w-100 mb-md-0 mb-2">
          <span
            style={{
              fontWeight: 900,
              fontSize: "24px",
            }}
          >
            045 2281507
          </span>
          <Link to="https://www.facebook.com/profile.php?id=61552597383146&mibextid=kFxxJD">
            <img src={FBIcon} alt="fb icon" height={30} />
          </Link>
        </div>
        <div className="col-md-6 col-12 d-md-none d-flex justify-content-end align-items-center mb-3" data-aos="fade-left">
          <img src={logo} height={280} alt="logo" />
        </div>
        <div className="col-md-7 col-12 ">
          <div data-aos="fade-right">
          <p className="fs-max mb-0 fw-max" style={{ lineHeight: 1.1, fontWeight:"900" }}>
            WELCOME TO MUSTAN PAINTING AND DECORATING
          </p>

          </div>
          <div className="pt-4 d-md-block d-none" data-aos="fade-right">
            <span className=" fs-4" style={{ fontWeight:500}}>
              +12 Years experience. Workmanship
            </span>
            <p className=" fs-4" style={{ fontWeight:500}}> guaranteed & fixed price quotes.</p>
          </div>
          <div className="pt-4 d-md-none d-block" data-aos="fade-right">
            <span className=" fs-4" style={{ fontWeight:500}}>
              +12 Years experience Workmanship guaranteed 
            </span>
            <p className=" fs-4" style={{ fontWeight:500}}>& fixed price quotes. </p>
          </div>

          <div
            className="p-3  d-md-flex d-none align-items-center justify-content-center mt-5 "
            style={{ maxWidth: "280px", cursor: "pointer", borderRadius:'20px' }}
            id="QuoteButton" onClick={()=>setShowModal(true)}
          >
            <p className=" fw-max  fs-3 mb-0 text-uppercase scale-up-hor-left-medium" >Get Quotation</p>
          </div>
          <div
            className="p-3  d-md-none d-flex align-items-center justify-content-center mt-5"
            style={{ maxWidth: "280px", cursor: "pointer", borderRadius:'20px' }}
            id="QuoteButton"
            data-aos="fade-right"
            onClick={()=>setShowModal(true)}
          >
            <p className=" fw-max  fs-3 mb-0 text-uppercase " >Get Quotation</p>
          </div>
        </div>
        <div className="col-md-5 col-12 d-md-flex d-none justify-content-end align-items-center" data-aos="fade-left">
          <img src={logo} height={300} alt="logo" />
        </div>
      </div>
      <Calculator showCalculator={showModal} handleClose={handleClose} />
    </div>
  );
};

export default WelcomeSection;
