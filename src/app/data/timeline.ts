export interface TimelineItem {
  date: string;
  description: string;
  flag?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    date: "2020年4月",
    description: "○○大学 情報工学部入学",
    flag: true,
  },
  {
    date: "2022年8月",
    description: "株式会社○○でインターンシップ参加",
    flag: true,
  },
  {
    date: "2024年3月",
    description: "○○大学 情報工学部卒業",
    flag: true,
  },
  {
    date: "2024年4月",
    description: "株式会社△△に新卒入社",
    flag: true,
  },
];

export default timelineData;
