import { BsBag } from "react-icons/bs";
import { useEffect } from "react";
import gsap from "gsap";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".nav-right ul li a");
    const logo = document.querySelector(".logo a");

    links.forEach((link) => {
      const text = link.querySelector(".nav-text");
      const hoverText = link.querySelector(".nav-hover");

      link.addEventListener("mouseenter", () => {
        gsap.to(text, { y: "-120%", duration: 0.5, ease: "power1.out" });
        gsap.to(hoverText, { y: "0%", duration: 0.5, ease: "power1.out" });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(text, { y: "0%", duration: 0.5, ease: "power1.out" });
        gsap.to(hoverText, { y: "120%", duration: 0.5, ease: "power1.out" });
      });
    });

    // Apply animation to logo
    const logoText = logo.querySelector("span:first-child");
    const logoHoverText = logo.querySelector("span:last-child");

    logo.addEventListener("mouseenter", () => {
      gsap.to(logoText, { y: "-120%", duration: 0.5, ease: "power1.out" });
      gsap.to(logoHoverText, { y: "0%", duration: 0.5, ease: "power1.out" });
    });

    logo.addEventListener("mouseleave", () => {
      gsap.to(logoText, { y: "0%", duration: 0.5, ease: "power1.out" });
      gsap.to(logoHoverText, { y: "120%", duration: 0.5, ease: "power1.out" });
    });
  }, []);

  return (
    <div className="container navbar-container">
      <div className="logo">
        <a href="">
          <span>
            <h2>Serenity</h2>
            <h2>Ceramics</h2>
          </span>
          <span>
            <h2>Serenity</h2>
            <h2>Ceramics</h2>
          </span>
        </a>
      </div>

      <div className="nav-right">
        <nav>
          <ul>
            <li>
              <a href="">
                <span className="nav-text">Home</span>
                <span className="nav-hover">Home</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="nav-text">Shop</span>
                <span className="nav-hover">Shop</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="nav-text">About us</span>
                <span className="nav-hover">About us</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="nav-text">Journal</span>
                <span className="nav-hover">Journal</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="nav-text">Contact Us</span>
                <span className="nav-hover">Contact Us</span>
              </a>
            </li>
          </ul>
        </nav>

        <button className="cart-btn">
          <BsBag />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
