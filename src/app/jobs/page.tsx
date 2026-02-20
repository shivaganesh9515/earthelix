"use client";

import { useState, useEffect } from "react";
import type { Job } from "@/data/mockJobs";
import JobCard from "@/components/JobCard";
import { Search, MapPin, Briefcase } from "lucide-react";

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadJobs() {
      try {
        const res = await fetch('/api/jobs');
        const data = await res.json();
        setJobs(data.jobs);
      } catch (error) {
        console.error("Failed to load jobs", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadJobs();
  }, []);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    // activeTab could be "all", "driver", "processor", "admin", "sorter"
    let tabMatchStr = "";
    if (activeTab === "logistics") tabMatchStr = "driver";
    else if (activeTab === "processing") tabMatchStr = "sorter processor";
    else if (activeTab === "management") tabMatchStr = "admin";

    const matchesTab = activeTab === "all" ? true : tabMatchStr.includes(job.category.toLowerCase());
    return matchesSearch && matchesTab;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header and Search ... */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Green <span className="gradient-text">Job Board</span></h1>
        <p className="text-gray-400 max-w-2xl mb-8">We connect motivated workers with sustainable businesses. Help build the circular economy.</p>
        
        <div className="glass p-2 rounded-2xl flex items-center max-w-2xl border-white/10 focus-within:border-eco-500/50 transition-colors">
          <Search className="w-5 h-5 text-gray-500 ml-3" />
          <input 
            type="text" 
            placeholder="Search roles or companies..." 
            className="w-full bg-transparent border-none px-4 py-2 text-white focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-eco-600 hover:bg-eco-500 text-white px-6 py-2 rounded-xl font-medium transition-colors">
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 shrink-0 space-y-2">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">Role Type</h3>
          {[
            { id: "all", label: "All Roles", icon: Briefcase },
            { id: "logistics", label: "Logistics & Driving", icon: MapPin },
            { id: "processing", label: "Processing & Sorting", icon: Briefcase },
            { id: "management", label: "Facility Management", icon: Briefcase }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === tab.id ? 'bg-eco-500/10 text-eco-400 font-semibold' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
            >
              <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-eco-500' : 'text-gray-500'}`} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex-1 space-y-4">
          {isLoading ? (
            <div className="w-full h-40 glass rounded-2xl flex items-center justify-center animate-pulse">
              <span className="text-gray-500 font-medium">Loading network jobs...</span>
            </div>
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
               <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="p-12 text-center glass-card rounded-3xl border-dashed border-2 border-white/10">
              <h3 className="text-xl font-bold text-gray-300 mb-2">No roles found</h3>
              <p className="text-gray-500">Try adjusting your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
