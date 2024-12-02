import { AxisData } from "../components/Graph";

export interface Episode {
  air_date: string;
}

export function countMonths(episodes: Episode[]){

  const monthCountMap: Record<string, number> = {};
  
  const monthOrder: Record<string, number> = {
    'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
    'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12,
  };

  if (episodes && episodes.length > 0) {
    
    episodes.forEach((episode: Episode) => {
      const date = new Date(episode.air_date);
      const month = date.toLocaleString('default', { month: 'short' });
      monthCountMap[month] = (monthCountMap[month] || 0) + 1;
    });


    const monthCount = Object.entries(monthCountMap).map(([month, count]) => ({
      label: month,
      value: count.toString(),
    })).sort((a, b) => monthOrder[a.label] - monthOrder[b.label]) as AxisData[];

    return monthCount;

  }
  else {
    return {
      data: []
    } 
  }
}