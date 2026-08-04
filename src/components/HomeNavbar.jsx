import { useState } from "react";
import MenuDrawer from "./MenuDrawer";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClose=()=>{
    setShowMenu(false);
  }

  return (
    <>
      <div
        className="d-md-flex d-none justify-content-center align-items-center "
        onClick={() => setShowMenu(!showMenu)}
        style={{ minWidth: "6%" }}
      >
        <div style={{ cursor: "pointer" }}>
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="0 -0.023 83.22 79.483"
            viewBox="0 0 83.23 79.46"
            xmlns="http://www.w3.org/2000/svg"
            data-type="ugc"
            role="presentation"
            aria-hidden="true"
            aria-label
            height="30"
            width="30"
          >
            <g>
              <g>
                <path
                  d="M73.12 79.46c-.47-.08-1-.15-1.42-.25a9.46 9.46 0 1 1 3 .18c-.11 0-.22 0-.33.07Z"
                  fill="#1f4497"
                ></path>
                <path
                  d="M0 10.35a2.29 2.29 0 0 1 .08.28A9.48 9.48 0 1 0 .66 6 23.91 23.91 0 0 0 0 8.56Z"
                  fill="#fede10"
                ></path>
                <path
                  d="M0 70.89a18.55 18.55 0 0 0 .68 2.56 9.24 9.24 0 0 0 7.82 5.94c.11 0 .22 0 .33.07h1.28a2.29 2.29 0 0 1 .28-.07A9.45 9.45 0 1 0 .52 66.93c-.24.7-.35 1.45-.52 2.17Z"
                  fill="#df7ab1"
                ></path>
                <path
                  d="M0 40.57a2.21 2.21 0 0 1 .08.37 9.46 9.46 0 1 0 .23-3.59c-.13.48-.21 1-.31 1.44Z"
                  fill="#3bb54a"
                ></path>
                <path
                  d="M42.29 79.46a2.86 2.86 0 0 1 .28-.07 9.49 9.49 0 1 0-3.57-.34c.65.18 1.32.28 2 .41Z"
                  fill="#662f90"
                ></path>
                <path
                  d="M73.77 0a9.46 9.46 0 1 0 9.45 9.49A9.48 9.48 0 0 0 73.77 0Z"
                  fill="#ed2024"
                ></path>
                <path
                  d="M83.22 39.76a9.46 9.46 0 1 0-9.47 9.42 9.45 9.45 0 0 0 9.47-9.42Z"
                  fill="#2aace2"
                ></path>
                <path
                  d="M51.06 39.73a9.45 9.45 0 1 0-9.45 9.45 9.43 9.43 0 0 0 9.45-9.45Z"
                  fill="#088944"
                ></path>
                <path
                  d="M41.58 18.92a9.46 9.46 0 1 0-9.42-9.46 9.44 9.44 0 0 0 9.42 9.46Z"
                  fill="#f16623"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* mobile nav  */}
      <div className=" d-flex justify-content-between align-items-center bg-white  px-4 py-2 d-md-none w-100 position-fixed" style={{ zIndex:2 }}>
        <div className="d-flex align-items-center gap-2">
          <img src={logo} height={40} width={40} alt="logo" />
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"tel: 0452 281507"}
          >
            <span style={{ fontSize: "24px", fontWeight: "700" }}>
              0452 281507
            </span>
          </Link>
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="0 -0.023 83.22 79.483"
            viewBox="0 0 83.23 79.46"
            xmlns="http://www.w3.org/2000/svg"
            data-type="ugc"
            role="presentation"
            aria-hidden="true"
            aria-label
            height="30"
            width="30"
          >
            <g>
              <g>
                <path
                  d="M73.12 79.46c-.47-.08-1-.15-1.42-.25a9.46 9.46 0 1 1 3 .18c-.11 0-.22 0-.33.07Z"
                  fill="#1f4497"
                ></path>
                <path
                  d="M0 10.35a2.29 2.29 0 0 1 .08.28A9.48 9.48 0 1 0 .66 6 23.91 23.91 0 0 0 0 8.56Z"
                  fill="#fede10"
                ></path>
                <path
                  d="M0 70.89a18.55 18.55 0 0 0 .68 2.56 9.24 9.24 0 0 0 7.82 5.94c.11 0 .22 0 .33.07h1.28a2.29 2.29 0 0 1 .28-.07A9.45 9.45 0 1 0 .52 66.93c-.24.7-.35 1.45-.52 2.17Z"
                  fill="#df7ab1"
                ></path>
                <path
                  d="M0 40.57a2.21 2.21 0 0 1 .08.37 9.46 9.46 0 1 0 .23-3.59c-.13.48-.21 1-.31 1.44Z"
                  fill="#3bb54a"
                ></path>
                <path
                  d="M42.29 79.46a2.86 2.86 0 0 1 .28-.07 9.49 9.49 0 1 0-3.57-.34c.65.18 1.32.28 2 .41Z"
                  fill="#662f90"
                ></path>
                <path
                  d="M73.77 0a9.46 9.46 0 1 0 9.45 9.49A9.48 9.48 0 0 0 73.77 0Z"
                  fill="#ed2024"
                ></path>
                <path
                  d="M83.22 39.76a9.46 9.46 0 1 0-9.47 9.42 9.45 9.45 0 0 0 9.47-9.42Z"
                  fill="#2aace2"
                ></path>
                <path
                  d="M51.06 39.73a9.45 9.45 0 1 0-9.45 9.45 9.43 9.43 0 0 0 9.45-9.45Z"
                  fill="#088944"
                ></path>
                <path
                  d="M41.58 18.92a9.46 9.46 0 1 0-9.42-9.46 9.44 9.44 0 0 0 9.42 9.46Z"
                  fill="#f16623"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      {/* {showMenu && */}
      <MenuDrawer showMenu={showMenu} handleClose={handleClose} />
      {/* } */}
    </>
  );
};

export default HomeNavbar;
