import { useEffect, useState } from "react";
import starRating from "../assets/rating-stars.png";

const Reviews = () => {
  const [showReviews,setSHowReviews]=useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSHowReviews(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const service1 = document.getElementById("reviewSectionForAnimation");
    if (service1) {
      observer.observe(service1);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
 

  return (
    <>
      <div className="py-5 d-md-block d-none reviews " id="reviewHeadingSection" style={{ paddingInline: "70px", lineHeight:1.1 }}>
        <p
          className="fw-bold fs-max mb-0 reviewHeading"
          style={{ lineHeight: 1.2 }}
        >
          WHAT PEOPLE ARE SAYING
        </p>
       <p className="fw-bold fs-max reviewHeading" >
          ABOUT US...
        </p>
      </div>
      <div className="py-5 d-md-none d-block reviews " id="reviewHeadingSection" style={{ paddingInline: "70px", lineHeight:1.1 }}>
        <p
          className="fw-bold fs-max mb-0 reviewHeading"
          style={{ lineHeight: 1.2 }}
        >
          WHAT PEOPLE ARE SAYING ABOUT US...
        </p>
      
      </div>
      <div className="Service1Home" style={{ paddingBlock: "80px" }} id="reviewSectionForAnimation">
        {/* for mobile  */}
        <div className="row m-0  d-md-none">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="col-md-4 col-12 reviewCard "
            style={{ padding: "0px 50px" }}
          >
            <img src={starRating} alt="star rating" height={25} />
            <p className="mt-3">
              Mustan Painting is a dream! From consult to completion,
              professional and spotless. They finished my living room refresh
              ahead of schedule and on budget. Highly recommend!
            </p>
            <p className="fw-bold mt-1">Sarah Thompson</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="col-md-4 col-12 reviewCard "
            style={{ padding: "0px 50px" }}
          >
            <img src={starRating} alt="star rating" height={25} />
            <p className="mt-3">
              Rushing to get the nursery painted? Mustan came to the rescue!
              They fit us in, worked quietly, and delivered a flawless finish.
              Our perfect baby haven - thanks Mustan!
            </p>
            <p className="fw-bold mt-1">David Miller</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="col-md-4 col-12 reviewCard mb-0"
            style={{ padding: "0px 50px" }}
          >
            <img src={starRating} alt="star rating" height={25} />
            <p className="mt-3">
              Mustan&apos;s crew transformed our house exterior! They explained
              everything clearly and used top-notch paint. The finished product
              is amazing - fresh and modern. Don&apos;t hesitate to call them!
            </p>
            <p className="fw-bold mt-1">Jessica Lee</p>
          </div>
        </div>

        {/* for desktop view  */}
        <div className="row m-0 d-md-flex d-none">
          {showReviews && <div
            className="col-md-4 col-12 reviewCard scale-up-bottom"
            style={{ padding: "0px 50px" }}
          >
            <img src={starRating} alt="star rating" height={25} />
            <p className="mt-3" style={{ fontWeight:500 }}>
              Mustan Painting is a dream! From consult to completion,
              professional and spotless. They finished my living room refresh
              ahead of schedule and on budget. Highly recommend!
            </p>
            <p className="fw-bold mt-1">Sarah Thompson</p>
          </div>}
          {showReviews && <div
            className="col-md-4 col-12 reviewCard scale-up-bottom"
            style={{ padding: "0px 50px" }}
          >
            <img src={starRating} alt="star rating" height={25} />
            <p className="mt-3" style={{fontWeight:500}}>
              Rushing to get the nursery painted? Mustan came to the rescue!
              They fit us in, worked quietly, and delivered a flawless finish.
              Our perfect baby haven - thanks Mustan!
            </p>
            <p className="fw-bold mt-1">David Miller</p>
          </div>}
          {showReviews && <div
            className="col-md-4 col-12 reviewCard mb-0 scale-up-bottom"
            style={{ padding: "0px 50px" }}
          >
            <img src={starRating} alt="star rating" height={25} />
            <p className="mt-3" style={{fontWeight:500}}>
              Mustan&apos;s crew transformed our house exterior! They explained
              everything clearly and used top-notch paint. The finished product
              is amazing - fresh and modern. Don&apos;t hesitate to call them!
            </p>
            <p className="fw-bold mt-1">Jessica Lee</p>
          </div>}
        </div>
      </div>
    </>
  );
};

export default Reviews;
