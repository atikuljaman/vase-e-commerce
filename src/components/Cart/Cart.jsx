// import { useState } from "react";
// import { IoClose } from "react-icons/io5";
// import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
// import { useCart } from "../../contexts/CartContext";
// import img from "../../assets/images/img-1.jpg";
// import "./Cart.css";

// const Cart = ({ toggleCart, showCart }) => {
//   const { cartItems, removeFromCart } = useCart(); // Use removeFromCart from context

//   // Function to increase quantity
//   const handleIncreaseQuantity = (itemId) => {
//     // Since you need to increase quantity, use the context's addToCart function
//     const item = cartItems.find((item) => item.id === itemId);
//     if (item) {
//       addToCart(item, item.quantity + 1);
//     }
//   };

//   // Function to decrease quantity
//   const handleDecreaseQuantity = (itemId) => {
//     const item = cartItems.find((item) => item.id === itemId);
//     if (item && item.quantity > 1) {
//       addToCart(item, item.quantity - 1);
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
//               <button className="checkout-btn">Proceed to Checkout</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import { IoClose } from "react-icons/io5";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";
import img from "../../assets/images/img-1.jpg";
import "./Cart.css";

const Cart = ({ toggleCart, showCart }) => {
  const { cartItems, removeFromCart, addToCart } = useCart();

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

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.prevPrice * item.quantity,
      0
    );
  };

  return (
    <div className={`cart-wrapper ${showCart ? "show-cart" : ""}`}>
      <div className="cart-container container">
        {/* Cart Header */}
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
                        <p>Price: ${item.prevPrice.toFixed(2)}</p>
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
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
