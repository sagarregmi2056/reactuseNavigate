import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

import PageBroken from "./pages/PageBroken";

import Product from "./pages/Product";
import Tshirt from "./pages/Tshirt";
import Pant from "./pages/Pant";
import Category from "./pages/Category";
import Male from "./pages/Male";
import Female from "./pages/Female";
import UserDetails from "./pages/UserDetails";
import Results from "./pages/Results";
import Pass from "./pages/Pass";
import Fail from "./pages/Fail";
import Akkar11 from "./pages/Akkar11";
import StudentDetails from "./pages/StudentDetails";
// import Us from "./pages/Us";
import Usestatehook from "./pages/Usestatehook";
import UseEffecthook from "./pages/UseEffecthook";
import UseStateme from "./pages/UseStateme";
import Useobj from "./pages/Useobj";
import UseStateObj from "./UseStateObj";
import GetApi from "./pages/GetApi";
import CompA from "./pages/CompA";
import { createContext } from "react";
import Postdata from "./pages/Postdata";
import Onchangeevent from "./pages/Onchangeevent";
import SendData from "./pages/SendData";
import FetchData from "./pages/FetchData";
import Sonila from "./pages/Sonila";
import Ashok from "./pages/Ashok";
import Tandaidata from "./pages/Tandaidata";

export const nameContext = createContext();

export const paisadeu = createContext();

// context create
// provider sonila bicha ma rakhyarw paisa dina thalxa

function App() {
  return (
    <>
      <Navbar />
      <Usestatehook />

      <paisadeu.Provider value={"50000 rs"}>
        <Sonila />
      </paisadeu.Provider>

      <SendData />

      <Tandaidata />

      <nameContext.Provider value={"sagar"}>
        <CompA />
      </nameContext.Provider>

      {/* <Us /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/contact" element={<Contact />}>
          {/* params in react js */}
          <Route path="user/:id" element={<UserDetails />} />
        </Route>

        <Route path="/services" element={<Services />} />

        <Route path="/category" element={<Category />}>
          <Route index element={<Female />} />

          <Route path="male" element={<Male />} />

          <Route path="female" element={<Female />} />
        </Route>

        <Route path="/products" element={<Product />}>
          {/* index route */}
          <Route index element={<Tshirt />} />
          {/* nested routing */}
          <Route path="tshirtniceasdsa" element={<Tshirt />} />
          <Route path="pant" element={<Pant />} />
        </Route>

        <Route path="*" element={<PageBroken />} />

        <Route path="/results" element={<Results />}>
          <Route index element={<Fail />} />
          <Route path="pass" element={<Pass />} />
          <Route path="fail" element={<Fail />} />
        </Route>

        <Route path="/aakar11" element={<Akkar11 />}>
          <Route path="student/:id" element={<StudentDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
