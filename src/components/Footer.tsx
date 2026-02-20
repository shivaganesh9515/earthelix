import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-eco-500" />
            <span className="text-lg font-bold text-gray-300">EarthElix</span>
          </div>
          <p className="text-gray-500 text-sm">
            Turning Food Waste into Opportunity. Demo for Hackathon.
          </p>
        </div>
      </div>
    </footer>
  );
}
