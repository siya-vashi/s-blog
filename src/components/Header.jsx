import "./header.css";
import cd from "../assets/purple-cd.svg";
import { useState } from "react";
import Admin from "./Admin";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";


  

  return (
    <div className="header">

      <h1 className="title"
      onClick={() => navigate("/")}>
        siya's archives.
      </h1>


      <div className="header-icons">

        
      {isHomePage && (
  <div
    className="admin"
    onClick={() => {
      console.log("admin clicked");
      setShowModal(true);
    }}
  >
    <div>
      <img 
        className="adminimg"
        src={cd}
        alt="admin"
      />
      <p className="admintext">index</p>
    </div>
  </div>
)}


        <div
          className="about"
          onClick={() => navigate("/about")}
        >
          <div>
            <img className="aboutimg"
              src={cd}
              alt="about"
            />
            <p className="abouttext">about</p>
          </div>
        </div>


        <div
          className="recent"
          onClick={() => navigate("/recent")}
        >
          <div>
            <img className="recentimg"
              src={cd}
              alt="recent"
            />
            <p className="recenttext">recent</p>
          </div>
        </div>

      </div>


      {showModal && (
        <Admin
          closeModal={() => setShowModal(false)}
        />
      )}



    </div>
  );
}