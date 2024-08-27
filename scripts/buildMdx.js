import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compile } from '@mdx-js/mdx';

const projectsDir = path.join(process.cwd(), 'content', 'mdx', 'projects');
const outputDir = path.join(process.cwd(), 'public', 'mdx', 'projects');

async function buildMdxFiles() {
  try {
    await fs.mkdir(outputDir, { recursive: true });
    const projectSlugs = await fs.readdir(projectsDir);

    const allSlugs = [];

    for (const slug of projectSlugs) {
      const mdxPath = path.join(projectsDir, slug, 'index.mdx');
      const outputPath = path.join(outputDir, `${slug}.json`);

      const source = await fs.readFile(mdxPath, 'utf8');
      const { content, data } = matter(source);

      const compiledMdx = await compile(content, {
        outputFormat: 'function-body',
        development: false,
      });

      // Ensure technologies are saved as keys
      if (data.technologies) {
        data.technologies = data.technologies.map((tech) =>
          typeof tech === 'string' ? tech : tech.name
        );
      }

      // Ensure projectType is saved as a string
      if (data.projectType) {
        data.projectType = data.projectType.toString().toLowerCase();
      }

      const output = {
        compiledSource: String(compiledMdx),
        frontmatter: data,
      };

      await fs.writeFile(outputPath, JSON.stringify(output));
      allSlugs.push(slug);
    }

    // Write the list of all project slugs
    await fs.writeFile(path.join(outputDir, 'project-list.json'), JSON.stringify(allSlugs));

    console.log('MDX files processed successfully');
  } catch (error) {
    console.error('Error processing MDX files:', error);
  }
}

buildMdxFiles();
