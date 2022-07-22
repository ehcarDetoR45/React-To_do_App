import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/about" element={<About />} />
  <Route path="/employees" element={<Employees />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/signup" element={<Signup />} /> */}
    </Routes>
  );
}
