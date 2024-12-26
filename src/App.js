
import './App.css';
import Banner from './Components/Banner';
import Gallery from './pages/Gallery';
import Navbar from './Components/Navbar';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Footer from './pages/Footer';
import Review from './pages/Review';
import Layout from './Layout/Layout';
const App = () => (
  <Layout>
    <Navbar />
    <Banner />
    <Features />
    <About />
    <Gallery />
    <Achievements />
    <Review />
    <Contact />
    <Footer />
  </Layout>
);

export default App;