import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Footer, Navbar } from "../../components";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <Navbar />

      <div className="contact-page-container container">
        <div className="contact-page-header">
          <h2>
            Get in Touch with <br /> Serenity Ceramics
          </h2>
          <p>
            Whether you have questions about our collections, need help with an
            order, or simply want to know more about Serenity Ceramics, we’re
            here to help. Feel free to reach out to us through any of the
            following methods.
          </p>
        </div>

        <div className="contact-info">
          <div className="contact-info-box">
            <div className="circle">
              <FaMapMarkerAlt />
            </div>
            <p>Serenity Ceramics, 123 Harmony Lane Kyoto, Japan 604-8005</p>
          </div>
          <div className="contact-info-box">
            <div className="circle">
              <FaPhoneAlt />
            </div>
            <p>+81 75-123-4567</p>
          </div>
          <div className="contact-info-box">
            <div className="circle">
              <BiLogoGmail className="icon" />
            </div>
            <p>info@serenityceramics.jp</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>

          <form>
            <div className="input-box">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="input-box">
              <div className="input-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" placeholder="Your Phone" />
              </div>

              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input type="subject" id="subject" placeholder="Your Subject" />
              </div>
            </div>

            <textarea name="" id="" placeholder="Your Message"></textarea>

            <button>Send Message</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
