import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Main = lazy(() => import("./components/Main"));
const Products = lazy(() => import("./components/Products"));

const Staking = lazy(() => import("./components/Products/Staking"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/staking" element={<Staking />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
