import HomePage from "./componentes/Home/HomePage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Home/Navbar";
import AboutPage from "./componentes/ABout.jsx/AboutPage";
import ContactPage from "./componentes/ContactUs/ContactPage";
//import './App.css'
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/ABOUT" element={<AboutPage/>}/>
          <Route path="/CONTACT US" element={<ContactPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
