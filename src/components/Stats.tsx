import { motion } from 'motion/react';

const stats = [
  { label: "Active Clinics", value: "2,400+" },
  { label: "Secured Records", value: "85M+" },
  { label: "Uptime SLA", value: "99.99%" },
  { label: "Dedicated Staff", value: "450+" },
];

export default function Stats() {
  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-100 text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
