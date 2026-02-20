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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/pickup" className="text-gray-300 hover:text-white transition-colors duration-200">Pickup Demo</Link>
              <Link href="/jobs" className="text-gray-300 hover:text-white transition-colors duration-200">Jobs</Link>
              <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors duration-200">Dashboard</Link>
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
