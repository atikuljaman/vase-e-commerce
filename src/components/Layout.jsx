// Layout.jsx
import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

const Layout = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      direction: "vertical",
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Outlet /> {/* This will render the current page */}
    </div>
  );
};

export default Layout;
