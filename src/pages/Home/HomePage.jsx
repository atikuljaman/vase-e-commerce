import {
  HeroBanner,
  Navbar,
  FeaturedProducts,
  WhyChooseUs,
  Testimonials,
  CallToAction,
  Footer,
} from "../../components";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <FeaturedProducts />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
