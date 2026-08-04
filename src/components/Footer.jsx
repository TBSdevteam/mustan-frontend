import { Link } from "react-router-dom";
import backgroundImage from "../assets/background-Footer.png";

const Footer = () => {
  return (
    <div
    className="justify-content-md-between justify-content-center"
      style={{
        padding: "20px 40px",
        backgroundImage: `url(${backgroundImage})`,
        // position: "fixed",
        // bottom: 0,
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white",
        display: "flex",
        flexWrap:"wrap",
        // justifyContent: "space-between",
        alignItems:"center"
      }}
    >
      <p className="m-0 text-md-start text-center" style={{fontWeight:500}}>
        &#169; Copyright. All Rights Reserved. Mustan Painting and Decorating
      </p>
      <p className="m-0 mt-md-0 mt-2">
        Website by{" "}
        <Link to="/responses" style={{ color:"white", textDecoration:"none"}}>
        <span  style={{ fontWeight: "900", fontSize: "20px" }}>
          Lofty Logix
        </span>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
