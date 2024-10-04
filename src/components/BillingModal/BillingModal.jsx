// import React, { useState } from "react";
// import { IoClose } from "react-icons/io5";
// import "./BillingModal.css"; // CSS for modal styling

// const BillingModal = ({ onClose, onConfirm }) => {
//   const [billingDetails, setBillingDetails] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     country: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBillingDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     onConfirm(billingDetails);
//     onClose(); // Close modal after submitting
//   };

//   return (
//     <div className="billing-modal">
//       <div className="modal-content">
//         <button className="close-btn" onClick={onClose}>
//           <IoClose />
//         </button>

//         <div className="modal-header">
//           <h2>Purchase Information</h2>
//           {/* <p>Please provide details to complete your purchase.</p> */}
//         </div>

//         <div className="billing-box">
//           <h3>Billing Address:</h3>

//           <div className="input-group">
//             <div className="input-box">
//               <label>Full Name</label>
//               <input
//                 name="fullName"
//                 value={billingDetails.fullName}
//                 onChange={handleChange}
//                 placeholder="Full name"
//               />
//             </div>

//             <div className="input-box">
//               <label>Email</label>
//               <input
//                 name="email"
//                 value={billingDetails.email}
//                 onChange={handleChange}
//                 placeholder="Email address"
//               />
//             </div>
//           </div>

//           <div className="input-group">
//             <div className="input-box">
//               <label>Phone</label>
//               <input
//                 name="phone"
//                 value={billingDetails.phone}
//                 onChange={handleChange}
//                 placeholder="Phone number"
//               />
//             </div>
//             <div className="input-box">
//               <label>Address</label>
//               <input
//                 name="address"
//                 value={billingDetails.address}
//                 onChange={handleChange}
//                 placeholder="Street address"
//               />
//             </div>
//           </div>

//           <div className="input-group">
//             <div className="input-box">
//               <label>City</label>
//               <input
//                 name="city"
//                 value={billingDetails.city}
//                 onChange={handleChange}
//                 placeholder="City"
//               />
//             </div>
//             <div className="input-box">
//               <label>State</label>
//               <input
//                 name="state"
//                 value={billingDetails.state}
//                 onChange={handleChange}
//                 placeholder="State"
//               />
//             </div>
//           </div>

//           <div className="input-group">
//             <div className="input-box">
//               <label>Postal Code</label>
//               <input
//                 name="zip"
//                 value={billingDetails.zip}
//                 onChange={handleChange}
//                 placeholder="Postal code"
//               />
//             </div>
//           </div>
//         </div>

//         <br />

//         <div className="billing-box">
//           <h3>Shipping Address:</h3>

//           <div className="input-group">
//             <div className="input-box">
//               <label>Full Name</label>
//               <input
//                 name="fullName"
//                 value={billingDetails.fullName}
//                 onChange={handleChange}
//                 placeholder="Full name"
//               />
//             </div>

//             <div className="input-box">
//               <label>Email</label>
//               <input
//                 name="email"
//                 value={billingDetails.email}
//                 onChange={handleChange}
//                 placeholder="Email address"
//               />
//             </div>
//           </div>

//           <div className="input-group">
//             <div className="input-box">
//               <label>Phone</label>
//               <input
//                 name="phone"
//                 value={billingDetails.phone}
//                 onChange={handleChange}
//                 placeholder="Phone number"
//               />
//             </div>
//             <div className="input-box">
//               <label>Address</label>
//               <input
//                 name="address"
//                 value={billingDetails.address}
//                 onChange={handleChange}
//                 placeholder="Street address"
//               />
//             </div>
//           </div>

//           <div className="input-group">
//             <div className="input-box">
//               <label>City</label>
//               <input
//                 name="city"
//                 value={billingDetails.city}
//                 onChange={handleChange}
//                 placeholder="City"
//               />
//             </div>
//             <div className="input-box">
//               <label>State</label>
//               <input
//                 name="state"
//                 value={billingDetails.state}
//                 onChange={handleChange}
//                 placeholder="State"
//               />
//             </div>
//           </div>

//           <div className="input-group">
//             <div className="input-box">
//               <label>Postal Code</label>
//               <input
//                 name="zip"
//                 value={billingDetails.zip}
//                 onChange={handleChange}
//                 placeholder="Postal code"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="btn-box">
//           <button onClick={handleSubmit}>Pay Now</button>
//           <button onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BillingModal;

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./BillingModal.css"; // CSS for modal styling

const BillingModal = ({ onClose, onConfirm }) => {
  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    billing: {},
    shipping: {},
  });

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    if (section === "billing") {
      setBillingDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    } else if (section === "shipping") {
      setShippingDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  // Validation logic for both billing and shipping
  const validate = (details, section) => {
    const newErrors = {};

    if (!details.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!details.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(details.email)) {
      newErrors.email = "Enter a valid email";
    }

    const phonePattern = /^[0-9]{10,15}$/;
    if (!details.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phonePattern.test(details.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!details.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!details.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!details.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!details.zip.trim()) {
      newErrors.zip = "Postal code is required";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [section]: newErrors,
    }));

    return Object.keys(newErrors).length === 0; // return true if no errors
  };

  const handleSubmit = () => {
    const isBillingValid = validate(billingDetails, "billing");
    const isShippingValid = validate(shippingDetails, "shipping");

    if (isBillingValid && isShippingValid) {
      // Save billing details to localStorage
      localStorage.setItem("billingDetails", JSON.stringify(billingDetails));

      // Save shipping details to localStorage
      localStorage.setItem("shippingDetails", JSON.stringify(shippingDetails));

      // Combine billing and shipping details for the final submission
      onConfirm({ billingDetails, shippingDetails });
      onClose(); // Close modal after successful submission
    }
  };

  return (
    <div className="billing-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <IoClose />
        </button>

        <div className="modal-header">
          <h2>Purchase Information</h2>
        </div>

        <div className="modal-body">
          {/* Billing Address Section */}
          <div className="billing-box">
            <h3>Billing Address:</h3>

            <div className="input-group">
              <div className="input-box">
                <label>Full Name</label>
                <input
                  name="fullName"
                  value={billingDetails.fullName}
                  onChange={(e) => handleChange(e, "billing")}
                  placeholder="Full name"
                />
                {errors.billing.fullName && (
                  <p className="error-text">{errors.billing.fullName}</p>
                )}
              </div>

              <div className="input-box">
                <label>Email</label>
                <input
                  name="email"
                  value={billingDetails.email}
                  onChange={(e) => handleChange(e, "billing")}
                  placeholder="Email address"
                />
                {errors.billing.email && (
                  <p className="error-text">{errors.billing.email}</p>
                )}
              </div>
            </div>

            <div className="input-group">
              <div className="input-box">
                <label>Phone</label>
                <input
                  name="phone"
                  value={billingDetails.phone}
                  onChange={(e) => handleChange(e, "billing")}
                  placeholder="Phone number"
                />
                {errors.billing.phone && (
                  <p className="error-text">{errors.billing.phone}</p>
                )}
              </div>

              <div className="input-box">
                <label>Address</label>
                <input
                  name="address"
                  value={billingDetails.address}
                  onChange={(e) => handleChange(e, "billing")}
                  placeholder="Street address"
                />
                {errors.billing.address && (
                  <p className="error-text">{errors.billing.address}</p>
                )}
              </div>
            </div>

            <div className="input-group">
              <div className="input-box">
                <label>City</label>
                <input
                  name="city"
                  value={billingDetails.city}
                  onChange={(e) => handleChange(e, "billing")}
                  placeholder="City"
                />
                {errors.billing.city && (
                  <p className="error-text">{errors.billing.city}</p>
                )}
              </div>

              <div className="input-box">
                <label>State</label>
                <input
                  name="state"
                  value={billingDetails.state}
                  onChange={(e) => handleChange(e, "billing")}
                  placeholder="State"
                />
                {errors.billing.state && (
                  <p className="error-text">{errors.billing.state}</p>
                )}
              </div>
            </div>

            <div className="input-group">
              <div className="input-box">
                <label>Postal Code</label>
                <input
                  name="zip"
                  value={billingDetails.zip}
                  onChange={(e) => handleChange(e, "billing")}
                  placeholder="Postal code"
                />
                {errors.billing.zip && (
                  <p className="error-text">{errors.billing.zip}</p>
                )}
              </div>
            </div>
          </div>

          {/* Shipping Address Section */}
          <div className="billing-box">
            <h3>Shipping Address:</h3>

            <div className="input-group">
              <div className="input-box">
                <label>Full Name</label>
                <input
                  name="fullName"
                  value={shippingDetails.fullName}
                  onChange={(e) => handleChange(e, "shipping")}
                  placeholder="Full name"
                />
                {errors.shipping.fullName && (
                  <p className="error-text">{errors.shipping.fullName}</p>
                )}
              </div>

              <div className="input-box">
                <label>Email</label>
                <input
                  name="email"
                  value={shippingDetails.email}
                  onChange={(e) => handleChange(e, "shipping")}
                  placeholder="Email address"
                />
                {errors.shipping.email && (
                  <p className="error-text">{errors.shipping.email}</p>
                )}
              </div>
            </div>

            <div className="input-group">
              <div className="input-box">
                <label>Phone</label>
                <input
                  name="phone"
                  value={shippingDetails.phone}
                  onChange={(e) => handleChange(e, "shipping")}
                  placeholder="Phone number"
                />
                {errors.shipping.phone && (
                  <p className="error-text">{errors.shipping.phone}</p>
                )}
              </div>

              <div className="input-box">
                <label>Address</label>
                <input
                  name="address"
                  value={shippingDetails.address}
                  onChange={(e) => handleChange(e, "shipping")}
                  placeholder="Street address"
                />
                {errors.shipping.address && (
                  <p className="error-text">{errors.shipping.address}</p>
                )}
              </div>
            </div>

            <div className="input-group">
              <div className="input-box">
                <label>City</label>
                <input
                  name="city"
                  value={shippingDetails.city}
                  onChange={(e) => handleChange(e, "shipping")}
                  placeholder="City"
                />
                {errors.shipping.city && (
                  <p className="error-text">{errors.shipping.city}</p>
                )}
              </div>

              <div className="input-box">
                <label>State</label>
                <input
                  name="state"
                  value={shippingDetails.state}
                  onChange={(e) => handleChange(e, "shipping")}
                  placeholder="State"
                />
                {errors.shipping.state && (
                  <p className="error-text">{errors.shipping.state}</p>
                )}
              </div>
            </div>

            <div className="input-group">
              <div className="input-box">
                <label>Postal Code</label>
                <input
                  name="zip"
                  value={shippingDetails.zip}
                  onChange={(e) => handleChange(e, "shipping")}
                  placeholder="Postal code"
                />
                {errors.shipping.zip && (
                  <p className="error-text">{errors.shipping.zip}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="btn-box">
          <button onClick={handleSubmit}>Pay Now</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BillingModal;
