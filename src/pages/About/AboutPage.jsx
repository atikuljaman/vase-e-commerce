import { Footer, Navbar } from "../../components";

import arrowIcon from "../../assets/images/arrow-icon.png";
import img_1 from "../../assets/images/img-12.jpg";
import img_2 from "../../assets/images/img-6.jpg";
import avatar from "../../assets/images/avatar-2.png";
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

          <div className="our-founder-wrapper">
            <div className="our-founder-container container">
              <div className="img-box">
                <img src={avatar} alt="Founder" />
              </div>

              <div className="detail-container ">
                <div className="detail-left container">
                  <h2>
                    Meet Our Founder: <br /> Hiroshi Tanaka
                  </h2>
                  <p>
                    Hiroshi Tanaka, the visionary behind Serenity Ceramics, has
                    always been captivated by the calming beauty of minimalist
                    design. Growing up in the tranquil surroundings of Kyoto,
                    Japan, Hiroshi was deeply inspired by the balance and
                    harmony of nature, which became the cornerstone of his
                    artistic journey. With a background in traditional Japanese
                    pottery and a degree in Fine Arts from Kyoto City University
                    of Arts, Hiroshi sought to merge his love for art and nature
                    in a meaningful way.
                  </p>
                  <p>
                    Driven by a desire to craft timeless pieces that evoke a
                    sense of peace, he founded Serenity Ceramics in 2001. Over
                    the years, Hiroshi’s dedication to merging minimalist
                    aesthetics with traditional craftsmanship has made Serenity
                    Ceramics a renowned name in the world of artisanal ceramics.
                  </p>

                  <p>
                    Through this brand, Hiroshi seeks to inspire others to
                    create peaceful, meaningful spaces in their homes. His
                    belief is that each piece, no matter how simple, should
                    carry with it a sense of calm, balance, and serenity—a
                    reflection of the natural world that surrounds us.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="our-mission-container container">
            <div className="our-story-left">
              <h2>Bringing Serenity to Every Home</h2>
              <p>
                Our mission is simple: to create elegant, sustainable ceramics
                that bring a sense of calm to your home. We are dedicated to
                providing high-quality products that enhance the beauty of
                everyday living while preserving the world around us. Each vase
                is crafted with the intention to evoke serenity, balance, and
                timelessness in any space it inhabits.
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
