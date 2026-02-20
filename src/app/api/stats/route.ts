import { NextResponse } from 'next/server';
import { mockStats, leaderboard } from '@/data/mockStats';

export async function GET() {
  // Simulate network delay to demonstrate loading states if needed
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json({
    stats: mockStats,
    leaderboard: leaderboard
  });
}
