
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Accueil from "./pages/Accueil";
import EstimeDeSoi from "./pages/EstimeDeSoi";
import ConfianceEnSoi from "./pages/ConfianceEnSoi";
import Motivation from "./pages/Motivation";
import DeveloppementPersonnel from "./pages/DeveloppementPersonnel";
import Blog from "./pages/Blog";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/estime-de-soi" element={<EstimeDeSoi />} />
          <Route path="/confiance-en-soi" element={<ConfianceEnSoi />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/developpement-personnel" element={<DeveloppementPersonnel />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
