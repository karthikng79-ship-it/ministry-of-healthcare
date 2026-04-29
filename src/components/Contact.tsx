import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 grid lg:grid-cols-2">
          <div className="p-12 lg:p-20 bg-blue-600 text-white">
            <h2 className="text-blue-200 font-semibold tracking-wider uppercase text-sm mb-4">Contact Our IT Desk</h2>
            <h3 className="text-4xl font-bold mb-8 leading-tight">Ready to Modernize Your Infrastructure?</h3>
            <p className="text-blue-100 mb-12 text-lg">
              Our experts are available for full-scale ministry consultations and clinic-level IT support. Get in touch with us today.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Call Us</div>
                  <div className="text-xl font-bold">+1 (555) 012-HEALTH</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Email Us</div>
                  <div className="text-xl font-bold">contact@ministryhealth.gov.it</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Visit Us</div>
                  <div className="text-xl font-bold">Ministry Complex, Tech Row 101</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 lg:p-20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Work Email</label>
                  <input type="email" placeholder="john@ministry.gov" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Clinic/Organization</label>
                  <input type="text" placeholder="Central Clinic" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Subject</label>
                  <select className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all">
                    <option>Infrastructure Inquiry</option>
                    <option>Security Audit</option>
                    <option>Recruitment Portal</option>
                    <option>Emergency Support</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Message</label>
                <textarea rows={4} placeholder="How can we help your team?" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Send Request <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
