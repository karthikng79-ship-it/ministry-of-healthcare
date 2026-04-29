import { motion } from 'motion/react';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "James Wilson",
    role: "Head of Infrastructure",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Elena Rodriguez",
    role: "Director of Data Security",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Marcus Thorne",
    role: "Lead Software Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  }
];

export default function Team() {
  return (
    <section id="teams" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4">The IT Group</h2>
            <h3 className="text-4xl font-bold text-slate-900 leading-tight">Led by Industry Visionaries and Medical Experts</h3>
          </div>
          <button className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-700 transition-colors">Join our mission</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-3xl grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-6 left-6 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{member.name}</h4>
              <p className="text-slate-500 text-sm font-medium tracking-wide font-sans">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
