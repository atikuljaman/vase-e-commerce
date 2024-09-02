import { useEffect, useRef } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { FaQuoteLeft, FaQuoteRight, FaStar, FaUser } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import arrowIcon from "../../assets/images/arrow-icon.png";
import "./Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const containerRef = useRef(null);
  let currentScroll = window.scrollY;
  let isScrollingDown = true;

  const testimonialsData = [
    {
      name: "Emily R.",
      location: "New York, USA",
      testimonial:
        "Serenity Ceramics has transformed my living room. The minimalist design of their vases perfectly complements my modern decor. I receive compliments every time someone visits!",
      rating: 5,
    },
    {
      name: "Hiroshi T.",
      location: "Kyoto, Japan",
      testimonial:
        "As someone who appreciates fine craftsmanship, I was thoroughly impressed by the quality of Serenity Ceramics. Each piece is truly a work of art.",
      rating: 5,
    },
    {
      name: "Sophia L.",
      location: "London, UK",
      testimonial:
        "I love the eco-friendly materials used in Serenity Ceramics. It’s great to know that I’m supporting a brand that cares about the environment.",
      rating: 4.5,
    },
    {
      name: "Carlos M.",
      location: "Madrid, Spain",
      testimonial:
        "The custom vase I ordered from Serenity Ceramics exceeded all my expectations. It’s the perfect addition to my home, and the customer service was excellent.",
      rating: 5,
    },
    {
      name: "Amelie D.",
      location: "Paris, France",
      testimonial:
        "Serenity Ceramics has a unique ability to bring a sense of calm and beauty into any space. I can’t imagine my home without their pieces.",
      rating: 4.5,
    },
    {
      name: "Liam S.",
      location: "Sydney, Australia",
      testimonial:
        "The attention to detail in Serenity Ceramics' products is unmatched. Their vases add a serene and sophisticated touch to my home.",
      rating: 5,
    },
    {
      name: "Mia K.",
      location: "Toronto, Canada",
      testimonial:
        "I purchased a set of vases for my new apartment, and they’ve become the centerpiece of my decor. The quality is exceptional.",
      rating: 5,
    },
    {
      name: "Oliver B.",
      location: "Berlin, Germany",
      testimonial:
        "Serenity Ceramics brings a sense of peace to my home. The minimalist designs are elegant and versatile, fitting perfectly in any room.",
      rating: 4.5,
    },
    {
      name: "Ava J.",
      location: "Los Angeles, USA",
      testimonial:
        "The craftsmanship is truly impressive. Each vase is unique and adds a beautiful, calming vibe to my space.",
      rating: 5,
    },
    {
      name: "Nina V.",
      location: "Rome, Italy",
      testimonial:
        "I love how these vases combine traditional craftsmanship with modern design. Serenity Ceramics has brought an artistic touch to my home.",
      rating: 5,
    },
  ];

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
  }, []);

  return (
    <div className="testimonials-container" ref={containerRef}>
      <div className="section-header">
        <div className="section-title-box">
          <div className="marquee-inner">
            {Array.from({ length: 15 }, (_, i) => (
              <div className="marquee-part" key={i}>
                <h2 className="section-title">What Our Customers Are Saying</h2>
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
            Discover the experiences of those who have embraced the serenity of
            our ceramics. Hear from our satisfied customers and learn how
            Serenity Ceramics has brought a touch of tranquility to their homes.
          </p>
        </div>
      </div>

      <Marquee
        gradient={true}
        gradientColor="#ebf0ec"
        gradientWidth={300}
        pauseOnHover={true}
      >
        {testimonialsData.slice(0, 5).map((item) => (
          <div className="review-card" key={item?.name}>
            <div className="review-text">
              <FaQuoteLeft className="quote-icon left" />
              <p>{item?.testimonial}</p>
              <FaQuoteRight className="quote-icon right" />
            </div>

            <div className="review-info">
              <div className="info-left">
                <div className="avatar">
                  <FaUser className="icon" />
                </div>

                <div>
                  <h4>{item?.name}</h4>
                  <p>{item?.location}</p>
                </div>
              </div>

              <div className="stars">
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
              </div>
            </div>
          </div>
        ))}
      </Marquee>
      <div className="divider"></div>
      <Marquee
        gradient={true}
        gradientColor="#ebf0ec"
        gradientWidth={300}
        pauseOnHover={true}
        direction="right"
      >
        {testimonialsData.slice(5, 10).map((item) => (
          <div className="review-card" key={item?.name}>
            <div className="review-text">
              <FaQuoteLeft className="quote-icon left" />
              <p>{item?.testimonial}</p>
              <FaQuoteRight className="quote-icon right" />
            </div>

            <div className="review-info">
              <div className="info-left">
                <div className="avatar">
                  <FaUser className="icon" />
                </div>

                <div>
                  <h4>{item?.name}</h4>
                  <p>{item?.location}</p>
                </div>
              </div>

              <div className="stars">
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
                <FaStar className="icon" />
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
