import './App.css';
import './main.css';
import { Navbar } from './Navbar/Navbar.jsx';
import { CtMain } from './Ctnmain/CtnMain.jsx';
import { Footer } from './Footer/Footer.jsx';

export function App() {
  return (
    <>
      <div className="Content-page">
        <header>
          <Navbar />
        </header>
        <main>
          <CtMain />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );

}
