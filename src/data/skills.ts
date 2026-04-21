export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Core",
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    label: "Styling",
    items: ["Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "State / Data",
    items: ["TanStack Query", "Zustand"],
  },
  {
    label: "Backend (이전 경력)",
    items: ["C# ASP.NET", "MSSQL", "MySQL", "Spring Boot"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Vercel"],
  },
  {
    label: "AI Workflow",
    items: ["Claude Sonnet 4.6", "ChatGPT", "Gemini", "GitHub Copilot", "v0"],
  },
];
