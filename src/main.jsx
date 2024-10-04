import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import "./index.css";
import {
  HomePage,
  ShopPage,
  ProductDetailPage,
  AboutPage,
  ContactPage,
  CheckoutPage,
  PaymentSuccessPage,
  PaymentFailedPage,
} from "./pages/index.js";
import { CartProvider } from "./contexts/CartContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout as the wrapper
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/product/:id", // Dynamic route for product detail page
        element: <ProductDetailPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/checkout", // Add the checkout route
        element: <CheckoutPage />, // Render CheckoutPage here
      },
      {
        path: "/payment-success", // Add the checkout route
        element: <PaymentSuccessPage />, // Render CheckoutPage here
      },
      {
        path: "/payment-failed", // Add the checkout route
        element: <PaymentFailedPage />, // Render CheckoutPage here
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
