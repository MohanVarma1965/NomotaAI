import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ScrollToAnchor } from "./components/Effects";

const Main = lazy(() => import("./components/Main"));
const Products = lazy(() => import("./components/Products"));

const Staking = lazy(() => import("./components/Products/Staking"));
const ChatBot = lazy(() => import("./components/Products/ChatBot"));
const MusicGeneration = lazy(() => import("./components/Products/MusicGeneration"));
const VoiceGeneration = lazy(() => import("./components/Products/VoiceGeneration"));
const ImageGeneration = lazy(() => import("./components/Products/ImageGeneration"));
const Marketplace = lazy(() => import("./components/Products/Marketplace"));

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/staking" element={<Staking />} />
          <Route path="/products/chatbot" element={<ChatBot />} />
          <Route path="/products/voice-synthesis" element={<VoiceGeneration />} />
          <Route path="/products/music-generation" element={<MusicGeneration />} />
          <Route path="/products/image-generation" element={<ImageGeneration />} />
          <Route path="/products/marketplace" element={<Marketplace />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
