import { motion } from 'motion/react';
import { Menu, X, Activity } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Activity size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">
              MinistryHealth
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 uppercase tracking-wider">
            <a href="#services" className="hover:text-blue-600 transition-colors">Solutions</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">Mission</a>
            <a href="#teams" className="hover:text-blue-600 transition-colors">Teams</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-all text-xs uppercase tracking-widest shadow-lg shadow-slate-200">
              Client Portal
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 py-6 flex flex-col gap-4 text-slate-600"
        >
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#teams" onClick={() => setIsOpen(false)}>Our Teams</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Support</a>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">Get Started</button>
        </motion.div>
      )}
    </nav>
  );
}
