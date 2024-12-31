import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import Footer from "./components/Footer";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from "./components/Navbar";


function App() {
  return (  
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>  
      <Footer/>
    </div>
  </BrowserRouter>
  );
}
export default App;