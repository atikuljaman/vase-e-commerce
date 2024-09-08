import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import productsData from "../../data/products.json"; // Update path to your data
import "./ProductDetailPage.css"; // Update path to your CSS
import { Footer, Navbar } from "../../components";
import Rating from "react-rating";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext.jsx";
import gsap from "gsap";

const ProductDetailPage = () => {
  const { id } = useParams(); // Extract the dynamic id from the URL
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [activeSection, setActiveSection] = useState("description"); // State to track active section
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const accordionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
    setSelectedImage(foundProduct?.img);
  }, [id]);

  // Toggle accordion functionality
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the current active accordion
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };

  // Accordion animation with GSAP
  useEffect(() => {
    accordionRefs.current.forEach((accordionBody, index) => {
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

  // Handle image selection
  const handleImageClick = (imgPath) => {
    setSelectedImage(imgPath);
  };

  // Quantity increase and decrease handlers
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      alert("Product added to cart!");
    }
  };

  if (!product) {
    return <div>Loading...</div>; // Display a loading message while fetching the product
  }

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case "InStock":
        return "green";
      case "OutOfStock":
        return "crimson";
      case "PreOrder":
        return "rgb(255, 117, 67)";
      default:
        return "black";
    }
  };

  return (
    <>
      <Navbar />

      <div className="product-detail-wrapper">
        <div className="product-detail-container container">
          <div className="product-detail-img-container">
            <div className="img-left">
              {product?.imgGallery?.map((imgSrc, index) => (
                <div className="img-box" key={index}>
                  <img
                    src={`../../${imgSrc}`}
                    alt={`Product ${index + 1}`}
                    onClick={() => handleImageClick(imgSrc)} // Set clicked image as the selected image
                    className={selectedImage === imgSrc ? "selected" : ""}
                  />
                </div>
              ))}
            </div>
            <div className="img-right">
              <img src={`../../${selectedImage}`} alt="Selected product" />
            </div>
          </div>
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p className="product-detail-description">{product.desc}</p>
            <div className="rating">
              <Rating
                emptySymbol={<i className="fa-regular fa-star empty-star" />}
                fullSymbol={<i className="fa-solid fa-star full-star" />}
                initialRating={product.reviews}
                readonly
              />
              <span>{product.reviews}</span>
            </div>

            <ul className="product-detail-details">
              <li>Color: {product.color}</li>
              <li>Size: {product.size}</li>
              <li>Material: {product.material}</li>
              <li>
                Stock:{" "}
                <span
                  style={{ color: getAvailabilityColor(product.availability) }}
                >
                  {product.availability === "InStock"
                    ? "In Stock"
                    : product.availability === "OutOfStock"
                    ? "Out of Stock"
                    : "Pre Order"}
                </span>
              </li>
            </ul>

            <div className="product-detail-price">
              <span>${product.currPrice}</span>
              {product.prevPrice && (
                <span className="prev-price">${product.prevPrice}</span>
              )}
            </div>
            <div className="product-detail-bottom">
              <div className="product-detail-quantity">
                <button onClick={handleDecreaseQuantity}>
                  <FiMinus />
                </button>
                <span>{quantity}</span>
                <button onClick={handleIncreaseQuantity}>
                  <FiPlus />
                </button>
              </div>
              <div className="product-detail-add-to-cart">
                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="product-detail-bottom-container container">
          <div className="product-bottom-header">
            <div
              className={activeSection === "description" ? "active" : ""}
              onClick={() => setActiveSection("description")}
            >
              <h3>Description</h3>
            </div>
            <div
              className={activeSection === "reviews" ? "active" : ""}
              onClick={() => setActiveSection("reviews")}
            >
              <h3>Reviews</h3>
            </div>
            <div
              className={activeSection === "faqs" ? "active" : ""}
              onClick={() => setActiveSection("faqs")}
            >
              <h3>FAQs</h3>
            </div>
          </div>

          <div className="product-bottom-content">
            {activeSection === "description" && (
              <div className="product-description">
                <p className="product-detail-description">{product.desc}</p>

                <div className="product-desc-list-container">
                  <div className="product-desc-list">
                    <div className="list-left">
                      <h4>01. Material</h4>
                    </div>
                    <div className="list-right">
                      <p>{product.specifications.Material}</p>
                    </div>
                  </div>
                  <div className="product-desc-list">
                    <div className="list-left">
                      <h4>02. Color</h4>
                    </div>
                    <div className="list-right">
                      <p>{product.specifications.Color}</p>
                    </div>
                  </div>
                  <div className="product-desc-list">
                    <div className="list-left">
                      <h4>03. Size</h4>
                    </div>
                    <div className="list-right">
                      <p>{product.specifications.Size}</p>
                    </div>
                  </div>
                  <div className="product-desc-list">
                    <div className="list-left">
                      <h4>04. Style</h4>
                    </div>
                    <div className="list-right">
                      <p>{product.specifications.Style}</p>
                    </div>
                  </div>
                  <div className="product-desc-list">
                    <div className="list-left">
                      <h4>05. Shape</h4>
                    </div>
                    <div className="list-right">
                      <p>{product.specifications.Shape}</p>
                    </div>
                  </div>
                  <div className="product-desc-list">
                    <div className="list-left">
                      <h4>06. Availability</h4>
                    </div>
                    <div className="list-right">
                      <p>{product.specifications.Availability}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeSection === "reviews" && (
              <div className="product-reviews">
                <h4>Product Reviews</h4>
                {/* Assuming product.reviewsDetails is an array of review objects */}
                {product.customerReviews &&
                product.customerReviews.length > 0 ? (
                  product.customerReviews.map((review, index) => (
                    <div key={index} className="review-item">
                      <div className="rating-box">
                        <Rating
                          emptySymbol={
                            <i className="fa-regular fa-star empty-star" />
                          }
                          fullSymbol={
                            <i className="fa-solid fa-star full-star" />
                          }
                          initialRating={review.rating}
                          readonly
                        />
                        <span>{review.rating}</span>
                      </div>
                      <h5>{review.name}</h5>
                      <p>{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet.</p>
                )}

                <button>View more</button>
              </div>
            )}
            {activeSection === "faqs" && (
              <div className="product-faqs">
                <h4>Frequently Asked Questions</h4>
                {/* Assuming product.faqs is an array of FAQ objects */}
                {product.faqs && product.faqs.length > 0 ? (
                  product.faqs.map((faq, index) => (
                    <div className="accordion-box" key={faq.id}>
                      <div
                        className="accordion-header"
                        onClick={() => toggleAccordion(index)}
                      >
                        <div className="header-left">
                          <span>0{index + 1}.</span>
                          <h3>{faq.question}</h3>
                        </div>

                        <FiPlus
                          className={
                            activeIndex === index ? "icon active" : "icon"
                          }
                        />
                      </div>

                      <div
                        className="accordion-body"
                        ref={(el) => (accordionRefs.current[index] = el)}
                      >
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No FAQs available.</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="related-products-container container">
          <h3>Related Products</h3>

          <div className="content">
            {product?.relatedProducts.map((item) => (
              <Link to={`/product/${item.id}`}>
                <div className="card" key={item?.id}>
                  <div className="card-img">
                    <img src={`../../${item?.img}`} alt={item?.name} />
                    <div className="add-to-cart-box">
                      <button>Add to cart</button>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="info-top">
                      <h4>{item?.name}</h4>
                      <div className="rating">
                        <h4>{item?.reviews}</h4> <FaStar className="icon" />
                      </div>
                    </div>
                    <div className="price-box">
                      <h4>${item?.currPrice}</h4>
                      <h4 className="prev-price">${item?.prevPrice}</h4>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetailPage;
