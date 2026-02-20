import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: string;
}

export default function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <div className="glass-card p-6 rounded-2xl glass-hover">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-400">{title}</p>
          <p className="mt-2 text-3xl font-bold text-white">{value}</p>
        </div>
        <div className="p-3 bg-eco-500/10 rounded-xl text-eco-400">
          {icon}
        </div>
      </div>
      {trend && (
        <div className="mt-4">
          <span className="text-eco-400 text-sm font-medium">{trend}</span>
          <span className="text-gray-500 text-sm ml-2">vs last month</span>
        </div>
      )}
    </div>
  );
}
