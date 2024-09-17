export interface TimelineItem {
  date: string;
  description: string;
  flag?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    date: "2019年4月",
    description: "東京工科大学 コンピュータサイエンス学部入学",
    flag: true,
  },
  {
    date: "2023年3月",
    description:
      "東京工科大学 コンピュータサイエンス学部卒業。卒業研究では自作デバイスを用いた身体データ解析を行う",
    flag: true,
  },
  {
    date: "2023年4月",
    description:
      "SIer企業に新卒入社。勤怠管理システム、営業支援システムの要件定義、設計、開発を担当",
    flag: true,
  },
  {
    date: "2024年5月",
    description: "大手教育系企業の大規模システム改修に参加。主に試験業務を担当",
    flag: true,
  },
  {
    date: "2024年8月",
    description: "AWS Certified Solutions Architect – Associate 取得",
    flag: true,
  },
];

export default timelineData;
