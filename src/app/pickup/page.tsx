"use client";

import { useState, useEffect } from "react";
import Timeline from "@/components/Timeline";
import { CheckCircle2, UserCheck, Package, AlertCircle, ShieldCheck, Wifi, Cpu } from "lucide-react";

export default function PickupDemo() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState(0);
  const [quantity, setQuantity] = useState("50");
  const [isIotMode, setIsIotMode] = useState(false);

  // Simulate IoT Trigger
  useEffect(() => {
    if (isIotMode) {
      setQuantity("85"); // Simulated bin capacity reached
      const timer = setTimeout(() => {
        setIsSubmitted(true);
        setStatus(1);
        setTimeout(() => setStatus(2), 2000);
        setTimeout(() => setStatus(3), 4000);
      }, 3000); // 3 seconds to auto-trigger
      
      return () => clearTimeout(timer);
    }
  }, [isIotMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setStatus(1); // Requested

    // Mock progression
    setTimeout(() => setStatus(2), 2000); // Assigned
    setTimeout(() => setStatus(3), 4000); // On the way
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">Request a <span className="gradient-text">Verified Pickup</span></h1>
          <p className="text-gray-400">Securely schedule your surplus food collection. Every kg makes a difference.</p>
        </div>
        
        {/* IoT Mode Toggle */}
        <div className="glass px-4 py-3 rounded-xl flex items-center gap-3 border-blue-500/30">
          <div className="flex flex-col">
            <span className="text-xs text-blue-400 font-bold uppercase">Enterprise Demo</span>
            <span className="text-sm text-white">IoT Smart Bin Match</span>
          </div>
          <button 
            onClick={() => { setIsIotMode(!isIotMode); setIsSubmitted(false); setStatus(0); }}
            className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${isIotMode ? 'bg-blue-500' : 'bg-zinc-700'}`}
          >
            <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-300 ${isIotMode ? 'left-6' : 'left-0.5'}`}></div>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form Section */}
        <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
          {/* Trust indicator banner */}
          <div className="absolute top-0 left-0 w-full bg-eco-500/10 border-b border-eco-500/20 px-6 py-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-eco-500" />
            <span className="text-xs text-eco-400 font-semibold uppercase tracking-wide">Secure Logistics Endpoint</span>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 pt-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name / Organization</label>
                <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-eco-500 transition-colors" placeholder="GreenEats Cafe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Location</label>
                <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-eco-500 transition-colors" placeholder="123 Eco Street" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Waste Type</label>
              <select required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-eco-500 transition-colors appearance-none">
                 <option value="" disabled selected>Select categorized stream...</option>
                <option value="compost">Organic / Compostable</option>
                <option value="edible">Edible Surplus (For Food Bank)</option>
                <option value="oil">Cooking Oil</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Quantity (kg)</label>
                <input required type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-eco-500 transition-colors" placeholder="50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Pickup Time</label>
                <input required type="date" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-gray-400 focus:text-white focus:outline-none focus:border-eco-500 transition-colors" />
              </div>
            </div>

            {/* Impact Micro-copy */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex gap-3 text-sm">
              <AlertCircle className="w-5 h-5 text-blue-400 shrink-0" />
              <p className="text-gray-300 text-balance">
                By donating <strong className="text-eco-400">{quantity || 0}kg</strong> of waste, you will prevent approximately <strong className="text-eco-400">{(Number(quantity) * 0.4).toFixed(1)}kg of CO₂</strong> emissions and help support localized job creation.
              </p>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitted || isIotMode}
              className={`w-full py-4 text-white font-bold rounded-xl transition-colors mt-4 shadow-lg disabled:shadow-none ${isIotMode ? 'bg-blue-600/50 cursor-not-allowed border border-blue-500/50' : 'bg-eco-600 hover:bg-eco-500 disabled:bg-zinc-800 disabled:text-gray-500 shadow-eco-500/20'}`}
            >
              {isIotMode 
                ? (isSubmitted ? "IoT Request Dispatched" : "Awaiting Sensor Threshold...") 
                : (isSubmitted ? "Logistics Request Sent" : "Schedule Verified Pickup")}
            </button>
          </form>
        </div>

        {/* Status Section */}
        <div>
          {isSubmitted ? (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="glass-card p-6 rounded-2xl border-eco-500/30 bg-eco-500/5 flex items-center gap-4">
                <CheckCircle2 className="w-10 h-10 text-eco-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Matching Engine Successful</h3>
                  <p className="text-eco-400 text-sm">Your surplus has been allocated to our logistics network.</p>
                </div>
              </div>

              {status >= 2 && (
                <div className="glass p-6 rounded-2xl flex items-center gap-6 animate-in zoom-in-95 duration-500 border-l-4 border-l-eco-500">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border-2 border-eco-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                    <UserCheck className="w-8 h-8 text-eco-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold text-white">Alex Johnson</h4>
                      <span className="bg-blue-500/20 text-blue-400 text-[10px] uppercase px-1.5 py-0.5 rounded font-bold tracking-wider flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Background Checked
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                       ⭐ 4.9 Rating <span className="text-gray-600">•</span> 140+ Pickups Completed
                    </p>
                    <p className="text-xs text-eco-500 mt-2 font-mono bg-eco-500/10 inline-block px-2 py-1 rounded">
                      Vehicle: EV Cargo Van (Zero-Emission)
                    </p>
                  </div>
                </div>
              )}

              <Timeline status={status} />
            </div>
          ) : (
            <div className={`h-full flex flex-col items-center justify-center text-center p-8 glass-card rounded-3xl border-dashed border-2 min-h-[400px] transition-colors duration-500 ${isIotMode ? 'border-blue-500/30 bg-blue-500/5' : 'border-white/10'}`}>
              {isIotMode ? (
                <>
                  <div className="relative mb-6">
                    <Cpu className="w-16 h-16 text-blue-500" />
                    <Wifi className="w-6 h-6 text-blue-400 absolute -top-2 -right-2 animate-ping" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-300 mb-2">Smart Sensor Active</h3>
                  <p className="text-blue-400/70 max-w-sm mb-4">Monitoring Bin EV-409 capacity...</p>
                  <div className="w-64 bg-black/50 rounded-full h-4 overflow-hidden border border-blue-500/20">
                    <div className="bg-blue-500 h-full w-[85%] animate-pulse rounded-full"></div>
                  </div>
                  <p className="text-xs text-blue-400 mt-2 font-mono">Capacity: 85% - Auto-Trigger Initiated</p>
                </>
              ) : (
                <>
                  <Package className="w-16 h-16 text-gray-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-300 mb-2">Awaiting Parameters</h3>
                  <p className="text-gray-500 max-w-sm">Complete the form to initiate an intelligent routing request across our partner network.</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
