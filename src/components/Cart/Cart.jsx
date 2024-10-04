// import { IoClose } from "react-icons/io5";
// import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
// import { useCart } from "../../contexts/CartContext";
// import img from "../../assets/images/img-1.jpg";
// import { Link, useNavigate } from "react-router-dom";

// import { loadStripe } from "@stripe/stripe-js";

// // Load your Stripe publishable key for test purposes
// const stripePromise = loadStripe(
//   "pk_test_51LlBl5HvjnJNedl9PmiThmazD8fW77hzrV8MKaFwZj360porErcvZeIQKcwqfnJsLdjlFGrAjzBK4JhttkXVOcyU00DzhQ87sM"
// );

// import "./Cart.css";

// const Cart = ({ toggleCart, showCart }) => {
//   const { cartItems, removeFromCart, addToCart } = useCart();

//   // Function to increase quantity
//   const handleIncreaseQuantity = (itemId) => {
//     const item = cartItems.find((item) => item.id === itemId);
//     if (item) {
//       addToCart(item, 1); // Increase quantity by 1
//     }
//   };

//   // Function to decrease quantity
//   const handleDecreaseQuantity = (itemId) => {
//     const item = cartItems.find((item) => item.id === itemId);
//     if (item && item.quantity > 1) {
//       addToCart(item, -1); // Decrease quantity by 1
//     }
//   };

//   // Function to remove an item
//   const handleRemoveItem = (itemId) => {
//     removeFromCart(itemId);
//   };

//   // Calculate total price
//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.prevPrice * item.quantity,
//       0
//     );
//   };

//   const handleCheckout = async () => {
//     const stripe = await stripePromise;

//     // Redirect to Stripe Checkout
//     stripe.redirectToCheckout({
//       lineItems: [
//         {
//           price: "price_1Q1FeiHvjnJNedl9eHEPpxfC", // Replace with your actual price ID
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       successUrl: "http://localhost:5173/payment-success", // URL to redirect after successful payment
//       cancelUrl: "http://localhost:5173/payment-failed", // URL to redirect after canceled payment
//     });
//   };

//   return (
//     <div className={`cart-wrapper ${showCart ? "show-cart" : ""}`}>
//       <div className="cart-container container">
//         {/* Cart Header */}
//         <div className="cart-top">
//           <h2>Your Cart</h2>
//           <button onClick={toggleCart}>
//             <IoClose />
//           </button>
//         </div>

//         {/* Cart Items */}
//         <div className="cart-center-container">
//           {cartItems.length === 0 ? (
//             <div className="cart-empty">
//               <p>Your cart is empty</p>
//             </div>
//           ) : (
//             <div className="cart-list-container">
//               {cartItems.map((item) => (
//                 <div className="cart-center" key={item.id}>
//                   <div className="cart-list">
//                     <div className="list-left">
//                       <img src={item.img || img} alt={item.name} />
//                     </div>

//                     <div className="list-right">
//                       <div className="left-info">
//                         <h3>{item.name}</h3>
//                         <p>Price: ${item.prevPrice.toFixed(2)}</p>
//                       </div>

//                       <div className="right-info">
//                         <button onClick={() => handleDecreaseQuantity(item.id)}>
//                           <FiMinus />
//                         </button>
//                         <span>{item.quantity}</span>
//                         <button onClick={() => handleIncreaseQuantity(item.id)}>
//                           <FiPlus />
//                         </button>
//                       </div>
//                     </div>
//                     <button
//                       className="remove-btn"
//                       onClick={() => handleRemoveItem(item.id)}
//                     >
//                       <FiTrash2 />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Cart Summary */}
//           <div className="cart-summary-container">
//             <h3>Order Summary</h3>
//             <div className="cart-summary">
//               <p>
//                 <span>Subtotal</span>{" "}
//                 <span>${calculateTotal().toFixed(2)}</span>
//               </p>
//               <p>
//                 <span>Shipping</span> <span>Free</span>
//               </p>
//               <p>
//                 <span>Discount</span> <span>$0.00</span>
//               </p>
//               <div className="divider"></div>
//               <p>
//                 <span>Total</span> <span>${calculateTotal().toFixed(2)}</span>
//               </p>
//               {/* <button className="checkout-btn">Proceed to Checkout</button> */}

//               {/* <Link to="/checkout"> */}
//               <button className="checkout-btn" onClick={handleCheckout}>
//                 Proceed to Checkout
//               </button>
//               {/* </Link> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";
import img from "../../assets/images/img-1.jpg";
import { loadStripe } from "@stripe/stripe-js";
import BillingModal from "../BillingModal/BillingModal"; // Import BillingModal component
import "./Cart.css";

// Load your Stripe publishable key
const stripePromise = loadStripe(
  "pk_test_51LlBl5HvjnJNedl9PmiThmazD8fW77hzrV8MKaFwZj360porErcvZeIQKcwqfnJsLdjlFGrAjzBK4JhttkXVOcyU00DzhQ87sM"
);

const Cart = ({ toggleCart, showCart }) => {
  const { cartItems, removeFromCart, addToCart } = useCart();
  const [showBillingModal, setShowBillingModal] = useState(false); // Modal state for billing

  console.log("cartItems", cartItems);

  // Toggle the modal
  const toggleBillingModal = () => setShowBillingModal(!showBillingModal);

  // Function to handle checkout
  const handleCheckout = async (billingDetails) => {
    const stripe = await stripePromise;

    // Redirect to Stripe Checkout with the line items and billing details
    stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1Q1FeiHvjnJNedl9eHEPpxfC", // Replace with your actual price ID
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "http://localhost:5173/payment-success", // Success URL
      cancelUrl: "http://localhost:5173/payment-failed", // Cancel URL
      customerEmail: billingDetails.email, // Pass billing email to Stripe
      // Add additional billing details to Stripe as needed
    });
  };

  // Function to increase quantity
  const handleIncreaseQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      addToCart(item, 1); // Increase quantity by 1
    }
  };

  // Function to decrease quantity
  const handleDecreaseQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      addToCart(item, -1); // Decrease quantity by 1
    }
  };

  // Function to remove an item
  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  // Function to calculate total
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.currPrice * item.quantity,
      0
    );
  };

  return (
    <div className={`cart-wrapper ${showCart ? "show-cart" : ""}`}>
      <div className="cart-container container">
        <div className="cart-top">
          <h2>Your Cart</h2>
          <button onClick={toggleCart}>
            <IoClose />
          </button>
        </div>

        {/* Cart Items */}
        <div className="cart-center-container">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="cart-list-container">
              {cartItems.map((item) => (
                <div className="cart-center" key={item.id}>
                  <div className="cart-list">
                    <div className="list-left">
                      <img src={item.img || img} alt={item.name} />
                    </div>
                    <div className="list-right">
                      <div className="left-info">
                        <h3>{item.name}</h3>
                        <p>Price: ${item.currPrice.toFixed(2)}</p>
                      </div>
                      <div className="right-info">
                        <button onClick={() => handleDecreaseQuantity(item.id)}>
                          <FiMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleIncreaseQuantity(item.id)}>
                          <FiPlus />
                        </button>
                      </div>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Cart Summary */}
          <div className="cart-summary-container">
            <h3>Order Summary</h3>
            <div className="cart-summary">
              <p>
                <span>Subtotal</span>{" "}
                <span>${calculateTotal().toFixed(2)}</span>
              </p>
              <p>
                <span>Shipping</span> <span>Free</span>
              </p>
              <p>
                <span>Discount</span> <span>$0.00</span>
              </p>
              <div className="divider"></div>
              <p>
                <span>Total</span> <span>${calculateTotal().toFixed(2)}</span>
              </p>

              {/* Proceed to Checkout button to open Billing Modal */}
              <button
                className={`checkout-btn ${
                  cartItems.length === 0 ? "disabled" : ""
                }`}
                onClick={toggleBillingModal}
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render BillingModal when showBillingModal is true */}
      {showBillingModal && (
        <BillingModal onClose={toggleBillingModal} onConfirm={handleCheckout} />
      )}
    </div>
  );
};

export default Cart;
