import Link from 'next/link';
import { Leaf, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-eco-500" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-eco-400 to-eco-600">
                EarthElix
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              <Link href="/pickup" className="text-gray-300 hover:text-white transition-colors duration-200">Pickup Demo</Link>
              <Link href="/jobs" className="text-gray-300 hover:text-white transition-colors duration-200">Jobs</Link>
              <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors duration-200">Dashboard</Link>
              <Link href="/enterprise" className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200">Enterprise B2B</Link>
            </div>
            {/* Mock Role Switcher (CEO Vision) */}
            <div className="border-l border-white/20 pl-6 flex items-center gap-2">
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Demo View:</span>
              <select className="bg-black/40 border border-white/10 text-white text-xs rounded-md px-2 py-1 focus:outline-none focus:border-eco-500 cursor-pointer">
                <option value="donor">Donor (Restaurant)</option>
                <option value="collector">Driver Partner</option>
                <option value="enterprise">CSR Manager (B2B)</option>
              </select>
            </div>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-300 cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}
