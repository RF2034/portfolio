export interface TimelineItem {
  date: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "2020年4月",
    description: "○○大学 情報工学部入学",
  },
  {
    date: "2022年8月",
    description: "株式会社○○でインターンシップ参加",
  },
  {
    date: "2024年3月",
    description: "○○大学 情報工学部卒業",
  },
  {
    date: "2024年4月",
    description: "株式会社△△に新卒入社",
  },
];

export default timelineData;
