// import { useEffect, useRef, useState } from "react";
// import { BsBag } from "react-icons/bs";
// import gsap from "gsap";
// import Cart from "../Cart/Cart";
// import "./Navbar.css";
// import { NavLink } from "react-router-dom";
// import { useCart } from "../../contexts/CartContext";

// const Navbar = () => {
//   const containerRef = useRef(null);
//   const { getCartItems, addToCart } = useCart();

//   const [showCart, setShowCart] = useState(false);

//   const toggleCart = () => {
//     setShowCart(!showCart);
//   };

//   useEffect(() => {
//     const links = document.querySelectorAll(".nav-right ul li a");
//     const logo = document.querySelector(".logo a");
//     const btn = document.querySelector(".cart-btn");

//     const tl = gsap.timeline();

//     tl.fromTo(
//       logo,
//       {
//         opacity: 0,
//         y: 100,
//       },
//       {
//         duration: 1,
//         y: 0,
//         opacity: 1,
//         ease: "power4.out",
//         stagger: 0.15,
//       }
//     );

//     tl.fromTo(
//       links,
//       {
//         opacity: 0,
//         y: 100,
//       },
//       {
//         duration: 1,
//         y: 0,
//         opacity: 1,
//         ease: "power4.out",
//         stagger: 0.15,
//       }
//     );
//     tl.fromTo(
//       btn,
//       {
//         opacity: 0,
//         // scale: 0,
//       },
//       {
//         duration: 1,
//         // scale: 1,
//         opacity: 1,
//         ease: "power4.out",
//         stagger: 0.15,
//       }
//     );

//     links.forEach((link) => {
//       const text = link.querySelector(".nav-text");
//       const hoverText = link.querySelector(".nav-hover");

//       link.addEventListener("mouseenter", () => {
//         gsap.to(text, { y: "-120%", duration: 0.5, ease: "power1.out" });
//         gsap.to(hoverText, { y: "0%", duration: 0.5, ease: "power1.out" });
//       });

//       link.addEventListener("mouseleave", () => {
//         gsap.to(text, { y: "0%", duration: 0.5, ease: "power1.out" });
//         gsap.to(hoverText, { y: "120%", duration: 0.5, ease: "power1.out" });
//       });
//     });

//     // Apply animation to logo
//     const logoText = logo.querySelector("span:first-child");
//     const logoHoverText = logo.querySelector("span:last-child");

//     logo.addEventListener("mouseenter", () => {
//       gsap.to(logoText, { y: "-120%", duration: 0.5, ease: "power1.out" });
//       gsap.to(logoHoverText, { y: "0%", duration: 0.5, ease: "power1.out" });
//     });

//     logo.addEventListener("mouseleave", () => {
//       gsap.to(logoText, { y: "0%", duration: 0.5, ease: "power1.out" });
//       gsap.to(logoHoverText, { y: "120%", duration: 0.5, ease: "power1.out" });
//     });
//   }, []);

//   return (
//     <>
//       <div className="container navbar-container" ref={containerRef}>
//         <div className="logo">
//           <NavLink to="/">
//             <span>
//               <h2>Serenity</h2>
//               <h2>Ceramics</h2>
//             </span>
//             <span>
//               <h2>Serenity</h2>
//               <h2>Ceramics</h2>
//             </span>
//           </NavLink>
//         </div>

//         <div className="nav-right">
//           <nav>
//             <ul>
//               <li>
//                 <NavLink to="/">
//                   <span className="nav-text">Home</span>
//                   <span className="nav-hover">Home</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/shop">
//                   <span className="nav-text">Shop</span>
//                   <span className="nav-hover">Shop</span>
//                 </NavLink>
//               </li>
//               <li>
//                 <a href="">
//                   <span className="nav-text">About us</span>
//                   <span className="nav-hover">About us</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="">
//                   <span className="nav-text">Journal</span>
//                   <span className="nav-hover">Journal</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="">
//                   <span className="nav-text">Contact Us</span>
//                   <span className="nav-hover">Contact Us</span>
//                 </a>
//               </li>
//             </ul>
//           </nav>

//           <button className="cart-btn" onClick={toggleCart}>
//             <div className="circle">{getCartItems?.length}</div>
//             <BsBag />
//           </button>
//         </div>
//       </div>

//       <Cart toggleCart={toggleCart} showCart={showCart} />
//     </>
//   );
// };

// export default Navbar;

import { useEffect, useRef, useState } from "react";
import { BsBag } from "react-icons/bs";
import gsap from "gsap";
import Cart from "../Cart/Cart";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

const Navbar = () => {
  const containerRef = useRef(null);
  const { cartItems } = useCart(); // Get cartItems directly

  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
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
            <ul>
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

          <button className="cart-btn" onClick={toggleCart}>
            <div className="circle">{cartItems.length}</div>{" "}
            {/* Show cart length */}
            <BsBag />
          </button>
        </div>
      </div>

      <Cart toggleCart={toggleCart} showCart={showCart} />
    </>
  );
};

export default Navbar;
