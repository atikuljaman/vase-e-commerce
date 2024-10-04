import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./CheckoutForm.css"; // Optional, for your own styling

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      return;
    }

    // Create a payment method object
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      // Handle successful payment (this is where you'd connect to your backend)
      console.log("Payment Method", paymentMethod);
      setError(null);
      setSuccess(true);
      setProcessing(false);
    }
  };

  return (
    <div className="checkout-form-container">
      <h2>Checkout</h2>
      {success ? (
        <div className="payment-success">
          <h3>Payment Successful!</h3>
          <p>Thank you for your purchase.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <label htmlFor="card-element">Card Details</label>
          <CardElement id="card-element" />

          {error && <div className="card-error">{error}</div>}

          <button
            type="submit"
            className="pay-button"
            disabled={!stripe || processing}
          >
            {processing ? "Processing..." : "Pay Now"}
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
