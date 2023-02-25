import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import BlogsHomepage from "./components/BlogsHomepage";
import Gallary from "./components/Gallary";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blogs" element={<BlogsHomepage />} />
          <Route exact path="/gallary" element={<Gallary />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
