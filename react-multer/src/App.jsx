import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}
