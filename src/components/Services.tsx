import { motion } from 'motion/react';
import { Shield, Smartphone, Globe, Cloud, Headphones, BarChart } from 'lucide-react';

const services = [
  {
    icon: <Shield className="text-blue-600" />,
    title: "Secure Health Records",
    description: "Military-grade encryption for patient data management, ensuring 100% compliance with PHI regulations."
  },
  {
    icon: <Globe className="text-blue-600" />,
    title: "Telehealth Networks",
    description: "Global infrastructure for remote consultations, bringing world-class healthcare to remote regions."
  },
  {
    icon: <BarChart className="text-blue-600" />,
    title: "Predictive Analytics",
    description: "AI-driven insights to forecast disease patterns and optimize resource allocation across ministries."
  },
  {
    icon: <Cloud className="text-blue-600" />,
    title: "Interoperable Systems",
    description: "Seamless data exchange between hospitals, clinics, and pharmacies through unified API layers."
  },
  {
    icon: <Smartphone className="text-blue-600" />,
    title: "Patient Portals",
    description: "User-friendly mobile and web platforms for patients to access their records and book appointments."
  },
  {
    icon: <Headphones className="text-blue-600" />,
    title: "24/7 Tech Support",
    description: "Dedicated IT support team available round-the-clock for critical healthcare infrastructure."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive IT Solutions for Public Healthcare</h3>
          <p className="text-slate-600 text-lg">
            We build the foundational technology that allows healthcare providers to focus on what matters most: saving lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl transition-all group ${
                index === 1 
                  ? "bg-slate-900 text-white shadow-2xl scale-105 z-10" 
                  : "bg-white border border-slate-200 hover:bg-slate-50"
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                index === 1 ? "bg-blue-600/20 text-blue-400" : "bg-slate-100 text-blue-600"
              }`}>
                {service.icon}
              </div>
              <h4 className={`text-xl font-bold mb-4 ${index === 1 ? "text-white" : "text-slate-900"}`}>{service.title}</h4>
              <p className={`leading-relaxed ${index === 1 ? "text-blue-100/70" : "text-slate-600"}`}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
