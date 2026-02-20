"use client";

import { useState } from "react";
import { mockJobs } from "@/data/mockJobs";
import JobCard from "@/components/JobCard";
import { Search } from "lucide-react";

export default function JobsPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Driver", "Processor", "Admin", "Sorter"];

  const filteredJobs = filter === "All" 
    ? mockJobs 
    : mockJobs.filter(job => job.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Green <span className="gradient-text">Job Board</span></h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Discover opportunities in the circular economy and help us build a sustainable future.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat 
                  ? "bg-eco-600 text-white shadow-[0_0_15px_-3px_rgba(34,197,94,0.4)]" 
                  : "glass hover:bg-white/10 text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search jobs..." 
            className="w-full pl-10 pr-4 py-2 bg-black/50 border border-white/10 rounded-full text-white focus:outline-none focus:border-eco-500 transition-colors"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      
      {filteredJobs.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No jobs found for this category.
        </div>
      )}
    </div>
  );
}
