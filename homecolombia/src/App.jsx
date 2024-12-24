import './App.css';
import './main.css';
import './Footer/Footer.css';
import { Navbar } from './Navbar/Navbar.jsx';
import { CtMain } from './Ctnmain/CtnMain.jsx';
import { Footer } from './Footer/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contactanos } from "./Pages/contactanos";
import { Proyecto } from "./Pages/proyecto";
import { Lotes } from "./Pages/Lotes.jsx";
import { Aboutus } from './Pages/Aboutus.jsx';
import Sunrise from "./Pages/sunrise.jsx";
import ScrollToTop from './Components/scrollToTop.jsx';  // Aquí importamos con la primera letra mayúscula

export function App() {
  return (
    <Router>
      <ScrollToTop />  // Llamamos al componente con la primera letra en mayúscula
      <div className="Content-page">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<CtMain />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/proyecto" element={<Proyecto />} />
            <Route path="/lotes" element={<Lotes />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/sunrise" element={<Sunrise />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
