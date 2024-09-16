export interface Project {
  name: string;
  description: string;
  link: string;
}

const projectsData: Project[] = [
  {
    name: "プロジェクト1",
    description: "このプロジェクトの簡単な説明をここに記述します。",
    link: "https://project1.example.com",
  },
  {
    name: "プロジェクト2",
    description: "このプロジェクトの簡単な説明をここに記述します。",
    link: "https://project2.example.com",
  },
  {
    name: "プロジェクト3",
    description: "このプロジェクトの簡単な説明をここに記述します。",
    link: "https://project3.example.com",
  },
];

export default projectsData;
