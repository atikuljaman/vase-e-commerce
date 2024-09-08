// import { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { Range } from "react-range";
// import { Footer, Navbar } from "../../components";
// import productsData from "../../data/products.json";
// import "./Shop.css";

// const ShopPage = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [values, setValues] = useState([50]);

//   useEffect(() => {
//     setProducts(productsData);
//     setLoading(false);
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <Navbar />

//       <div className="shop-container container">
//         <div className="filter-container">
//           <h2>Filters</h2>

//           {/* Price Range Filter */}
//           <div className="filter-group">
//             <h3>Price Range</h3>
//             {/* <input
//               type="range"
//               min="20"
//               max="200"
//               step="10"
//               className="price-slider"
//             /> */}
//             <Range
//               step={10}
//               min={20}
//               max={200}
//               values={values}
//               onChange={(values) => setValues(values)}
//               renderTrack={({ props, children }) => (
//                 <div
//                   {...props}
//                   style={{
//                     ...props.style,
//                     height: "12px",
//                     width: "100%",
//                     borderRadius: "999px",
//                     background: `linear-gradient(
//                       to right,
//                       black ${((values[0] - 20) / 180) * 100}%,
//                       #ccc ${((values[0] - 20) / 180) * 100}%
//                     )`,
//                   }}
//                 >
//                   {children}
//                 </div>
//               )}
//               renderThumb={({ props }) => (
//                 <div
//                   {...props}
//                   style={{
//                     ...props.style,
//                     height: "25px",
//                     width: "25px",
//                     backgroundColor: "#ebf0ec",
//                     border: "2px solid black",
//                     borderRadius: "50%",
//                   }}
//                 />
//               )}
//             />
//             <div className="price-range">
//               <span>${values[0]}</span> - <span>$200</span>
//             </div>
//           </div>

//           {/* Material Filter */}
//           <div className="filter-group">
//             <h3>Material</h3>
//             <div>
//               <input type="checkbox" id="Ceramic" />
//               <label htmlFor="Ceramic">Ceramic</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Porcelain" />
//               <label htmlFor="Porcelain">Porcelain</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Glass" />
//               <label htmlFor="Glass">Glass</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Stoneware" />
//               <label htmlFor="Stoneware">Stoneware</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Earthenware" />
//               <label htmlFor="Earthenware">Earthenware</label>
//             </div>
//           </div>

//           {/* Color Filter */}
//           <div className="filter-group">
//             <h3>Color</h3>
//             <div>
//               <input type="checkbox" id="White" />
//               <label htmlFor="White">White</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Black" />
//               <label htmlFor="Black">Black</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Blue" />
//               <label htmlFor="Blue">Blue</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Green" />
//               <label htmlFor="Green">Green</label>
//             </div>
//             <div>
//               <input type="checkbox" id="NaturalBeige" />
//               <label htmlFor="NaturalBeige">Natural/Beige</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Multicolor" />
//               <label htmlFor="Multicolor">Multicolor</label>
//             </div>
//           </div>

//           {/* Size Filter */}
//           <div className="filter-group">
//             <h3>Size</h3>
//             <div>
//               <input type="checkbox" id="Small" />
//               <label htmlFor="Small">Small (Under 10 inches)</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Medium" />
//               <label htmlFor="Medium">Medium (10 - 20 inches)</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Large" />
//               <label htmlFor="Large">Large (Over 20 inches)</label>
//             </div>
//           </div>

//           {/* Style/Design Filter */}
//           <div className="filter-group">
//             <h3>Style</h3>
//             <div>
//               <input type="checkbox" id="Minimalist" />
//               <label htmlFor="Minimalist">Minimalist</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Modern" />
//               <label htmlFor="Modern">Modern</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Rustic" />
//               <label htmlFor="Rustic">Rustic</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Vintage" />
//               <label htmlFor="Vintage">Vintage</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Bohemian" />
//               <label htmlFor="Bohemian">Bohemian</label>
//             </div>
//           </div>

//           {/* Shape Filter */}
//           <div className="filter-group">
//             <h3>Shape</h3>
//             <div>
//               <input type="checkbox" id="Round" />
//               <label htmlFor="Round">Round</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Cylindrical" />
//               <label htmlFor="Cylindrical">Cylindrical</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Square" />
//               <label htmlFor="Square">Square</label>
//             </div>
//             <div>
//               <input type="checkbox" id="Oval" />
//               <label htmlFor="Oval">Oval</label>
//             </div>
//             <div>
//               <input type="checkbox" id="AbstractGeometric" />
//               <label htmlFor="AbstractGeometric">Abstract/Geometric</label>
//             </div>
//           </div>

//           {/* Availability Filter */}
//           <div className="filter-group">
//             <h3>Availability</h3>
//             <div>
//               <input type="checkbox" id="InStock" />
//               <label htmlFor="InStock">In Stock</label>
//             </div>
//             <div>
//               <input type="checkbox" id="PreOrder" />
//               <label htmlFor="PreOrder">Pre-Order</label>
//             </div>
//             <div>
//               <input type="checkbox" id="OutOfStock" />
//               <label htmlFor="OutOfStock">Out of Stock</label>
//             </div>
//           </div>
//         </div>

//         <div className="products-container">
//           <div className="products-card-container">
//             {products.map((item) => (
//               <div className="card" key={item?.id}>
//                 {" "}
//                 <div className="card-img">
//                   <img src={`../../${item?.img}`} alt={item?.name} />
//                   <div className="add-to-cart-box">
//                     {" "}
//                     <button>Add to cart</button>{" "}
//                   </div>{" "}
//                 </div>{" "}
//                 <div className="product-info">
//                   {" "}
//                   <div className="info-top">
//                     {" "}
//                     <h4>{item?.name}</h4>{" "}
//                     <div className="rating">
//                       {" "}
//                       <h4>{item?.reviews}</h4> <FaStar className="icon" />{" "}
//                     </div>{" "}
//                   </div>{" "}
//                   <div className="price-box">
//                     {" "}
//                     <h4>${item?.currPrice}</h4>{" "}
//                     <h4 className="prev-price">${item?.prevPrice}</h4>{" "}
//                   </div>{" "}
//                 </div>{" "}
//               </div>
//             ))}{" "}
//           </div>

//           {/* Pagination Controls */}
//           <div className="pagination">
//             <button className="prev">Previous</button>
//             {[1, 2, 3, 4, 5].map((page) => (
//               <button key={page} className="page-number">
//                 {page}
//               </button>
//             ))}
//             <button className="next">Next</button>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default ShopPage;

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Range } from "react-range";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import productsData from "../../data/products.json";
import "./Shop.css";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([20]);
  const [material, setMaterial] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [style, setStyle] = useState([]);
  const [shape, setShape] = useState([]);
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
    setLoading(false);
  }, []);

  useEffect(() => {
    // Filtering logic
    const filtered = products.filter((product) => {
      const matchesPrice =
        product.currPrice >= priceRange[0] && product.currPrice <= 200;
      const matchesMaterial =
        material.length === 0 || material.includes(product.material);
      const matchesColor = color.length === 0 || color.includes(product.color);
      const matchesSize = size.length === 0 || size.includes(product.size);
      const matchesStyle = style.length === 0 || style.includes(product.style);
      const matchesShape = shape.length === 0 || shape.includes(product.shape);
      const matchesAvailability =
        availability.length === 0 ||
        availability.includes(product.availability);

      return (
        matchesPrice &&
        matchesMaterial &&
        matchesColor &&
        matchesSize &&
        matchesStyle &&
        matchesShape &&
        matchesAvailability
      );
    });

    setFilteredProducts(filtered);
  }, [priceRange, material, color, size, style, shape, availability, products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleCheckboxChange = (setState, value) => {
    setState((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  return (
    <>
      <Navbar />

      <div className="shop-container container">
        <div className="filter-container">
          <h2>Filters</h2>

          {/* Price Range Filter */}
          <div className="filter-group">
            <h3>Price Range</h3>
            <Range
              step={10}
              min={20}
              max={200}
              values={priceRange}
              onChange={(values) => setPriceRange(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "12px",
                    width: "100%",
                    borderRadius: "999px",
                    background: `linear-gradient(
                      to right,
                      black ${((priceRange[0] - 20) / 180) * 100}%,
                      #ccc ${((priceRange[0] - 20) / 180) * 100}%
                    )`,
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "25px",
                    width: "25px",
                    backgroundColor: "#ebf0ec",
                    border: "2px solid black",
                    borderRadius: "50%",
                  }}
                />
              )}
            />
            <div className="price-range">
              <span>${priceRange[0]}</span> - <span>$200</span>
            </div>
          </div>

          {/* Material Filter */}
          <div className="filter-group">
            <h3>Material</h3>
            {["Ceramic", "Porcelain", "Glass", "Stoneware", "Earthenware"].map(
              (item) => (
                <div key={item}>
                  <input
                    type="checkbox"
                    id={item}
                    onChange={() => handleCheckboxChange(setMaterial, item)}
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              )
            )}
          </div>

          {/* Color Filter */}
          <div className="filter-group">
            <h3>Color</h3>
            {[
              "White",
              "Black",
              "Blue",
              "Green",
              "NaturalBeige",
              "Multicolor",
            ].map((item) => (
              <div key={item}>
                <input
                  type="checkbox"
                  id={item}
                  onChange={() => handleCheckboxChange(setColor, item)}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>

          {/* Size Filter */}
          <div className="filter-group">
            <h3>Size</h3>
            {["Small", "Medium", "Large"].map((item) => (
              <div key={item}>
                <input
                  type="checkbox"
                  id={item}
                  onChange={() => handleCheckboxChange(setSize, item)}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>

          {/* Style/Design Filter */}
          <div className="filter-group">
            <h3>Style</h3>
            {["Minimalist", "Modern", "Rustic", "Vintage", "Bohemian"].map(
              (item) => (
                <div key={item}>
                  <input
                    type="checkbox"
                    id={item}
                    onChange={() => handleCheckboxChange(setStyle, item)}
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              )
            )}
          </div>

          {/* Shape Filter */}
          <div className="filter-group">
            <h3>Shape</h3>
            {[
              "Round",
              "Cylindrical",
              "Square",
              "Oval",
              "AbstractGeometric",
            ].map((item) => (
              <div key={item}>
                <input
                  type="checkbox"
                  id={item}
                  onChange={() => handleCheckboxChange(setShape, item)}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>

          {/* Availability Filter */}
          <div className="filter-group">
            <h3>Availability</h3>
            {["InStock", "PreOrder", "OutOfStock"].map((item) => (
              <div key={item}>
                <input
                  type="checkbox"
                  id={item}
                  onChange={() => handleCheckboxChange(setAvailability, item)}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="products-container">
          <div className="products-card-container">
            {filteredProducts.map((item) => (
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

          {/* Pagination Controls */}
          <div className="pagination">
            <button className="prev">Previous</button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button key={page} className="page-number">
                {page}
              </button>
            ))}
            <button className="next">Next</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ShopPage;
