import { useEffect, useRef, useState } from "react";
import { BsBag } from "react-icons/bs";
import gsap from "gsap";
import Cart from "../Cart/Cart";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const containerRef = useRef(null);
  const { cartItems, toggleCart, showCart } = useCart(); // Get cartItems directly

  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const links = document.querySelectorAll(".nav-right ul li a");
    const logo = document.querySelector(".logo a");
    const btn = document.querySelector(".cart-btn");

    const tl = gsap.timeline();

    tl.fromTo(
      logo,
      {
        opacity: 0,
        y: 100,
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: 0.15,
      }
    );

    tl.fromTo(
      links,
      {
        opacity: 0,
        y: 100,
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: 0.15,
      }
    );
    tl.fromTo(
      btn,
      {
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
        ease: "power4.out",
        stagger: 0.15,
      }
    );

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
    <>
      <div className="container navbar-container" ref={containerRef}>
        <div className="logo">
          <NavLink to="/">
            <span>
              <h2>Serenity</h2>
              <h2>Ceramics</h2>
            </span>
            <span>
              <h2>Serenity</h2>
              <h2>Ceramics</h2>
            </span>
          </NavLink>
        </div>

        <div className="nav-right">
          <nav>
            <ul className={showMenu ? "active-menu" : ""}>
              <button className="close-menu-btn" onClick={handleToggleMenu}>
                <IoClose />
              </button>
              <li>
                <NavLink to="/">
                  <span className="nav-text">Home</span>
                  <span className="nav-hover">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop">
                  <span className="nav-text">Shop</span>
                  <span className="nav-hover">Shop</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <span className="nav-text">About us</span>
                  <span className="nav-hover">About us</span>
                </NavLink>
              </li>
              {/* <li>
                <a href="">
                  <span className="nav-text">Journal</span>
                  <span className="nav-hover">Journal</span>
                </a>
              </li> */}
              <li>
                <NavLink to="/contact">
                  <span className="nav-text">Contact Us</span>
                  <span className="nav-hover">Contact Us</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="btn-box">
            <button className="cart-btn" onClick={toggleCart}>
              <div className="circle">{cartItems.length}</div>{" "}
              {/* Show cart length */}
              <BsBag />
            </button>
            <button className="open-menu-btn" onClick={handleToggleMenu}>
              <RiMenu3Fill />
            </button>
          </div>
        </div>
      </div>

      <Cart toggleCart={toggleCart} showCart={showCart} />
    </>
  );
};

export default Navbar;
