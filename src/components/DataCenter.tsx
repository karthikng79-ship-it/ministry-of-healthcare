import { motion } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { Building2, Users, UserRound, Activity } from 'lucide-react';

const data = [
  { name: 'Jan', users: 4000 },
  { name: 'Feb', users: 5200 },
  { name: 'Mar', users: 7800 },
  { name: 'Apr', users: 12000 },
  { name: 'May', users: 18500 },
  { name: 'Jun', users: 24000 },
];

const hospitalData = [
  { name: 'General', count: 120 },
  { name: 'Specialist', count: 85 },
  { name: 'Clinics', count: 450 },
  { name: 'Research', count: 42 },
];

const COLORS = ['#2563EB', '#3B82F6', '#60A5FA', '#93C5FD'];

export default function DataCenter() {
  return (
    <section id="portal" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4">Client Portal</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Mini Data Center</h3>
          <p className="text-slate-600 text-lg max-w-3xl">
            Real-time infrastructure monitoring and personnel availability across ministry-partnered healthcare facilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Stat Cards */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-50 p-8 rounded-3xl border border-slate-200"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <Users size={24} />
            </div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Total Users</div>
            <div className="text-4xl font-extrabold text-slate-900">85,420,000+</div>
            <div className="text-green-600 text-sm font-bold mt-2 flex items-center gap-1">
              <Activity size={14} /> +12% this month
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-50 p-8 rounded-3xl border border-slate-200"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <Building2 size={24} />
            </div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Hospitals In-Network</div>
            <div className="text-4xl font-extrabold text-slate-900">2,412</div>
            <div className="text-slate-500 text-sm font-medium mt-2">Active ministry partners</div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-50 p-8 rounded-3xl border border-slate-200"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <UserRound size={24} />
            </div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Doctors Available</div>
            <div className="text-4xl font-extrabold text-slate-900">18,524</div>
            <div className="text-blue-600 text-sm font-bold mt-2 tracking-wide">Ready for consultation</div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {/* Area Chart - User Growth */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 mb-8 uppercase tracking-wider">User Growth Trend</h4>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748B', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748B', fontSize: 12 }}
                    tickFormatter={(value) => `${value / 1000}k`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '16px', 
                      border: 'none', 
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' 
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="users" 
                    stroke="#2563EB" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorUsers)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
