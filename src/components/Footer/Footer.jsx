import {
  FaInstagram,
  FaFacebookSquare,
  FaPinterestSquare,
  FaTwitter,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import "./Footer.css";
import Marquee from "react-fast-marquee";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const h4Text = new SplitType(containerRef.current.querySelectorAll("h4"));
    const li = new SplitType(containerRef.current.querySelectorAll("li"));
    const bigLogo = new SplitType(
      containerRef.current.querySelector(".big-logo")
    );

    h4Text.lines.forEach((line) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("text-wrapper");
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    li.lines.forEach((line) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("text-wrapper");
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    bigLogo.lines.forEach((line) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("text-wrapper");
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        // markers: true,
      },
    });

    tl.from(h4Text.lines, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      skewY: 10,
      transformOrigin: "0% 100%",
      stagger: 0.15,
    });

    tl.from(li.lines, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      skewY: 10,
      transformOrigin: "0% 100%",
      stagger: 0.15,
    });
  }, []);

  return (
    <div>
      <footer class="footer-container">
        <div className="container" ref={containerRef}>
          <div className="footer-top">
            <div class="footer-contact">
              <h4>Info</h4>
              <ul>
                <li>
                  <p>
                    <i class="icon-location"></i> 123 Harmony Lane, Kyoto, Japan
                    604-8005
                  </p>
                </li>
                <li>
                  <p>
                    <i class="icon-phone"></i> +81 75-123-4567
                  </p>
                </li>
                <li>
                  <p>
                    <i class="icon-email"></i> info@serenityceramics.jp
                  </p>
                </li>
              </ul>
            </div>

            <div class="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>

            <div class="footer-links">
              <h4>Legal </h4>
              <ul>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            <div class="footer-social">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Pinterest</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="big-logo">
          <Marquee className="marquee-footer">
            <h2>Serenity Ceramics</h2>
            <h2>Serenity Ceramics</h2>
            <h2>Serenity Ceramics</h2>
          </Marquee>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
