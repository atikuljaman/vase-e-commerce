import React, { useEffect, useState } from "react";
import img_1 from "../../assets/images/img-1.jpg";
import img_2 from "../../assets/images/img-2.jpg";
import img_3 from "../../assets/images/img-3.jpg";
import { MdOutlineSupportAgent } from "react-icons/md";
import {
  FaTruck,
  FaMoneyBillTransfer,
  FaAddressCard,
  FaCcStripe,
} from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

import "./PaymentSuccessPage.css";

const PaymentSuccess = () => {
  const [billingInfo, setBillingInfo] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);

  useEffect(() => {
    // Retrieve billing details from localStorage
    const savedBillingInfo = JSON.parse(localStorage.getItem("billingDetails"));
    const savedShippingInfo = JSON.parse(
      localStorage.getItem("shippingDetails")
    );

    if (savedBillingInfo && savedShippingInfo) {
      setBillingInfo(savedBillingInfo);
      setShippingInfo(savedShippingInfo);
    }
  }, []);

  console.log("billingInfo", billingInfo);
  console.log("shippingInfo", shippingInfo);

  const order = {
    orderNumber: "12345",
    total: 99.99,
    estimatedDelivery: "September 30, 2024",
    items: [
      {
        id: 1,
        name: "Elysian Vase",
        price: 29.99,
        image: img_1,
      },
      {
        id: 2,
        name: "Zenith Vase",
        price: 49.99,
        image: img_2,
      },
      {
        id: 3,
        name: "Aurora Vase",
        price: 19.99,
        image: img_3,
      },
    ],
  };

  return (
    <div className="payment-success container">
      <div className="payment-success-left">
        <div className="header">
          <div className="circle">
            <FaCheck />
          </div>
          <div>
            <h1>Thank You for Your Purchase!</h1>
            <p>Your order has been successfully placed.</p>
          </div>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <ul className="order-list">
            {order.items.map((item) => (
              <li key={item.id} className="order-item">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-details">
          <p className="total">
            Total: <strong>${order.total.toFixed(2)}</strong>
          </p>
          <p>
            Order Number: <strong>{order.orderNumber}</strong>
          </p>
          <p>
            Estimated Delivery: <strong>{order.estimatedDelivery}</strong>
          </p>

          <div className="divider"></div>

          {/* <p className="message">
            <div className="circle">
              <MdOutlineSupportAgent />
            </div>{" "}
            If you have any questions, please contact our support team.
          </p> */}
        </div>

        {/* <button
          className="continue-button"
          onClick={() => (window.location.href = "/shop")}
        >
          Continue Shopping
        </button> */}
      </div>

      <div className="payment-success-right">
        <div className="right-box">
          <div className="circle">
            <FaTruck />
          </div>
          <div>
            <h2>Shipping Address:</h2>
            <p>
              {shippingInfo?.address}, {shippingInfo?.city},{" "}
              {shippingInfo?.state}, {shippingInfo?.zip}{" "}
            </p>
            {/* <p>1234 Serenity Lane, Zen City, ZC 56789</p> */}
          </div>
        </div>
        <div className="right-box">
          <div className="circle">
            <FaMoneyBillTransfer />
          </div>
          <div>
            <h2>Billing Address:</h2>
            <p>
              {billingInfo?.address}, {billingInfo?.city}, {billingInfo?.state},{" "}
              {billingInfo?.zip}
            </p>
            {/* <p>1234 Serenity Lane, Zen City, ZC 56789</p> */}
          </div>
        </div>
        <div className="right-box">
          <div className="circle">
            <FaAddressCard />
          </div>
          <div>
            <h2>Contact Information:</h2>
            <p>Email: {billingInfo?.email}</p>
            <p>Phone: {billingInfo?.phone}</p>
          </div>
        </div>
        <div className="right-box">
          <div className="circle">
            <FaCcStripe />
          </div>
          <div>
            <h2>Payment Method:</h2>
            <p>Visa ending in 1234</p>
          </div>
        </div>
        <p className="message">
          <div className="circle">
            <MdOutlineSupportAgent />
          </div>{" "}
          If you have any questions, please contact our support team.
        </p>
        <button
          className="continue-button"
          onClick={() => (window.location.href = "/shop")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
