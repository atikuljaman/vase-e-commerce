import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa";
import SplitType from "split-type";
import featuredProductsData from "./featuredProductsData";
import arrowIcon from "../../assets/images/arrow-icon.png";
import "./FeaturedProducts.css";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProducts = () => {
  let currentScroll = window.scrollY;
  let isScrollingDown = true;

  const containerRef = useRef(null);

  useEffect(() => {
    const descText = new SplitType(
      containerRef.current.querySelector(".section-desc")
    );

    descText.lines.forEach((line) => {
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
      },
    });

    tl.from(descText.lines, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      skewY: 10,
      transformOrigin: "0% 100%",
      stagger: 0.15,
    });

    tl.fromTo(
      containerRef.current.querySelectorAll(".card"),
      {
        opacity: 0,
        y: 100,
        skewY: 10,
        transformOrigin: "0% 100%",
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        skewY: 0,
        stagger: 0.15,
        ease: "power4.out",
        transformOrigin: "0% 0%",
      }
    );
  }, []);

  useEffect(() => {
    const arrows = containerRef.current.querySelectorAll(".arrow-icon");
    const marqueePart = containerRef.current.querySelectorAll(".marquee-part");

    let tween = gsap.to(marqueePart, {
      xPercent: -100,
      repeat: -1,
      duration: 5,
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

  return (
    <div className="featured-products-container" ref={containerRef}>
      <div className="section-header">
        <div className="section-title-box">
          <div className="marquee-inner">
            {Array.from({ length: 15 }, (_, i) => (
              <div className="marquee-part" key={i}>
                <h2 className="section-title">Our Signature Collection</h2>
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
        <div className="container">
          <p className="section-desc">
            Discover the elegance of simplicity with our curated selection of
            minimalist vases, each piece crafted to bring serenity and style
            into your home. Explore our most popular designs and find the
            perfect addition to your space.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="products">
          {featuredProductsData.map((item) => (
            <div className="card" key={item?.id}>
              <div className="card-img">
                <img src={item?.img} alt={item?.name} />

                <div className="add-to-cart-box">
                  <button>Add to cart</button>
                </div>
              </div>
              <div className="product-info">
                <div className="info-top">
                  <h4>{item?.name}</h4>
                  <div className="rating">
                    <h4>{item?.reviews}</h4>
                    <FaStar className="icon" />
                  </div>
                </div>
                <div className="price-box">
                  <h4>{item?.currPrice}</h4>
                  <h4 className="prev-price">{item?.prevPrice}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
