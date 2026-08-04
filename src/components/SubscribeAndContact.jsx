import { useEffect, useState } from "react";
import {toast} from "react-toastify";
import { useAddResponseMutation } from "../store/allApi";

const SubscribeAndContact = () => {
  const [email,setEmail]=useState("");
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [phone,setPhone]=useState("");
  const [message,setMessage]=useState("");
  const [isVisible,setIsVisible]=useState(false);
  const [addResponse]=useAddResponseMutation();

  const handleSubmit=(e)=>{
    e.preventDefault();
    addResponse({
      first_name:firstName,
      last_name:lastName,
      email,
      phone,
      message
    })
    .then((res)=>{
      toast.success(res.message || "Response submitted successfully!");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhone("");
      setMessage("");
    })
    .catch((err)=>{
      console.log(err)
      toast.error(err.message || err.data.message || "Failed to submit the response")
    })
  }

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

    const target = document.getElementById("subscribeAndContactSection");
    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div
      className="row justify-content-center mx-0 gap-4 flex-wrap px-md-0 px-2"
      style={{ paddingBottom: "60px" }} id="subscribeAndContactSection"
    >
      {/* <div className="col-md-3 col-12 ">
        <p className="text-uppercase fw-bold fs-5" style={{ color: "#3BB54A" }}>
          Subscribe to our newsletter
        </p>
        <input
          type="email"
          className="w-100 m-0 p-3"
          placeholder="Enter your email here*"
          style={{ color: "black", borderBottom: "none", outline: "none" }}
        />
        <div
          className=" submit bg-black fw-bold text-white text-end pe-4 "
          style={{ paddingBlock: "25px", cursor: "pointer" }}
        >
          SUBMIT
        </div>
      </div> */}
      <div className="col-md-6 col-12 ">
        <p className="fs-5 fw-bold ">FOR ANY QUERY OR RELATED INFORMATION</p>
        {isVisible && <div style={{ maxWidth:"450px" }} className="scale-up-bottom" >
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            className="w-100 m-0 p-3"
            placeholder="First Name*"
            required
            style={{ color: "black", borderBottom: "none", outline: "none" }}
          />
          <input
            type="text"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            className="w-100 m-0 p-3"
            placeholder="Last Name*"
            required
            style={{ color: "black", borderBottom: "none", outline: "none" }}
          />
          <input
            type="email"
            className="w-100 m-0 p-3"
            placeholder="Email*"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={{ color: "black", borderBottom: "none", outline: "none" }}
          />
          <input
            type="text"
            className="w-100 m-0 p-3"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            placeholder="Phone"
            required
            style={{ color: "black", borderBottom: "none", outline: "none" }}
          />
          <input
            type="text"
            required      
            value={message}
            onChange={(e)=>setMessage(e.target.value)}      
            className="w-100 m-0 p-3"
            placeholder="Type your message here...*"
            style={{ color: "black", borderBottom: "none", outline: "none" }}
          />
          <div
            // className="  bg-black fw-bold text-white text-end pe-4 "
            // style={{  cursor: "pointer" }}
            // onClick={handleSubmit}
          >
            <button type="submit" className=" submit bg-black text-white w-100 fw-bold text-end pe-4" style={{ height:"100%",paddingBlock: "25px" }}>SUBMIT</button>
            {/* SUBMIT */}
          </div>
          </form>
        </div>}
      </div>
    </div>
  );
}

export default SubscribeAndContact
