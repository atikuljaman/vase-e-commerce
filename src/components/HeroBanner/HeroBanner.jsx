import { useEffect } from "react";
import img_1 from "../../assets/images/img-1.jpg";
import img_2 from "../../assets/images/img-2.jpg";
import img_3 from "../../assets/images/img-3.jpg";
import img_4 from "../../assets/images/img-4.jpg";
import "./HeroBanner.css";
import gsap from "gsap";

const HeroBanner = () => {
  useEffect(() => {
    const bannerHeadings = document.querySelectorAll(".banner-heading");

    bannerHeadings.forEach((item) => {
      const bannerImgWrapper = item.querySelector(".banner-img-wrapper");
      const itemBounds = item.getBoundingClientRect();

      const onMouseEnter = () => {
        gsap.to(bannerImgWrapper, {
          opacity: 1,
          yPercent: 0,
          scale: 1,
          rotate: 0,
          duration: 0.5,
        });
      };

      const onMouseLeave = () => {
        gsap.to(bannerImgWrapper, {
          opacity: 0,
          yPercent: -50,
          scale: 0.8,
          rotate: 15,
          duration: 0.5,
        });
      };

      const onMouseMove = (e) => {
        const x = e.clientX;
        const y = e.clientY;

        const imgWrapperBounds = bannerImgWrapper.getBoundingClientRect();
        let yOffset = (y - itemBounds.top) / imgWrapperBounds.height;
        yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);

        gsap.to(bannerImgWrapper, {
          duration: 1.25,
          x: x - itemBounds.left - imgWrapperBounds.width / 1.55,
          y: y - itemBounds.top - imgWrapperBounds.height / 2 - yOffset,
          ease: "power2.out",
        });
      };

      item.addEventListener("mouseenter", onMouseEnter);
      item.addEventListener("mouseleave", onMouseLeave);
      item.addEventListener("mousemove", onMouseMove);

      // Cleanup on unmount
      return () => {
        item.removeEventListener("mouseenter", onMouseEnter);
        item.removeEventListener("mouseleave", onMouseLeave);
        item.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="container hero-container">
      <div>
        <div className="banner-heading">
          <div className="banner-img-wrapper">
            <img src={img_1} alt="Banner" />
          </div>
          <div className="banner-text">
            <h1>Where Art Meets </h1>
          </div>
        </div>
        <div className="banner-heading">
          <div className="banner-img-wrapper">
            <img src={img_2} alt="Banner" />
          </div>
          <h1>Tranquility</h1>
        </div>
        <div className="banner-heading">
          <div className="banner-img-wrapper">
            <img src={img_3} alt="Banner" />
          </div>
          <h1>Serenity in Every</h1>
        </div>
        <div className="banner-heading">
          <div className="banner-img-wrapper">
            <img src={img_4} alt="Banner" />
          </div>
          <h1>Curve.</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
