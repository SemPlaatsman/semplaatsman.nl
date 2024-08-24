import { IconType } from 'react-icons';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiCsharp, SiMongodb } from 'react-icons/si';
import { DiDotnet } from 'react-icons/di';

export type TechnologyCategory =
  | 'language'
  | 'framework'
  | 'library/package'
  | 'tool/platform'
  | 'database';

export class Technology {
  constructor(
    public name: string,
    public category: TechnologyCategory,
    public icon: IconType
  ) {}
}

export const technologies = {
  react: new Technology('React', 'framework', FaReact),
  nodeJs: new Technology('Node.js', 'framework', FaNodeJs),
  typescript: new Technology('TypeScript', 'language', SiTypescript),
  javascript: new Technology('JavaScript', 'language', SiJavascript),
  python: new Technology('Python', 'language', FaPython),
  java: new Technology('Java', 'language', FaJava),
  csharp: new Technology('C#', 'language', SiCsharp),
  aspDotNet: new Technology('ASP.NET', 'framework', DiDotnet),
  mongodb: new Technology('MongoDB', 'database', SiMongodb),
  docker: new Technology('Docker', 'tool/platform', FaDocker),
  // Add more technologies as needed
};

export type TechnologyKey = keyof typeof technologies;
