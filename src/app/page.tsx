import Link from "next/link";
import { ArrowRight, Leaf, TrendingUp, Users, ShieldCheck, Zap, Network, Bot, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-eco-900/40 via-background to-background"></div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-eco-500/30 text-eco-400 text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Every pickup generates verifiable impact</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          A Scalable Ecosystem for <br/>
          <span className="gradient-text">Zero Waste.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 text-balance leading-relaxed">
          EarthElix is an intelligent matching platform connecting surplus food with processors, food banks, and logistics partners—fueling the green economy with structured job opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/pickup" className="w-full sm:w-auto px-8 py-4 rounded-full bg-eco-600 hover:bg-eco-500 text-white font-semibold transition-all hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-eco-500/50 flex items-center justify-center gap-2 group">
            Schedule a Pickup <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/dashboard" className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-semibold transition-all flex items-center justify-center">
            View Live Impact
          </Link>
        </div>
        
        {/* Dynamic Counters MVP */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: "Total Waste Saved", value: "14.5k kg", icon: Leaf },
            { label: "Jobs Created", value: "124", icon: Users },
            { label: "Active Nodes", value: "856", icon: Network },
            { label: "CO₂ Prevented", value: "3.2k kg", icon: Zap }
          ].map((stat, i) => (
            <div key={i} className="glass-card p-4 rounded-2xl flex flex-col items-center">
              <stat.icon className="w-6 h-6 text-eco-500 mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-eco-400 uppercase tracking-wider font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem Map (Flow diagram simulation) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <h2 className="text-3xl font-bold mb-4">The EarthElix Network</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">A continuous cycle mapping logistics, job seekers, and resources in real-time.</p>
        <div className="relative glass-card rounded-[3rem] p-8 md:p-16 border-eco-500/20 overflow-hidden">
           <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
             <div className="glass p-6 rounded-2xl text-left hover:border-eco-500/30 transition-colors">
               <div className="w-12 h-12 rounded-full bg-eco-500/20 flex items-center justify-center mb-4 text-eco-400">01</div>
               <h3 className="font-bold text-lg text-white mb-2">Donors</h3>
               <p className="text-sm text-gray-400">Households & restaurants request pickup for organic or edible waste.</p>
             </div>
             
             {/* Center Node */}
             <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-eco-600 shadow-[0_0_40px_rgba(34,197,94,0.4)] flex items-center justify-center relative z-20">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <div className="mt-4 font-bold text-white text-center">Smart Matching<br/>Engine</div>
             </div>

             <div className="glass p-6 rounded-2xl text-left hover:border-eco-500/30 transition-colors">
               <div className="w-12 h-12 rounded-full bg-eco-500/20 flex items-center justify-center mb-4 text-eco-400">02</div>
               <h3 className="font-bold text-lg text-white mb-2">Collectors</h3>
               <p className="text-sm text-gray-400">Verified drivers and fleet operators receive optimal pickup routes.</p>
             </div>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8 mt-8 relative z-10">
             <div className="glass p-6 rounded-2xl text-left">
               <h3 className="font-bold text-lg text-white mb-2">Processors & Food Banks</h3>
               <p className="text-sm text-gray-400">Waste is either converted to compost/energy or redirected to those in need.</p>
             </div>
             <div className="glass p-6 rounded-2xl text-left">
               <h3 className="font-bold text-lg text-white mb-2">Green Economy Employers</h3>
               <p className="text-sm text-gray-400">Scale their operations seamlessly by hiring through our connected job board.</p>
             </div>
           </div>

           {/* Animated connection lines (decorative) */}
           <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
               <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="var(--eco-500)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
               <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="var(--eco-500)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse flex-delay-[500ms]" />
               <line x1="30%" y1="80%" x2="50%" y2="50%" stroke="var(--tw-colors-blue-400)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse flex-delay-[1000ms]" />
               <line x1="70%" y1="80%" x2="50%" y2="50%" stroke="var(--tw-colors-blue-400)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse flex-delay-[1500ms]" />
             </svg>
           </div>
        </div>
      </section>

      {/* Intelligent Matching Simulation */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Bot className="w-4 h-4" />
              AI-Powered Logistics
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Intelligent Matching <br/>Engine</h2>
            <p className="text-gray-400 mb-6 text-lg">
              Behind the scenes, our algorithm optimizes every connection to ensure maximum sustainability and efficiency.
            </p>
            <ul className="space-y-4">
              {[
                "Location Proximity: Matches nearest verified partner.",
                "Availability Scheduling: Real-time capacity checks.",
                "Efficiency Scoring: Minimizes carbon footprint of transport.",
                "Trust Ratings: Prioritizes highly-rated processors/collectors."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-gray-300">
                  <CheckCircle className="w-6 h-6 text-eco-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6 rounded-3xl">
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/10">
              <span className="font-bold text-white text-lg">Live Algorithm Log</span>
              <span className="w-3 h-3 rounded-full bg-eco-500 animate-pulse"></span>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div className="text-gray-400"><span className="text-blue-400">[12:45:01]</span> REQ: 50kg Compost, UID: 9942</div>
              <div className="text-gray-400"><span className="text-blue-400">[12:45:02]</span> SCAN: 3 Drivers in 5km radius</div>
              <div className="text-green-400"><span className="text-blue-400">[12:45:03]</span> MATCH: Driver "Alex J." (Dist: 1.2km, Rat: 4.9)</div>
              <div className="text-gray-400"><span className="text-blue-400">[12:45:05]</span> ROUTE: Optimized. Target Processor: P-12</div>
              <div className="text-eco-400 pt-4 mt-4 border-t border-white/5 opacity-50">Awaiting acknowledgment...</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-10">
        <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 bg-zinc-900/40 text-center">
          <ShieldCheck className="w-12 h-12 text-eco-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4 text-white">Built on Trust & Compliance</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8">
            Safety and regulatory compliance are critical when handling resources and coordinating logistics.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-white font-semibold mb-2">Verified Partners</h4>
              <p className="text-sm text-gray-500">Every processor and collector undergoes strict vetting & documentation before platform access.</p>
            </div>
            <div className="text-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0">
              <h4 className="text-white font-semibold mb-2">Encrypted Data</h4>
              <p className="text-sm text-gray-500">Location markers, business details, and pickup nodes are secured with AES-256 encryption.</p>
            </div>
            <div className="text-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0">
              <h4 className="text-white font-semibold mb-2">Impact Audits</h4>
              <p className="text-sm text-gray-500">Metrics are logged transparently to prevent greenwashing and enable certified corporate ESG reporting.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
