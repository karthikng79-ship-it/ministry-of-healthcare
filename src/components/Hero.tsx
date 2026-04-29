import { motion } from 'motion/react';
import { ArrowRight, Play, Server, Database, Lock, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500" />
              Digital Transformation for Ministry Partners
            </div>
            
            <h1 className="text-6xl lg:text-[4.5rem] font-extrabold text-slate-900 leading-[1.05] mb-8 tracking-tight">
              Reliable Systems for <span className="text-blue-600">Life-Saving</span> Missions.
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              The Ministry of Healthcare IT group (MinistryHealth) provides institutional-grade infrastructure, cybersecurity, and cloud solutions specifically tailored for modern clinical environments.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Buttons removed as per request */}
            </div>

            <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
              <Server size={24} />
              <Database size={24} />
              <Lock size={24} />
              <span className="text-sm font-medium text-slate-400">Certified by Global Health Standards</span>
            </div>
          </motion.div>

          {/* Image removed as per request */}
        </div>
      </div>
    </section>
  );
}
