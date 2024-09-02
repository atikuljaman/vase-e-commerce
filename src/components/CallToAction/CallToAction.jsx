import { useEffect, useRef } from "react";
import { PiStarFourFill } from "react-icons/pi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import arrowIcon from "../../assets/images/arrow-icon.png";
import img from "../../assets/images/img-11.png";
import "./CallToAction.css";

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const containerRef = useRef(null);
  const leftText = useRef(null);
  const rightText = useRef(null);

  const imgBoxRef = useRef(null);
  let currentScroll = window.scrollY;
  let isScrollingDown = true;

  useEffect(() => {
    const arrows = containerRef.current.querySelectorAll(".arrow-icon");
    const marqueePart = containerRef.current.querySelectorAll(".marquee-part");

    let tween = gsap.to(marqueePart, {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });

    const handleScroll = () => {
      if (window.scrollY > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      arrows.forEach((arrow) => {
        if (isScrollingDown) {
          arrow.classList.remove("active");
        } else {
          arrow.classList.add("active");
        }
      });

      currentScroll = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   // Parallax effect for img-box
  //   gsap.to(imgBoxRef.current, {
  //     y: window.innerHeight * 0.1, // Adjust this value to control the speed of the parallax effect
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: imgBoxRef.current,
  //       start: "top 80%",
  //       end: "bottom top",
  //       scrub: 1, // Smooth the scroll effect
  //       markers: true,
  //     },
  //   });
  // }, []);

  return (
    <div className="call-to-action-container" ref={containerRef}>
      <div className="call-to-action-content container">
        <div className="img-box" ref={imgBoxRef}>
          <img src={img} alt="" />
        </div>
      </div>

      <div className="left-text">
        <div className="section-title-box">
          <div className="marquee-inner">
            {Array.from({ length: 15 }, (_, i) => (
              <div className="marquee-part" key={i}>
                <h2 className="section-title">
                  Experience Serenity in Every Curve
                </h2>
                <div>
                  <img
                    src={arrowIcon}
                    alt="Arrow Icon"
                    className="arrow-icon"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="right-text" ref={rightText}>
        <div className="section-title-box">
          <div className="marquee-inner">
            {Array.from({ length: 15 }, (_, i) => (
              <div className="marquee-part" key={i}>
                <h2 className="section-title">
                  Experience Serenity in Every Curve
                </h2>
                <div>
                  <img
                    src={arrowIcon}
                    alt="Arrow Icon"
                    className="arrow-icon"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
