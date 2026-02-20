import { Check, Truck, ClipboardList } from "lucide-react";

export default function Timeline({ status }: { status: number }) {
  const steps = [
    { id: 1, name: "Requested", icon: ClipboardList },
    { id: 2, name: "Assigned", icon: Check },
    { id: 3, name: "On the Way", icon: Truck },
    { id: 4, name: "Completed", icon: Check },
  ];

  return (
    <div className="py-6">
      <div className="relative">
        {/* Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-zinc-800 -ml-px z-0"></div>
        
        <ul className="relative z-10 space-y-8">
          {steps.map((step) => {
            const isCompleted = status >= step.id;
            const isCurrent = status === step.id;
            const Icon = step.icon;

            return (
              <li key={step.id} className="flex gap-4 items-center">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-4 border-[#050505] transition-colors duration-500
                    ${isCompleted ? 'bg-eco-500 text-black' : 'bg-zinc-800 text-gray-400'}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-semibold transition-colors duration-500 ${isCompleted ? 'text-white' : 'text-gray-500'}`}>
                    {step.name}
                  </h4>
                  {isCurrent && <p className="text-sm text-eco-400 animate-pulse">Current Status</p>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
