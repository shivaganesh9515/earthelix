import { NextResponse } from 'next/server';
import { mockJobs } from '@/data/mockJobs';

export async function GET() {
  // Simulate network delay to demonstrate loading states if needed
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json({
    jobs: mockJobs
  });
}
