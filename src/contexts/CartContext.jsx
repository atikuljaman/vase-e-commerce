import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false); // State for cart modal visibility

  // Function to toggle cart modal visibility
  const toggleCart = () => {
    setShowCart(!showCart);
    console.log("showCart", showCart);
  };

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
      value={{
        addToCart,
        removeFromCart,
        getCartItems,
        cartItems,
        showCart, // Expose showCart state
        toggleCart, // Expose toggleCart function
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the CartContext in components
export const useCart = () => useContext(CartContext);
