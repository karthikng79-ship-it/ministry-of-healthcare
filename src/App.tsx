import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import DataCenter from './components/DataCenter';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <DataCenter />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
