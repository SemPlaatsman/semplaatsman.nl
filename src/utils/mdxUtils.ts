import { ProjectConfig, ProjectType } from '../types/project';
import { technologies, TechnologyKey } from '../types/technology';

interface ProjectData {
  compiledSource: string;
  frontmatter: ProjectConfig;
}

export async function getProjectData(slug: string): Promise<ProjectData> {
  const response = await fetch(`/mdx/projects/${slug}.json`);
  if (!response.ok) {
    console.error(`Failed to load project data for ${slug}:`, response.status, response.statusText);
    const text = await response.text();
    console.error('Response content:', text);
    throw new Error(`Failed to load project data for ${slug}`);
  }
  const jsonData = (await response.json()) as {
    compiledSource: string;
    frontmatter: ProjectConfig;
  };

  const data: ProjectData = {
    compiledSource: jsonData.compiledSource,
    frontmatter: {
      ...jsonData.frontmatter,
      technologies: jsonData.frontmatter.technologies.map(
        (techKey) => technologies[techKey as unknown as TechnologyKey]
      ),
      projectType:
        ProjectType[jsonData.frontmatter.projectType as unknown as keyof typeof ProjectType],
    },
  };

  return data;
}

export async function getAllProjectSlugs(): Promise<{ params: { slug: string } }[]> {
  console.log('Fetching project list...');
  try {
    const response = await fetch('/mdx/projects/project-list.json');
    console.log('Response status:', response.status, response.statusText);
    if (!response.ok) {
      console.error('Failed to load project list:', response.status, response.statusText);
      const text = await response.text();
      console.error('Response content:', text);
      throw new Error('Failed to load project list');
    }
    const contentType = response.headers.get('content-type');
    console.log('Content-Type:', contentType);
    if (!contentType?.includes('application/json')) {
      console.error('Unexpected content type:', contentType);
      const text = await response.text();
      console.error('Response content:', text);
      throw new Error('Unexpected content type');
    }
    const slugs: string[] = (await response.json()) as string[];
    console.log('Fetched slugs:', slugs);
    return slugs.map((slug) => ({ params: { slug } }));
  } catch (error) {
    console.error('Error in getAllProjectSlugs:', error);
    throw error;
  }
}
