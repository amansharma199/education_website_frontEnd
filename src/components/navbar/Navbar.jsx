import { useState } from "react"
import "./navbar.css";


const Navbar = () => {
  const [expandMenu, setExpandMenu] = useState(false);

  const handleExpand = () => {
    setExpandMenu(!expandMenu);
  }

  const toggleMenuInMobile = () => {
    setExpandMenu(!expandMenu);
  }

  return (
    <div className="navbar" id="navbar">
      <div className="wrapper">
        <div className="navbarLogo"><a href="#">EduCare</a></div>

        <div className={`navbarMenu ${expandMenu ? "expandMenu" : ""}`} id="navbarMenu">
          <ul>
            <a href="#"><li onClick={toggleMenuInMobile}>Home</li></a>
            <a href="#services"><li onClick={toggleMenuInMobile}>Services</li></a>
            <a href="#courses"><li onClick={toggleMenuInMobile}>courses</li></a>
            <a href="#faq"><li onClick={toggleMenuInMobile}>faq</li></a>
            <a href="#contact"><li onClick={toggleMenuInMobile}>contact</li></a>
          </ul>
        </div>

        <div className="navbarSocialMedia">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>

        <div className="burger" onClick={handleExpand}>{expandMenu ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}</div>
      </div>
    </div>
  )
}

export default Navbar