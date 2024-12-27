
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Navbar from './Components/Navbar';
import Features from './pages/Features';
import Review from './pages/Review';


const App = () => (
<Router>
  <Navbar/>
    <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path =".features" element={<Features/>}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/review" elemnt={<Review/>}/>
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
    </Router>
    

);

export default App;