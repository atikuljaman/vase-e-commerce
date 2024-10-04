// // CheckoutPage.jsx
// import React from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { CheckoutForm } from "../../components";

// // Initialize Stripe with your publishable key
// const stripePromise = loadStripe(
//   "pk_test_51LlBl5HvjnJNedl9PmiThmazD8fW77hzrV8MKaFwZj360porErcvZeIQKcwqfnJsLdjlFGrAjzBK4JhttkXVOcyU00DzhQ87sM"
// );

// const CheckoutPage = () => {
//   return (
//     <div className="checkout-page">
//       <Elements stripe={stripePromise}>
//         <CheckoutForm />
//       </Elements>
//     </div>
//   );
// };

// export default CheckoutPage;

import React from "react";
import { loadStripe } from "@stripe/stripe-js";

// Load your Stripe publishable key for test purposes
const stripePromise = loadStripe(
  "pk_test_51LlBl5HvjnJNedl9PmiThmazD8fW77hzrV8MKaFwZj360porErcvZeIQKcwqfnJsLdjlFGrAjzBK4JhttkXVOcyU00DzhQ87sM"
);

const CheckoutPage = () => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Redirect to Stripe Checkout
    stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1Q1FeiHvjnJNedl9eHEPpxfC", // Replace with your actual price ID
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "http://localhost:5173/about", // URL to redirect after successful payment
      cancelUrl: "http://localhost:5173/contact", // URL to redirect after canceled payment
    });
  };

  return (
    <div className="checkout-container">
      <h2>Your Order</h2>
      <p>Total: $65.00</p>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default CheckoutPage;
