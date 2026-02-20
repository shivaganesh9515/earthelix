"use client";

import { useState, useEffect } from "react";
import StatsCard from "@/components/StatsCard";
import { Leaf, Users, Briefcase, Award, Trophy, Download, Calendar, BarChart3 } from "lucide-react";

type LeaderboardUser = {
  id: string;
  name: string;
  collected: number;
  badge: string;
};

type StatsType = {
  totalWasteCollected: number;
  co2Saved: number;
  activeUsers: number;
  jobsFilled: number;
};

export default function DashboardPage() {
  const [stats, setStats] = useState<StatsType | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        setStats(data.stats);
        setLeaderboard(data.leaderboard);
      } catch (error) {
        console.error("Failed to load dashboard data", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Impact <span className="gradient-text">Dashboard</span></h1>
          <p className="text-gray-400">Track our collective effort and ecosystem health in real-time.</p>
        </div>
        
        {/* Mock SaaS Controls */}
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none glass px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:border-white/20 transition-colors flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Last 30 Days</span>
          </button>
          <button className="flex-1 md:flex-none glass px-4 py-2 rounded-xl text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Export CSV</span>
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="w-full h-40 glass rounded-2xl flex items-center justify-center animate-pulse mb-8">
          <span className="text-gray-500 font-medium">Loading ecosystem data...</span>
        </div>
      ) : stats ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatsCard 
            title="Total Waste Repurposed" 
            value={`${stats.totalWasteCollected.toLocaleString()} kg`} 
            icon={<Leaf className="w-6 h-6" />}
            trend="+12%"
          />
          <StatsCard 
            title="Net CO₂ Saved" 
            value={`${stats.co2Saved.toLocaleString()} kg`} 
            icon={<Award className="w-6 h-6" />}
            trend="+8%"
          />
          <StatsCard 
            title="Green Jobs Filled" 
            value={stats.jobsFilled} 
            icon={<Briefcase className="w-6 h-6" />}
            trend="+24%"
          />
          <StatsCard 
            title="Active Ecosystem Nodes" 
            value={stats.activeUsers} 
            icon={<Users className="w-6 h-6" />}
            trend="+5%"
          />
        </div>
      ) : null}

      {/* Mock Growth Chart Section */}
      <div className="glass-card p-8 rounded-3xl mb-8 border border-white/5 relative overflow-hidden">
        <div className="flex justify-between items-center mb-6 relative z-10">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-eco-500" />
            Ecosystem Growth (Simulated)
          </h2>
          <span className="text-xs px-2 py-1 rounded bg-eco-500/10 text-eco-400 border border-eco-500/20">Live Sync</span>
        </div>
        <div className="h-48 w-full border-b border-l border-white/10 flex items-end gap-2 p-2 relative z-10">
          {/* Mock Bar Chart */}
          {[20, 35, 25, 50, 45, 70, 60, 85, 95, 80, 100].map((h, i) => (
             <div key={i} className="flex-1 bg-eco-600/50 hover:bg-eco-500 rounded-t-sm transition-all duration-300 relative group cursor-pointer" style={{ height: `${h}%` }}>
               <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold py-1 px-2 rounded pointer-events-none transition-opacity">
                 {h * 150}kg
               </div>
             </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-8 rounded-3xl">
          <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Top Contributors (Gamification)
          </h2>
          <div className="space-y-4">
            {isLoading ? (
               <div className="w-full h-20 glass rounded-xl animate-pulse"></div>
            ) : leaderboard.map((user, idx) => (
              <div key={user.id} className="glass p-4 rounded-xl flex items-center justify-between hover:border-eco-500/30 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full font-bold bg-zinc-800 flex items-center justify-center border border-white/5 transition-colors ${idx === 0 ? 'text-yellow-400 group-hover:border-yellow-500/50' : 'text-eco-400 group-hover:border-eco-500/50'}`}>
                    #{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      {user.name}
                      {idx === 0 && <span className="bg-yellow-500/20 text-yellow-500 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold">MVP</span>}
                    </h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-eco-500/10 text-eco-400 border border-eco-500/20 mt-1 inline-block">
                      {user.badge}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-white text-lg">{user.collected} <span className="text-sm font-normal text-gray-400">kg</span></p>
                  <p className="text-[10px] text-eco-500 uppercase font-semibold">Repurposed</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-card p-8 rounded-3xl flex flex-col justify-between overflow-hidden relative border-eco-500/20">
           <div className="absolute -right-10 -bottom-10 opacity-[0.03]">
             <Trophy className="w-64 h-64 text-white" />
           </div>
           <div>
             <h3 className="text-xl font-bold text-white mb-2 relative z-10">Your Next Milestone</h3>
             <p className="text-gray-400 text-sm mb-6 relative z-10">You&apos;re 15kg away from unlocking the &quot;Zero Waste Hero&quot; tier.</p>
             
             <div className="space-y-2 mb-8 relative z-10">
               <div className="flex justify-between text-sm font-semibold">
                 <span className="text-white">85 kg</span>
                 <span className="text-eco-400">100 kg Goal</span>
               </div>
               <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden shadow-inner">
                 <div className="w-[85%] h-full bg-gradient-to-r from-eco-600 to-eco-400 rounded-full relative">
                   <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                 </div>
               </div>
             </div>
           </div>
           
           <button className="w-full py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-xl transition-colors shadow-lg relative z-10 flex justify-center items-center gap-2">
             <Leaf className="w-4 h-4" />
             Log a New Pickup
           </button>
        </div>
      </div>
    </div>
  );
}
