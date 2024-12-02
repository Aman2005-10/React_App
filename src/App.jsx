import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Lazy load components
const Header = React.lazy(() => import("./components/Header"));
const Home = React.lazy(() => import("./components/Home"));
const Cart = React.lazy(() => import("./components/Cart"));
const CartItem = React.lazy(() => import("./components/CartItem"));
const Productdetail = React.lazy(() => import("./components/Productdetail"));
const Checkout = React.lazy(() => import("./components/Checkout"));
const NotFound = React.lazy(() => import("./components/NotFound"));


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/:id" element={<CartItem />} />
          <Route path="/products/:id" element={<Productdetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
