import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600" 
                  alt="Clinic interior" 
                  className="rounded-3xl shadow-lg aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600" 
                  alt="Doctor with tech" 
                  className="rounded-3xl shadow-lg aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" 
                  alt="Medicine cabinet" 
                  className="rounded-3xl shadow-lg aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=600" 
                  alt="Laboratory" 
                  className="rounded-3xl shadow-lg aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4">Our Mission</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 font-display leading-tight">Empowering Healthcare Through Sustainable Innovation</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              MinistryHealth was founded with a singular purpose: to modernize the public health infrastructure using reliable, scalable, and secure technologies. We believe that technology should be an enabler, not a barrier, for medical professionals.
            </p>
            
            <div className="space-y-4">
              {[
                "Nationwide cloud infrastructure for all public clinics",
                "Advanced cybersecurity preventing medical data breaches",
                "Streamlined recruitment and digital training systems",
                "24/7 dedicated response teams for critical outages"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
