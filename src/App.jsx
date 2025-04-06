import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Home/Navbar";
import HomePage from "./componentes/Home/HomePage";
import AboutPage from "./componentes/ABout.jsx/AboutPage";
import ContactPage from "./componentes/ContactUs/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
