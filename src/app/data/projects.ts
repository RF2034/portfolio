export interface Project {
  name: string;
  description: string;
  link: string;
}

const projectsData: Project[] = [
  {
    name: "ポートフォリオ",
    description:
      "Next.js、DaisyUIを用いて作成しています。ダークモードへの対応なども行っています。",
    link: "https://project1.example.com",
  },
];

export default projectsData;
