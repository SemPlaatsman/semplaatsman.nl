import { IconType } from 'react-icons';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker } from 'react-icons/fa';
import { FaGolang, FaRust } from 'react-icons/fa6';
import { SiTypescript, SiJavascript, SiCsharp, SiMongodb, SiI18Next, SiVite } from 'react-icons/si';
import { DiDotnet } from 'react-icons/di';
import { TbSql, TbBrandKotlin, TbBrandSass } from 'react-icons/tb';

export enum TechnologyCategory {
  Language = 'language',
  Framework = 'framework',
  LibraryOrPackage = 'library/package',
  ToolOrPlatform = 'tool/platform',
  Database = 'database',
}

export class Technology {
  constructor(
    public name: string,
    public category: TechnologyCategory,
    public icon: IconType
  ) {}
}

export const technologies = {
  react: new Technology('React', TechnologyCategory.Framework, FaReact),
  nodeJs: new Technology('Node.js', TechnologyCategory.Framework, FaNodeJs),
  typescript: new Technology('TypeScript', TechnologyCategory.Language, SiTypescript),
  javascript: new Technology('JavaScript', TechnologyCategory.Language, SiJavascript),
  python: new Technology('Python', TechnologyCategory.Language, FaPython),
  java: new Technology('Java', TechnologyCategory.Language, FaJava),
  csharp: new Technology('C#', TechnologyCategory.Language, SiCsharp),
  aspDotNet: new Technology('ASP.NET', TechnologyCategory.Framework, DiDotnet),
  mongodb: new Technology('MongoDB', TechnologyCategory.Database, SiMongodb),
  docker: new Technology('Docker', TechnologyCategory.ToolOrPlatform, FaDocker),
  sql: new Technology('SQL', TechnologyCategory.Language, TbSql),
  go: new Technology('Go', TechnologyCategory.Language, FaGolang),
  rust: new Technology('Rust', TechnologyCategory.Language, FaRust),
  kotlin: new Technology('Kotlin', TechnologyCategory.Language, TbBrandKotlin),
  i18next: new Technology('i18next', TechnologyCategory.LibraryOrPackage, SiI18Next),
  vite: new Technology('Vite', TechnologyCategory.ToolOrPlatform, SiVite),
  scss: new Technology('SCSS', TechnologyCategory.Language, TbBrandSass),
};

export type TechnologyKey = keyof typeof technologies;
