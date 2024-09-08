// import React, { createContext, useState, useContext } from "react";

// // Create a context for the cart
// const CartContext = createContext();

// // Create a provider component
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Add an item to the cart
//   const addToCart = (product, quantity) => {
//     setCartItems((prevItems) => [...prevItems, { ...product, quantity }]);
//   };

//   // Remove an item from the cart
//   const removeFromCart = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use the CartContext
// export const useCart = () => useContext(CartContext);

// src/contexts/CartContext.jsx

import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add or update an item in the cart
  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // Remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Get cart items
  const getCartItems = () => cartItems;

  return (
    <CartContext.Provider
      value={{ addToCart, removeFromCart, getCartItems, cartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
