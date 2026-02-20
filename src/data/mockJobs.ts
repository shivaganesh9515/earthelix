export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  pay: string;
  schedule: string;
  category: 'Driver' | 'Processor' | 'Admin' | 'Sorter';
  description: string;
  postedAt: string;
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Organic Waste Collector",
    company: "EcoTransistics",
    location: "New York, NY",
    pay: "$22/hr",
    schedule: "Full-Time",
    category: "Driver",
    description: "Collect organic waste from partnering restaurants and residential areas.",
    postedAt: "2d ago"
  },
  {
    id: "2",
    title: "Recycling Facility Sorter",
    company: "GreenCycle",
    location: "Brooklyn, NY",
    pay: "$19/hr",
    schedule: "Part-Time",
    category: "Sorter",
    description: "Sort incoming food waste and remove non-compostable materials.",
    postedAt: "1d ago"
  },
  {
    id: "3",
    title: "Composting Operations Manager",
    company: "EarthElix processing",
    location: "Newark, NJ",
    pay: "$75k/yr",
    schedule: "Full-Time",
    category: "Admin",
    description: "Manage large-scale composting operations and oversee staff.",
    postedAt: "4d ago"
  },
  {
    id: "4",
    title: "Delivery & Pickup Logistics",
    company: "FoodRescue Org",
    location: "Queens, NY",
    pay: "$24/hr",
    schedule: "Flexible",
    category: "Driver",
    description: "Route optimization and logistics for food waste pickup vectors.",
    postedAt: "3h ago"
  }
];
