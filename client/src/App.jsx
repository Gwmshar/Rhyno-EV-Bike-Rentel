import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";
import Product3 from "./pages/Product3";
import Compare from "./pages/Compare";
import AboutUs from "./pages/AboutUs";
import PreBook from "./pages/PreBook";
import ContactUs from "./pages/ContactUs";
import Rentels from "./pages/Rentels";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="product1" element={<Product1 />} />
            <Route path="product2" element={<Product2 />} />
            <Route path="product3" element={<Product3 />} />
            <Route path="compare" element={<Compare />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="prebook" element={<PreBook />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="rentels" element={<Rentels />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
