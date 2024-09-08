import { Navbar } from "../../components";

import arrowIcon from "../../assets/images/arrow-icon.png";
import img_1 from "../../assets/images/img-12.jpg";
import img_2 from "../../assets/images/img-6.jpg";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <Navbar />

      <div className="about-page-wrapper">
        <div className="our-story-wrapper">
          <div className="our-story-container container">
            <div className="our-story-left">
              <h2>The Journey of Serenity Ceramics</h2>
              <p>
                Serenity Ceramics was born from a deep passion for minimalist
                design and the desire to create a tranquil living space through
                art. Inspired by Japanese craftsmanship, our collection reflects
                simplicity, elegance, and the beauty of handmade ceramics. Each
                piece is thoughtfully crafted to bring peace and serenity into
                your home, enhancing both functionality and aesthetics.
              </p>
            </div>
            <div className="our-story-right">
              <div className="img-box">
                <img src={img_1} alt="" />
              </div>
              <div className="img-box img-2">
                <img src={img_2} alt="" />
              </div>
              <div className="img-box">
                <img src={img_1} alt="" />
              </div>
              <div className="img-box img-2">
                <img src={img_2} alt="" />
              </div>
            </div>
          </div>

          <div className="our-philosophy-container container">
            <div className="our-story-right">
              <div className="img-box">
                <img src={img_1} alt="" />
              </div>
              <div className="img-box img-2">
                <img src={img_2} alt="" />
              </div>
              <div className="img-box">
                <img src={img_1} alt="" />
              </div>
              <div className="img-box img-2">
                <img src={img_2} alt="" />
              </div>
            </div>

            <div className="our-story-left">
              <h2>Where Art Meets Tranquility</h2>
              <p>
                At Serenity Ceramics, we believe that every object in your home
                should tell a story. Our philosophy is centered around creating
                timeless, eco-friendly pieces that embody both artistry and
                sustainability. We focus on craftsmanship that respects nature
                and brings calm into everyday life. Our vases are more than
                decor—they are statements of balance, serenity, and style.
              </p>
            </div>
          </div>

          <div className="our-handcrafted-container container">
            <div className="our-story-left">
              <h2>Crafted by Hand, Perfected by Nature</h2>
              <p>
                Each vase in our collection is meticulously handcrafted by
                artisans who share a deep commitment to quality and detail. From
                the selection of sustainable materials to the delicate glazing
                process, every step is a celebration of traditional techniques.
                No two vases are alike, ensuring that your Serenity Ceramic is
                truly one-of-a-kind.
              </p>
            </div>

            <div className="our-story-right">
              <div className="img-box">
                <img src={img_1} alt="" />
              </div>
              <div className="img-box img-2">
                <img src={img_2} alt="" />
              </div>
              <div className="img-box">
                <img src={img_1} alt="" />
              </div>
              <div className="img-box img-2">
                <img src={img_2} alt="" />
              </div>
            </div>
          </div>

          <div className="our-sustainability-container container">
            <div className="our-story-right">
              <div className="img-box">
                <img src={img_1} alt="" />
              </div>
              <div className="img-box img-2">
                <img src={img_2} alt="" />
              </div>
              <div className="img-box">
                <img src={img_1} alt="" />
              </div>
              <div className="img-box img-2">
                <img src={img_2} alt="" />
              </div>
            </div>

            <div className="our-story-left">
              <h2>Art with a Conscience</h2>
              <p>
                Sustainability is at the heart of everything we do. We use
                eco-conscious materials and processes that minimize
                environmental impact. By supporting Serenity Ceramics, you are
                not only bringing beautiful designs into your home, but you are
                also contributing to a greener planet. We believe in crafting
                products that last a lifetime—both in style and durability.
              </p>
            </div>
          </div>

          <div className="our-founder-container container">
            <div className="img-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
