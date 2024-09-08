import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { HomePage, ShopPage } from "./pages";

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Sets the duration of the scroll animation
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smooth: true, // Enable smooth scrolling
      smoothTouch: false, // Disable smooth scrolling on touch devices
      direction: "vertical", // Scroll direction: 'vertical' or 'horizontal'
    });

    // Assign to ref for potential cleanup later
    lenisRef.current = lenis;

    // Handle the scroll loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      // Cleanup the Lenis instance on component unmount
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* <HomePage /> */}
      <ShopPage />
    </>
  );
}

export default App;
