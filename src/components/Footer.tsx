import { Github, Twitter, Linkedin, Mail, Phone, MapPin, Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Activity size={20} />
            </div>
            <span className="text-xl font-bold">Ministry<span className="text-blue-500">Health</span></span>
          </div>
          <p className="text-sm leading-relaxed">
            Pioneering the digital transformation of public healthcare ministries worldwide. Secure, scalable, and life-saving technology.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><Github size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm font-sans tracking-wide uppercase font-medium">
            <li><a href="#services" className="hover:text-white transition-colors">Digital Services</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Our Mission</a></li>
            <li><a href="#teams" className="hover:text-white transition-colors">Our Expert Teams</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Transparency Portal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm font-sans tracking-wide uppercase font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Security Advisories</a></li>
            <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 shrink-0" />
              <span>Ministry Complex, Tech Row 101, <br />Digital City, HC 55432</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <span>+1 (555) 012-HEALTH</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <span>contact@ministryhealth.gov.it</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-slate-500 font-sans">
        <p>© 2026 MinistryHealth. An official IT Group initiative of the Ministry of Healthcare.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-blue-500">Data Ethics</a>
          <a href="#" className="hover:text-blue-500">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500">System Status</a>
        </div>
      </div>
    </footer>
  );
}
