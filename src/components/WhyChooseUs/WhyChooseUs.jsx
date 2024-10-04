import { useEffect, useRef, useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import arrowIcon from "../../assets/images/arrow-icon.png";
import "./WhyChooseUs.css";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const accordionRefs = useRef([]);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  let currentScroll = window.scrollY;
  let isScrollingDown = true;

  const whyChooseUsData = [
    {
      id: 1,
      title: "Timeless Design",
      description:
        "Our ceramics are crafted with a focus on classic, timeless designs that never go out of style.",
      icon: "clock",
    },
    {
      id: 2,
      title: "Eco-Friendly Materials",
      description:
        "We use sustainable, eco-friendly materials that are kind to both your home and the planet.",
      icon: "leaf",
    },
    {
      id: 3,
      title: "Handcrafted Quality",
      description:
        "Each piece is carefully handcrafted by skilled artisans, ensuring the highest quality and attention to detail.",
      icon: "hand",
    },
    {
      id: 4,
      title: "Inspired by Nature",
      description:
        "Our designs draw inspiration from the beauty of nature, bringing a touch of the outdoors into your home.",
      icon: "tree",
    },
    {
      id: 5,
      title: "Exceptional Durability",
      description:
        "Our ceramics are built to last, offering exceptional durability and resistance to everyday wear and tear.",
      icon: "shield",
    },
    {
      id: 6,
      title: "Ethical Practices",
      description:
        "We are committed to ethical production practices, ensuring fair wages and safe working conditions for our artisans.",
      icon: "globe",
    },
    {
      id: 7,
      title: "Custom Creations",
      description:
        "We offer custom designs, allowing you to create a piece that perfectly fits your style and needs.",
      icon: "pencil",
    },
    {
      id: 8,
      title: "Customer Satisfaction",
      description:
        "Our commitment to customer satisfaction means we go above and beyond to ensure you love your purchase.",
      icon: "smile",
    },
  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    whyChooseUsData.forEach((_, index) => {
      const accordionBody = accordionRefs.current[index];
      if (accordionBody) {
        if (activeIndex === index) {
          gsap.to(accordionBody, {
            height: "auto",
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          });
        } else {
          gsap.to(accordionBody, {
            height: 0,
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
          });
        }
      }
    });
  }, [activeIndex]);

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
      containerRef.current.querySelectorAll(".accordion-box"),
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

  return (
    <div className="why-choose-us-container" ref={containerRef}>
      <div className="section-header">
        <div className="section-title-box">
          <div className="marquee-inner">
            {Array.from({ length: 15 }, (_, i) => (
              <div className="marquee-part" key={i}>
                <h2 className="section-title">Why Serenity Ceramics?</h2>
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
          <p className="section-desc ">
            Discover the reasons why Serenity Ceramics stands out in
            craftsmanship, quality, and sustainability. Each piece we create is
            a testament to our commitment to excellence, eco-consciousness, and
            timeless design.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="content">
          {whyChooseUsData?.map((item, index) => (
            <div className="accordion-box" key={item.id}>
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <div className="header-left">
                  <span>0{item.id}.</span>
                  <h3>{item.title}</h3>
                </div>

                <div>
                  <FiPlus
                    className={activeIndex === index ? "icon active" : "icon"}
                    //   className="icon"
                  />
                </div>
              </div>

              <div
                className="accordion-body"
                ref={(el) => (accordionRefs.current[index] = el)}
              >
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
