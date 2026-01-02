import { DailyContribution } from '@/types/github';

export interface StreakData {
  current: number;
  longest: number;
}

// HELPER FUNCTION TO CALCULATE DATE DIFFERENCE
const getDaysDifference = (dateStringA: string, dateStringB: string): number => {
  const d1 = new Date(dateStringA);
  const d2 = new Date(dateStringB);
  
  // Normalize to Midnight to ignore time/timezone shifts
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);

  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
};

// MAIN FUNCTION
export const calculateStreaks = (contributions: DailyContribution[]): StreakData => {
  if (!contributions.length) return { current: 0, longest: 0 };

  const contribMap = new Map(contributions.map(c => [c.date, c.contributionCount]));

  const toDateString = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  let current = 0;
  const today = new Date();
  
  for (let i = 0; i < 365; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateStr = toDateString(date);

    if ((contribMap.get(dateStr) || 0) > 0) {
      current++;
    } else if (i > 0) {
      // Allow grace period for today (i=0)
      break;
    }
  }

  let longest = 0;
  let temp = 0;

  const activeDays = [...contributions]
    .filter(day => day.contributionCount > 0)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  if (activeDays.length > 0) {
    temp = 1;
    longest = 1;

    for (let i = 0; i < activeDays.length - 1; i++) {
      const currentDay = activeDays[i];
      const nextDay = activeDays[i + 1];

      const diff = getDaysDifference(currentDay.date, nextDay.date);

      if (diff === 1) {
        temp++;
      } else {
        longest = Math.max(longest, temp);
        temp = 1;
      }
    }
    longest = Math.max(longest, temp);
  }

  return { current, longest };
};