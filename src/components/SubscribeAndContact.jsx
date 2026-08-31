import { useEffect, useState } from "react";
import {toast} from "react-toastify";

const SubscribeAndContact = () => {
  const [email,setEmail]=useState("");
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [phone,setPhone]=useState("");
  const [message,setMessage]=useState("");
  const [isVisible,setIsVisible]=useState(false);

  const validateForm = () => {
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedMessage = message.trim();

    const nameRegex = /^[A-Za-z][A-Za-z\s'-]{1,49}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phoneRegex = /^[+]?[0-9\s()-]{7,20}$/;

    if (!trimmedFirstName) {
      return "Please enter your first name.";
    }
    if (!nameRegex.test(trimmedFirstName)) {
      return "First name should only contain letters.";
    }

    if (!trimmedLastName) {
      return "Please enter your last name.";
    }
    if (!nameRegex.test(trimmedLastName)) {
      return "Last name should only contain letters.";
    }

    if (!trimmedEmail) {
      return "Please enter your email address.";
    }
    if (!emailRegex.test(trimmedEmail)) {
      return "Please enter a valid email address.";
    }

    if (!trimmedPhone) {
      return "Please enter your phone number.";
    }
    if (!phoneRegex.test(trimmedPhone) || trimmedPhone.replace(/\D/g, "").length < 7) {
      return "Please enter a valid phone number.";
    }

    if (!trimmedMessage) {
      return "Please enter a message.";
    }
    if (trimmedMessage.length < 10) {
      return "Your message should be at least 10 characters.";
    }

    return null;
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }

    fetch("/.netlify/functions/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        message
      })
    })
    .then((response)=>response.json().then((data)=>({ ok: response.ok, data })))
    .then(({ ok, data })=>{
      if(!ok || !data.success){
        throw new Error(data.message || "Failed to submit the response");
      }
      toast.success(data.message || "Response submitted successfully!");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhone("");
      setMessage("");
    })
    .catch((err)=>{
      console.log(err)
      toast.error(err.message || "Failed to submit the response")
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
            style={{ color: "black", borderBottom: "none", outline: "none" }}
          />
          <input
            type="text"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            className="w-100 m-0 p-3"
            placeholder="Last Name*"
            style={{ color: "black", borderBottom: "none", outline: "none" }}
          />
          <input
            type="email"
            className="w-100 m-0 p-3"
            placeholder="Email*"
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
            style={{ color: "black", borderBottom: "none", outline: "none" }}
          />
          <input
            type="text"      
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
