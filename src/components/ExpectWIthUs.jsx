import { useEffect, useState } from "react";
import Point1 from "../assets/point-1.png";
import Point2 from "../assets/point-2.png";
import Point3 from "../assets/point-3.png";
import Point4 from "../assets/point-4.png";

const ExpectWIthUs = () => {
  const [isVisible,setIsVisible]=useState(false);
  const [isPointVisible,setIsPointVisible]=useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const target = document.getElementById("ExpectUsSection");
    if (target) {
      observer.observe(target);
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
          setIsPointVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const target = document.getElementById("ExpectationPoints");
    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className=" row m-0 py-4" id="ExpectUsSection">
      <div data-aos="fade-right" data-aos-delay="300" className="d-md-none d-block col-md-5 col-12 px-4  mb-2">
        <p className="fs-max fw-bold text-center" style={{ lineHeight: 1.3 }}>
          WHAT TO EXPECT WITH US!!
        </p>
        <p className="mt-4" style={{ fontSize: "18px", fontWeight:500 }}>
          At Mustan Painting & Decorating, our aim is to make sure your experience
          with us is exceptional. Our team goes above and beyond to ensure your
          satisfaction with every project. Expect nothing but the highest
          quality and professionalism from us. Don&apos;t just take our word for
          it – see what our satisfied customers have to say in our reviews and
          testimonials!
        </p>
      </div>
      <div className="col-md-7 col-12 d-flex flex-wrap px-0" id="ExpectationPoints">
        {isPointVisible && <div
          className="col-md-6 col-12 HomeService d-flex align-items-center justify-content-center scale-up-hor-left"
          style={{ minHeight: "300px" }}
        >
          <div>
            <img src={Point1} alt="point" />
          </div>
        </div>}
        {isPointVisible && <div
          className="col-md-6 col-12 Service1Home d-flex align-items-center justify-content-center scale-up-hor-right "
          style={{ minHeight: "300px" }}
        >
          <img src={Point2} alt="point" />
        </div>}
        {isPointVisible && <div
          className="col-md-6 col-12 Service1Home d-flex align-items-center justify-content-center scale-up-hor-right"
          style={{ minHeight: "300px" }}
        >
          <img src={Point3} alt="point" />
        </div>}
        {isPointVisible &&<div
          className="col-md-6 col-12 HomeService d-flex align-items-center justify-content-center scale-up-hor-left"
          style={{ minHeight: "300px" }}
        >
          <img src={Point4} alt="point" />
        </div>}
      </div>

      {isVisible && <div className="d-md-inline-block d-none col-md-5 col-12 px-5 scale-up-hor-right">
        <p className="fs-max fw-bold" style={{ lineHeight: 1.2 }}>
          WHAT TO EXPECT WITH US!!
        </p>
        <p  className="mt-4" style={{ fontSize: "18px", fontWeight:500 }}>
          At Mustan Painting and Decorating, our aim is to make sure your experience
          with us is exceptional. Our team goes above and beyond to ensure your
          satisfaction with every project. Expect nothing but the highest
          quality and professionalism from us. Don&apos;t just take our word for
          it – see what our satisfied customers have to say in our reviews and
          testimonials!
        </p>
      </div>}
    </div>
  );
};

export default ExpectWIthUs;
