import { Helmet } from "react-helmet-async";
import ContactComponent from "../components/ContactComponent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceImage from "../assets/serviceMain.png";
import homeIcon from "../assets/home-icon.png";
import homeIcon2 from "../assets/home-icon2.png";
import wall from "../assets/wall-icon.png";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Our Services | Residential &amp; Commercial Painting - Mustan Painting and Decorating</title>
        <meta name="description" content="Explore our painting and decorating services in Sydney including residential painting, commercial painting, and feature walls. Quality workmanship guaranteed." />
        <meta name="keywords" content="residential painting Sydney, commercial painting Sydney, feature walls, painting and decorating services" />
      </Helmet>
      <Navbar />
      <div style={{ maxWidth: "100vw", paddingTop: "72px" }}>
        <div
          className="w-100  text-white"
          style={{
            backgroundImage: `url(${ServiceImage})`,
            minHeight: "245px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          }}
        >
          <div className="py-5 px-7 z-2 w-100 h-100 " style={{ lineHeight: 1.1 }}>
            <p className=" fw-max fs-2 text-uppercase mb-1">OUR SERVICES</p>
            <p className="text-uppercase  fw-max fs-max">WHAT WE DO!</p>
            <p className="text-uppercase  fw-max fs-2">
              RESIDENTIAL, COMMERCIAL & MANY MORE
            </p>
          </div>
        </div>
        <div className="row m-0">
          {/* <div className="col-md-6 col-12 py-5 px-5 bg-black d-flex">
            <h6 className="text-white my-auto vertical-text">
              Calculator Based on New Builds (Estimate Only)
            </h6>
            <img src={calculator} height={1000} width={500} alt="calculator" />
          </div> */}

          <div className="col-md-6 col-12 p-5 bg-secondary text-white">
            <div data-aos="fade-right" data-aos-delay="100">
              <img
                src={homeIcon}
                height={40}
                alt="home icon"
                className="d-block ms-auto "
              />
              {/* </div> */}
              <span className="fs-max fw-max ">RESIDENTIAL</span>
              <hr />
              <div className="my-4" style={{ fontWeight: 500 }}>
                <p className="mt-3">
                  At Mustan Painting & Decorating, we specialize in top-quality
                  residential painting services. Our team works closely with you
                  to ensure satisfaction at every stage of the process.
                </p>
                <p style={{ marginTop: "2rem" }}>
                  Applying a fresh coat of paint, inside or out, can truly
                  enhance your home. Whether you&apos;re looking to refresh a
                  worn exterior or transform the interior, our expert team
                  delivers exceptional results for your remodeling project.
                </p>
              </div>
            </div>
            <div
              className="my-5 pt-4 "
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={homeIcon2}
                height={40}
                alt="home icon"
                className="d-block ms-auto "
                style={{ marginBottom: "-15px" }}
              />
              <span className="fs-max fw-max ">COMMERCIAL </span>
              <hr />
              <p style={{ fontWeight: 500 }}>
                At Mustan Painting & Decorating, we understand the demands of
                commercial projects. With our expertise and dedication, we
                ensure deadlines are met and expectations exceeded.
              </p>
              <p style={{ fontWeight: 500 }}>
                Having tackled diverse industrial projects, we offer
                comprehensive project management solutions. Count on us to go
                the extra mile, even working weekends and holidays, to deliver
                results that reflect the excellence of your business and brand.
                Contact us today for unparalleled solutions.
              </p>
            </div>
            <div
              className="my-5 pt-4 pb-lg-5  "
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={wall}
                height={40}
                alt="home icon"
                className="d-block ms-auto "
              />
              <span className="fs-max fw-max ">FEATURE WALLS </span>
              <hr />
              <p style={{ fontWeight: 500 }}>
                Mustan Painting & Decorating specializes in creating stunning
                feature walls for any room in your home. Enhance your interior
                space with a feature wall, offering endless possibilities to
                elevate your home&apos;s aesthetic.
              </p>
              <p style={{ fontWeight: 500 }}>
                Experiment with contrasting colors, textures, and patterns to
                personalize your feature wall to your exact preferences.
                Transform the ambiance of your living area with this
                cost-effective solution that adds instant brightness to your
                space.
              </p>
              <p style={{ fontWeight: 500 }}>
                Discover the transformative power of feature walls and unleash
                your creativity with Mustan Painting & Decorating. Contact us
                today to learn more about how we can bring your vision to life
                and revitalize your home.
              </p>
              <p style={{ fontWeight: 500 }}>
                A feature wall can significantly alter the feel of your living
                area. You are free to achieve this based on your personal tastes
                and preferences. For more information get in touch with us, and
                see how we can liven up your home.
              </p>
            </div>
            <div
              className="my-5 pt-4 pb-lg-5  "
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={wall}
                height={40}
                alt="home icon"
                className="d-block ms-auto "
              />
              <span className="fs-max fw-max text-uppercase">
                {" "}
                ⁠Roof painting{" "}
              </span>
              <hr />
              <p style={{ fontWeight: 500 }}>
                Mustan Painting & Decorating specializes in roof painting
                services to enhance the appearance and longevity of your
                home&apos;s exterior. Our skilled team can transform the look of
                your roof, adding curb appeal and protection against the
                elements.
              </p>
              <p style={{ fontWeight: 500 }}>
                Consider roof painting as a cost-effective way to refresh the
                exterior of your home and improve its overall aesthetic appeal.
                With a wide range of colors and finishes to choose from, you can
                customize your roof to complement your home&apos;s architecture
                and style.
              </p>
              <p style={{ fontWeight: 500 }}>
                A feature wall can significantly alter the feel of your living
                area. You are free to achieve this based on your personal tastes
                and preferences. For more information get in touch with us, and
                see how we can liven up your home.
              </p>
            </div>
            <div
              className="my-5 pt-4 pb-lg-5  "
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={wall}
                height={40}
                alt="home icon"
                className="d-block ms-auto "
              />
              <span className="fs-max fw-max text-uppercase">
                {" "}
                ⁠Floor sanding and polishing{" "}
              </span>
              <hr />
              <p style={{ fontWeight: 500 }}>
                Mustan Painting & Decorating specializes in floor sanding and
                polishing services to rejuvenate and enhance the appearance of
                your home&apos;s floors. Our skilled craftsmen can transform
                tired and worn-out floors into beautiful and durable surfaces
                that add warmth and elegance to any room.
              </p>
              <p style={{ fontWeight: 500 }}>
                Consider floor sanding and polishing as a cost-effective way to
                revitalize your home&apos;s interior. With our expertise and
                attention to detail, we can restore the natural beauty of your
                floors and protect them against daily wear and tear.
              </p>
              <p style={{ fontWeight: 500 }}>
                A feature wall can significantly alter the feel of your living
                area. You are free to achieve this based on your personal tastes
                and preferences. For more information get in touch with us, and
                see how we can liven up your home.
              </p>
            </div>
            <div
              className="my-5 pt-4 pb-lg-5  "
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={wall}
                height={40}
                alt="home icon"
                className="d-block ms-auto "
              />
              <span className="fs-max fw-max text-uppercase">
                {" "}
                ⁠⁠Lime wash and white wash{" "}
              </span>
              <hr />
              <p style={{ fontWeight: 500 }}>
                Mustan Painting & Decorating offers professional lime wash and
                white wash services to enhance the appearance of your
                home&apos;s interior and exterior surfaces. Whether you&apos;re
                looking to achieve a rustic and textured look with lime wash or
                create a fresh and clean aesthetic with white wash, our skilled
                team can deliver beautiful results that elevate your space.
              </p>
              <p style={{ fontWeight: 500 }}>
                Consider lime wash and white wash as versatile options to add
                character and charm to any room in your home. With our expertise
                in applying these traditional painting techniques, you can
                create a unique and personalized look that reflects your style
                and preferences.
              </p>
              <p style={{ fontWeight: 500 }}>
                Elevate the beauty and ambiance of your home with Mustan
                Painting & Decorating. Contact us today to learn more about our
                lime wash and white wash services and schedule a consultation.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 p-5 bg-secondary text-white">
            <div data-aos="fade-right" data-aos-delay="100">
              <img
                src={homeIcon}
                height={40}
                alt="home icon"
                className="d-block ms-auto "
              />
              {/* </div> */}
              <span className="fs-max fw-max text-uppercase">
                Interior painting
              </span>
              <hr />
              <div className="my-4" style={{ fontWeight: 500 }}>
                <p className="mt-3">
                  Mustan Painting & Decorating excels in premium interior
                  painting services. We collaborate closely with you throughout,
                  ensuring satisfaction with the final result.
                </p>
                <p style={{ marginTop: "2rem" }}>
                  A fresh coat of paint, whether indoors or out, can transform
                  your home. With our skilled team, your remodeling project
                  receives top-notch results, whether it&apos;s reviving a tired
                  exterior or enhancing interior spaces.
                </p>
              </div>
            </div>
            <div
              className="my-5 pt-4 "
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={homeIcon2}
                height={40}
                alt="home icon"
                className="d-block ms-auto "
                style={{ marginBottom: "15px" }}
              />
              <span className="fs-max fw-max text-uppercase">
                Exterior painting{" "}
              </span>
              <hr />
              <p style={{ fontWeight: 500 }}>
                At Mustan Painting & Decorating, we recognize the unique demands
                of exterior painting projects. With our extensive experience
                across various industries, rest assured we&apos;ll deliver your
                vision with precision.
              </p>
              <p style={{ fontWeight: 500 }}>
                Having managed numerous industrial projects, we take pride in
                being your dedicated project management partner. Our commitment
                extends to working weekends and holidays, ensuring your project
                is completed to perfection. Contact us today for solutions that
                elevate your business and brand.
              </p>
            </div>
            <div
              className="my-5 pt-4 pb-lg-5  "
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={wall}
                height={40}
                alt="home icon"
                className="d-block ms-auto "
              />
              <span className="fs-max fw-max text-uppercase">
                Heritage
              </span>
              <hr />
              <p style={{ fontWeight: 500 }}>
                Mustan Painting & Decorating offers heritage painting services
                to preserve and enhance the historical character of your home.
                Our skilled craftsmen can expertly design and paint feature
                walls that pay homage to the heritage and charm of your
                property.
              </p>
              <p style={{ fontWeight: 500 }}>
                Discover the beauty and elegance of heritage painting, where
                every stroke of the brush tells a story. Whether you&apos;re
                looking to restore original features or add vintage-inspired
                accents, our team can bring your vision to life.
              </p>
              <p style={{ fontWeight: 500 }}>
                A feature wall can significantly alter the feel of your living
                area. You are free to achieve this based on your personal tastes
                and preferences. For more information get in touch with us, and
                see how we can liven up your home.
              </p>
            </div>
            <div
              className="my-5 pt-4 pb-lg-5  "
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={wall}
                height={40}
                alt="home icon"
                className="d-block ms-auto "
              />
              <span className="fs-max fw-max text-uppercase">
                ⁠ Paving painting{" "}
              </span>
              <hr />
              <p style={{ fontWeight: 500 }}>
                Mustan Painting & Decorating offers paving painting services to
                enhance the appearance and durability of your outdoor surfaces.
                Our skilled team can transform your driveway, patio, or walkway
                with high-quality paving paint that withstands the elements and
                adds visual appeal to your outdoor space.
              </p>
              <p style={{ fontWeight: 500 }}>
                Consider paving painting as a cost-effective way to refresh and
                protect your outdoor surfaces. With a variety of colors and
                finishes available, you can customize your paving to complement
                your home&apos;s exterior and landscaping.
              </p>
              <p style={{ fontWeight: 500 }}>
                A feature wall can significantly alter the feel of your living
                area. You are free to achieve this based on your personal tastes
                and preferences. For more information get in touch with us, and
                see how we can liven up your home.
              </p>
            </div>
            <div
              className="my-5 pt-4 pb-lg-5  "
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={wall}
                height={40}
                alt="home icon"
                className="d-block ms-auto "
              />
              <span className="fs-max fw-max text-uppercase ">
                Driveway painting{" "}
              </span>
              <hr />
              <p style={{ fontWeight: 500 }}>
                At Mustan Painting & Decorating, we offer professional driveway
                painting services to enhance the appearance and durability of
                your home&apos;s exterior surfaces. Whether you&apos;re looking
                to refresh the look of your driveway or add curb appeal to your
                property, our skilled team can transform your outdoor space with
                high-quality paint that withstands the elements.
              </p>
              <p style={{ fontWeight: 500 }}>
                Driveway painting is a cost-effective way to improve the overall
                look of your home&apos;s exterior. With a wide range of colors
                and finishes available, you can customize your driveway to
                complement your home&apos;s architecture and landscaping.
              </p>
              <p style={{ fontWeight: 500 }}>
                A feature wall can significantly alter the feel of your living
                area. You are free to achieve this based on your personal tastes
                and preferences. For more information get in touch with us, and
                see how we can liven up your home.
              </p>
            </div>
            <div
              className="my-5 pt-4 pb-lg-5  "
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={wall}
                height={40}
                alt="home icon"
                className="d-block ms-auto "
              />
              <span className="fs-max fw-max text-uppercase">
                ⁠ Deck restoration/ staining/ varnishing and painting{" "}
              </span>
              <hr />
              <p style={{ fontWeight: 500 }}>
                Mustan Painting & Decorating offers comprehensive deck
                restoration, staining, varnishing, and painting services to
                revitalize and protect your outdoor living spaces. Whether you
                have a wooden deck, patio, or porch, our skilled team can
                transform it into a beautiful and durable outdoor retreat.
              </p>
              <p style={{ fontWeight: 500 }}>
                Consider deck restoration, staining, varnishing, and painting as
                essential steps to maintain and enhance the appearance of your
                outdoor surfaces. With our expertise in wood care and finishing,
                we can restore the natural beauty of your deck and protect it
                against the elements.
              </p>
              <p style={{ fontWeight: 500 }}>
                Experience the benefits of deck restoration, staining,
                varnishing, and painting, including improved durability,
                enhanced aesthetics, and increased longevity of your outdoor
                spaces. Our team is committed to delivering exceptional results
                that meet your expectations.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="fluid-container">
          <div className="row m-0">
            <div
              className="col-12 bg-black py-4 px-4 enquire text-end text-white "
              style={{ height: "75px" }}
            >
              Contact {">"}
            </div>
          </div>
        </div> */}
        <div
          onClick={() => navigate("/contact")}
          className="fluid-container d-md-flex d-none py-4 enquire justify-content-end pe-4 align-items-center "
          style={{ backgroundColor: "black", cursor: "pointer" }}
        >
          <div>
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
          </div>
        </div>
        <div className="mt-md-0 mt-5">
          <ContactComponent />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services;
