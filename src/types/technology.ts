import { IconType } from 'react-icons';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaPhp,
  FaVuejs,
  FaBootstrap,
  FaCheck,
  FaWordpress,
} from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import {
  SiTypescript,
  SiJavascript,
  SiCsharp,
  SiMongodb,
  SiI18Next,
  SiVite,
  SiFlask,
  SiPostgresql,
  SiTensorflow,
  SiPwa,
  SiJsonwebtokens,
  SiFigma,
  SiMicrosoftsqlserver,
  SiSpringboot,
  SiCucumber,
  SiSwagger,
  SiHibernate,
  SiPhpmyadmin,
  SiNginx,
  SiWindows,
} from 'react-icons/si';
import { DiDotnet } from 'react-icons/di';
import { TbSql, TbBrandSass } from 'react-icons/tb';

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
  i18next: new Technology('i18next', TechnologyCategory.LibraryOrPackage, SiI18Next),
  vite: new Technology('Vite', TechnologyCategory.ToolOrPlatform, SiVite),
  scss: new Technology('SCSS', TechnologyCategory.Language, TbBrandSass),
  flask: new Technology('Flask', TechnologyCategory.Framework, SiFlask),
  postgresql: new Technology('PostgreSQL', TechnologyCategory.Database, SiPostgresql),
  tensorflow: new Technology('TensorFlow', TechnologyCategory.LibraryOrPackage, SiTensorflow),
  pwa: new Technology('PWA', TechnologyCategory.ToolOrPlatform, SiPwa),
  jwt: new Technology('JWT', TechnologyCategory.LibraryOrPackage, SiJsonwebtokens),
  figma: new Technology('Figma', TechnologyCategory.ToolOrPlatform, SiFigma),
  sqlServer: new Technology('SQL Server', TechnologyCategory.Database, SiMicrosoftsqlserver),
  vue: new Technology('Vue', TechnologyCategory.Framework, FaVuejs),
  php: new Technology('PHP', TechnologyCategory.Language, FaPhp),
  phpMyAdmin: new Technology('PHPMyAdmin', TechnologyCategory.ToolOrPlatform, SiPhpmyadmin),
  bootstrap: new Technology('Bootstrap', TechnologyCategory.LibraryOrPackage, FaBootstrap),
  springBoot: new Technology('Spring Boot', TechnologyCategory.Framework, SiSpringboot),
  cucumber: new Technology('Cucumber', TechnologyCategory.LibraryOrPackage, SiCucumber),
  testing: new Technology('Testing', TechnologyCategory.LibraryOrPackage, FaCheck),
  swagger: new Technology('Swagger', TechnologyCategory.ToolOrPlatform, SiSwagger),
  hibernate: new Technology('Hibernate', TechnologyCategory.LibraryOrPackage, SiHibernate),
  nginx: new Technology('nginx', TechnologyCategory.ToolOrPlatform, SiNginx),
  winforms: new Technology('Windows Forms', TechnologyCategory.Framework, SiWindows),
  wordpress: new Technology('WordPress', TechnologyCategory.ToolOrPlatform, FaWordpress),
};

export type TechnologyKey = keyof typeof technologies;
