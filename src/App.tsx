import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./components/Home"));
// const About = lazy(() => import("./components/About"));
// const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
