// import { Link } from "react-router-dom";
// import { FaXmark } from "react-icons/fa6";
// import "./PaymentFailedPage.css";

// const PaymentFailed = () => {
//   return (
//     <div className="payment-failed-wrapper">
//       <div className="payment-failed-container container">
//         <div className="header">
//           <div className="circle">
//             <FaXmark />
//           </div>
//           <div>
//             <h1>Payment Failed</h1>
//             <p>Oops! Something went wrong with your payment.</p>
//           </div>
//         </div>

//         <p className="message">
//           Please review your payment details and try again.
//         </p>

//         <div className="failed-reasons">
//           <h3>Common Reasons for Payment Failure:</h3>
//           <ul>
//             <li>
//               {" "}
//               <span>01.</span> Insufficient funds
//             </li>
//             <li>
//               {" "}
//               <span>02.</span> Incorrect card details
//             </li>
//             <li>
//               {" "}
//               <span>03.</span> Card expiration date has passed
//             </li>
//             <li>
//               {" "}
//               <span>04.</span> Bank declined the transaction
//             </li>
//           </ul>
//         </div>

//         <div className="divider"></div>

//         <div className="next-steps">
//           <p>
//             If you need assistance, please contact our support team or try the
//             following options:
//           </p>
//           <ul>
//             <li>
//               <span>01.</span>
//               <Link to="/cart">Review your cart</Link> and try checking out
//               again.
//             </li>
//             <li>
//               <span>02.</span>
//               <Link to="/contact">Contact support</Link> for help.
//             </li>
//             <li>
//               <span>03.</span>
//               <Link to="/shop">Continue shopping</Link> for other products.
//             </li>
//           </ul>
//         </div>

//         <button
//           onClick={() => window.location.reload()}
//           className="retry-payment-btn"
//         >
//           Retry Payment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentFailed;

import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { loadStripe } from "@stripe/stripe-js"; // Import Stripe
import { useCart } from "../../contexts/CartContext";
import "./PaymentFailedPage.css";
import Cart from "../../components/Cart/Cart";
// import { Cart } from "../../components/index";

// Load your Stripe publishable key
const stripePromise = loadStripe(
  "pk_test_51LlBl5HvjnJNedl9PmiThmazD8fW77hzrV8MKaFwZj360porErcvZeIQKcwqfnJsLdjlFGrAjzBK4JhttkXVOcyU00DzhQ87sM"
);

// Retry payment function
const retryPayment = async () => {
  const stripe = await stripePromise;
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
  });
};

const PaymentFailed = () => {
  const { toggleCart, showCart } = useCart();

  return (
    <>
      <div className="payment-failed-wrapper">
        <div className="payment-failed-container container">
          <div className="header">
            <div className="circle">
              <FaXmark />
            </div>
            <div>
              <h1>Payment Failed</h1>
              <p>Oops! Something went wrong with your payment.</p>
            </div>
          </div>

          <p className="message">
            Please review your payment details and try again.
          </p>

          <div className="failed-reasons">
            <h3>Common Reasons for Payment Failure:</h3>
            <ul>
              <li>
                <span>01.</span> Insufficient funds
              </li>
              <li>
                <span>02.</span> Incorrect card details
              </li>
              <li>
                <span>03.</span> Card expiration date has passed
              </li>
              <li>
                <span>04.</span> Bank declined the transaction
              </li>
            </ul>
          </div>

          <div className="divider"></div>

          <div className="next-steps">
            <p>
              If you need assistance, please contact our support team or try the
              following options:
            </p>
            <ul>
              <li>
                <span>01.</span>
                <button onClick={toggleCart}>Review your cart</button> and try
                checking out again.
              </li>
              <li>
                <span>02.</span>
                <Link to="/contact">Contact support</Link> for help.
              </li>
              <li>
                <span>03.</span>
                <Link to="/shop">Continue shopping</Link> for other products.
              </li>
            </ul>
          </div>

          {/* Retry Payment Button */}
          <button onClick={retryPayment} className="retry-payment-btn">
            Retry Payment
          </button>
        </div>
      </div>

      <Cart toggleCart={toggleCart} showCart={showCart} />
    </>
  );
};

export default PaymentFailed;
