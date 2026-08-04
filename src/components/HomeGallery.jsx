import { useNavigate } from "react-router-dom";
import Gallery1 from "../assets/Gallery/Home-Gallery/G1.jpeg";
import Gallery2 from "../assets/Gallery/Home-Gallery/G2.jpeg";
import Gallery3 from "../assets/Gallery/Home-Gallery/G3.jpeg";
import Gallery4 from "../assets/Gallery/Home-Gallery/G4.jpeg";
import Gallery5 from "../assets/Gallery/Home-Gallery/G5.jpeg";
import { useEffect, useState } from "react";

const HomeGallery = () => {
  const navigate=useNavigate();
  const [showGalleryImages,setShowGalleryImages]=useState(false);
  const [showEnquire,setShowEnquire]=useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowGalleryImages(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const service1 = document.getElementById("galleryImagesView");
    if (service1) {
      observer.observe(service1);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowEnquire(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const service1 = document.getElementById("enquireSection");
    if (service1) {
      observer.observe(service1);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="row m-0 HomeGallery" style={{ padding: "40px 0px 40px 60px" }}>
      <div className="col-md-4 col-12">
        <p className="fs-max fw-bold " style={{ lineHeight: 1.1 }}>
        A Sneak Peek of Our Stunning Portfolio
        </p>
        <p className="pt-3 fs-4" style={{fontWeight:500}} >Explore our finest projects across Australia.</p>
      </div>
      <div className="col-md-8 col-12 px-0 GalleryContainer" style={{ paddingBlock: "100px" }} id="galleryImagesView">
        <div className="col-12 d-flex flex-wrap justify-content-md-end justify-content-center pt-5">
          {showGalleryImages&&<div className="col-md-4 col-12 p-2" >
            <img src={Gallery1} alt="gallery-1" className="w-100 scale-up-hor-right " height={235} />
          </div>}
          {showGalleryImages&&<div className="col-md-4 col-12 p-2">
            <img src={Gallery2} alt="gallery-1" className="w-100 scale-up-hor-right" height={235}/>
          </div>}
        </div>
        <div className="col-12 d-flex flex-wrap">
        {showGalleryImages&&<div className="col-md-4 col-12 p-2">
            <img src={Gallery3} alt="gallery-1" className="w-100 scale-up-hor-right" height={235}/>
          </div>}
          {showGalleryImages&&<div className="col-md-4 col-12 p-2">
            <img src={Gallery4} alt="gallery-1" className="w-100 scale-up-hor-right" height={235}/>
          </div>}
          {showGalleryImages&&<div className="col-md-4 col-12 p-2">
            <img src={Gallery5} alt="gallery-1" className="w-100 scale-up-hor-right" height={235}/>
          </div>}
        </div>
        <div className="col-12 " onClick={()=>navigate("/contact")} id="enquireSection">
          {showEnquire &&<div
            className="p-4 bg-white homeBtn d-flex align-items-center justify-content-end scale-up-hor-left "
            style={{ cursor: "pointer" }}
          >
            <svg
              data-bbox="0 0.05 43.84 7.53"
              viewBox="0 0 43.84 7.58"
              xmlns="http://www.w3.org/2000/svg"
              data-type="ugc"
              width={100}
            >
              <g>
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="3.79"
                    x2="43.84"
                    y1="3.79"
                    id="199a6372-5314-403b-bf6c-b84643a6105a"
                  >
                    <stop stopColor="#2aace2" offset="0"></stop>
                    <stop stopColor="#662f90" offset="1"></stop>
                  </linearGradient>
                </defs>
                <g>
                  <path
                    d="M38.93 7.58h-1.46v-.05l2.08-2.27 1.3-1.43v-.07l-2-2.14L37.49.06h2.86a.13.13 0 0 1 .1 0c.39.43.78.85 1.16 1.28l.89 1c.45.48.89 1 1.34 1.46v.08l-1.27 1.31-1.73 1.89-.4.44a.15.15 0 0 1-.13.06ZM0 6.4h3.85V5.28H1.53v-.74h1.86V3.42H1.53v-.77h2.15V1.53H0Zm7.64 0h1.47V1.53H7.65v2.7l-1.84-2.7H4.34V6.4h1.47V3.7Zm4.43.13a2.79 2.79 0 0 0 1.34-.32 2.41 2.41 0 0 0 .92-.9A2.58 2.58 0 0 0 14.68 4a2.51 2.51 0 0 0-.28-1.26 2.13 2.13 0 0 0-.86-.9 2.7 2.7 0 0 0-1.37-.34 2.67 2.67 0 0 0-1.38.35 2.31 2.31 0 0 0-.89.92A2.64 2.64 0 0 0 9.57 4a2.67 2.67 0 0 0 .27 1.28 2.16 2.16 0 0 0 .86.89 2.78 2.78 0 0 0 1.37.36Zm0-1.29a.93.93 0 0 1-.56-.16.87.87 0 0 1-.35-.43 1.36 1.36 0 0 1-.09-.65 1.55 1.55 0 0 1 .14-.6 1.14 1.14 0 0 1 .37-.4 1 1 0 0 1 .57-.16.93.93 0 0 1 .56.16 1 1 0 0 1 .36.43 1.51 1.51 0 0 1 .1.61 1.39 1.39 0 0 1-.14.6 1.13 1.13 0 0 1-.38.43 1 1 0 0 1-.56.17Zm1.09 2 1.24-.64-.71-1-1.25.54Zm4.31-.73a2.89 2.89 0 0 0 1.37-.29 2 2 0 0 0 .85-.83A2.73 2.73 0 0 0 20 4.12V1.53h-1.55V4a1.22 1.22 0 0 1-.25.84.87.87 0 0 1-.69.27.89.89 0 0 1-.68-.25 1.23 1.23 0 0 1-.24-.86V1.53h-1.51v2.59a2.34 2.34 0 0 0 .64 1.82 2.46 2.46 0 0 0 1.77.59Zm3.12-.13h1.52V1.53h-1.5Zm2.21 0h1.53V1.53h-1.51Zm2.71 0h1.76l-1.4-1.65a1.73 1.73 0 0 0 .78-.58 1.51 1.51 0 0 0 .28-.9 1.56 1.56 0 0 0-.26-.87 1.7 1.7 0 0 0-.67-.62 2.62 2.62 0 0 0-1.13-.23h-1v2.64ZM24.17 4V2.74h.54a.78.78 0 0 1 .5.15.55.55 0 0 1 .2.42.53.53 0 0 1-.19.47.76.76 0 0 1-.5.17Zm3.18 2.4h3.85V5.28h-2.32v-.74h1.86V3.42h-1.86v-.77H31V1.53h-3.64Z"
                    fill="url(#199a6372-5314-403b-bf6c-b84643a6105a)"
                  ></path>
                </g>
              </g>
            </svg>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
