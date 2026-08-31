import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image1 from "../assets/image4.jpg";
import ContactComponent from "../components/ContactComponent";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const linkRef=useRef(null);
  const emailRef=useRef(null);
  const handleClick=()=>{
    if (linkRef.current){
      linkRef.current.click();
    }
  }

  const handleEmailClick=()=>{
    if (emailRef.current){
      emailRef.current.click();
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Mustan Painting and Decorating Sydney</title>
        <meta name="description" content="Get in touch with Mustan Painting and Decorating for a free quote on residential or commercial painting services in Sydney. Call, email, or send us a message." />
        <meta name="keywords" content="contact Mustan Painting and Decorating, painting quote Sydney, Sydney painters contact" />
      </Helmet>
      <Navbar />
      <div style={{ maxWidth: "100vw", paddingTop: "72px" }}>
        <div
          className="w-100 opacity-10 py-5 px-7 text-white"
          style={{
            backgroundImage: `url(${Image1})`,
            minHeight: "245px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            lineHeight:1.2
          }}
        >
          <p className=" fw-max fs-max text-uppercase ">Contact Us</p>
          {/* <div> */}
          {/* <p className="text-uppercase  fw-max fs-max">Let&apos;s Work &</p>
          <p className="text-uppercase  fw-max fs-max"> Occult Together</p> */}
          {/* </div> */}
        </div>
        <div className="d-flex flex-wrap mb-md-0 mb-5 ">
            <div
            onClick={handleClick}
              className="bg-black text-white  contactMethods d-flex justify-content-center align-items-center gap-4"
              style={{ maxHeight: "300px", minHeight: "300px", cursor:"pointer" }}
            >
          <Link to="tel:0452 281507" ref={linkRef} style={{ textDecoration:"none", color:"white"}}>
              <p className="fs-max fw-max  ">Phone</p>
              </Link>
              {/* <img src={phone} alt="phone" /> */}
              <svg
                data-bbox="30.499 30 139 139.999"
                viewBox="0 0 200 200"
                height="60"
                width="60"
                xmlns="http://www.w3.org/2000/svg"
                data-type="shape"
              >
                <g>
                  <path
                    fill="white"
                    d="M154.708 115.415a80.404 80.404 0 0 1-17.641-4.416c-6.242-2.359-13.345-.836-18.104 3.896l-6.198 6.229a101.805 101.805 0 0 1-33.919-34.089l6.205-6.237c4.695-4.773 6.21-11.918 3.865-18.193a81.55 81.55 0 0 1-4.401-17.771C83.323 36.349 76.039 30 67.572 30l-.168.001H47.635c-.515 0-1.033.023-1.53.07-4.561.414-8.69 2.589-11.625 6.125-2.937 3.538-4.326 8.015-3.908 12.667C32.79 69.86 40 90.325 51.401 108.016c10.361 16.39 24.455 30.558 40.73 40.953 17.546 11.437 37.809 18.683 58.672 20.961.515.046 1.031.069 1.534.069h.077c9.456-.039 17.118-7.808 17.081-17.302v-19.825c.19-8.733-6.144-16.231-14.787-17.457zm6.845 17.412v19.887c.02 5.1-4.094 9.265-9.173 9.286-.294-.002-.58-.012-.793-.03-19.563-2.137-38.629-8.955-55.17-19.736-15.327-9.79-28.576-23.108-38.334-38.543C47.34 87.021 40.557 67.769 38.477 48.08a9.218 9.218 0 0 1 2.098-6.752 9.138 9.138 0 0 1 7.06-3.326h19.808c.032-.002.062-.002.092-.002 4.566 0 8.476 3.404 9.111 7.918a89.669 89.669 0 0 0 4.834 19.497c1.259 3.366.445 7.194-2.055 9.736l-8.369 8.412a4.022 4.022 0 0 0-.646 4.812c9.73 17.199 23.917 31.461 41.028 41.241a3.948 3.948 0 0 0 4.766-.647l8.353-8.396a9.212 9.212 0 0 1 9.728-2.08 88.214 88.214 0 0 0 19.35 4.85c4.63.656 8.034 4.691 7.918 9.386v.098z"
                  ></path>
                </g>
              </svg>
          {/* </Link> */}

            </div>
          <div
          onClick={handleEmailClick}
            className="bg-secondary text-white  contactMethods d-flex justify-content-center align-items-center gap-4 "
            style={{ maxHeight: "300px", minHeight: "300px", cursor:"pointer" }}
          >
            <Link to={"mailto:mustanali55@gmail.com"} ref={emailRef} style={{ textDecoration:"none", color:"white"}}>
            <p className="fs-max fw-max mb-2 ">Email</p>
            </Link>
            <svg
              data-bbox="20 35 159.999 130"
              viewBox="0 0 200 200"
              height="60"
              width="60"
              xmlns="http://www.w3.org/2000/svg"
              data-type="shape"
            >
              <g>
                <path
                  fill="white"
                  d="M160.062 165H39.936C28.942 165 20 156.055 20 145.058V54.943C20.001 43.946 28.943 35 39.936 35h120.125c10.994 0 19.938 8.946 19.938 19.943v90.116c0 10.996-8.944 19.941-19.937 19.941zM39.936 44.845c-5.565 0-10.093 4.53-10.093 10.098v90.116c0 5.568 4.528 10.097 10.093 10.097h120.125c5.567 0 10.095-4.529 10.095-10.097V54.943c0-5.568-4.528-10.098-10.095-10.098H39.936z"
                ></path>
                <path
                  fill="white"
                  d="M100 112.433a4.914 4.914 0 0 1-2.822-.89L22.1 58.975a4.922 4.922 0 0 1 5.643-8.065L100 101.502l72.257-50.591a4.922 4.922 0 0 1 5.643 8.065l-75.078 52.567a4.914 4.914 0 0 1-2.822.89z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <ContactComponent />
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
