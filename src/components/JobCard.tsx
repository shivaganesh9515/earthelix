import { Job } from "@/data/mockJobs";
import { MapPin, Clock, DollarSign } from "lucide-react";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="glass-card p-6 rounded-2xl glass-hover flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{job.title}</h3>
            <p className="text-eco-400 font-medium">{job.company}</p>
          </div>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-zinc-800 text-gray-300 border border-white/10">
            {job.category}
          </span>
        </div>
        
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
          {job.description}
        </p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-300 gap-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            {job.location}
          </div>
          <div className="flex items-center text-sm text-gray-300 gap-2">
            <DollarSign className="h-4 w-4 text-gray-500" />
            {job.pay}
          </div>
          <div className="flex items-center text-sm text-gray-300 gap-2">
            <Clock className="h-4 w-4 text-gray-500" />
            {job.schedule}
          </div>
        </div>
      </div>
      
      <button className="w-full mt-4 py-2.5 bg-eco-600 hover:bg-eco-500 text-white font-medium rounded-xl transition-colors">
        Apply Now
      </button>
    </div>
  );
}
