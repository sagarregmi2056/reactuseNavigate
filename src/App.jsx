import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import PageNotFound from "./pages/PageNotFound";
import PageBroken from "./pages/PageBroken";
import College from "./pages/College";
import Campus from "./pages/Campus";
import Product from "./pages/Product";
import Tshirt from "./pages/Tshirt";
import Pant from "./pages/Pant";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Product />}>
          <Route index element={<Tshirt />} />
          <Route path="tshirt" element={<Tshirt />} />
          <Route path="pant" element={<Pant />} />
        </Route>

        <Route path="*" element={<PageBroken />} />
      </Routes>
    </>
  );
}

export default App;
