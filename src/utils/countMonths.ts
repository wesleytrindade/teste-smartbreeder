import { AxisData, GraphProps } from "../components/Graph";

interface Episode{
    air_date:string;
}

export function countMonths(episodes:any):GraphProps{
    
  const monthCountMap: Record<string, number> = {};

  console.log(episodes);

  episodes.forEach((episode) => {
    const date = new Date(episode.air_date);
    const month = date.toLocaleString('default', { month: 'short' });
    monthCountMap[month] = (monthCountMap[month] || 0) + 1;
  });

  const mountCount = Object.entries(monthCountMap).map(([month, count]) => ({
    label: month,
    value: count.toString(),
  })) as AxisData[];

  const formattedMountCount: GraphProps = {
    data:mountCount
  } 
  return formattedMountCount;
}