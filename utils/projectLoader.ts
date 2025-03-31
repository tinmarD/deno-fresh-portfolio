import { extract } from "https://deno.land/std@0.224.0/front_matter/yaml.ts";
// import { readTextFile } from "https://deno.land/std@0.224.0/io/read_text_file.ts";

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  description: string;
  details: string;
  date: string;
  technologies: string[];
  thumbnail: string;
  gallery: string[];
  tags: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

export interface ProjectContent extends ProjectFrontmatter {
  content: string;
}

export async function loadProjects(): Promise<ProjectContent[]> {
  const projects: ProjectContent[] = [];

  // Read projects from the content directory
  for await (const dirEntry of Deno.readDir("./content/projects")) {
    if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
      try {
        const filePath = `./content/projects/${dirEntry.name}`;
        const fileContent = await Deno.readTextFile(filePath);

        // Extract frontmatter and markdown content
        const { attrs, body } = extract(fileContent);

        projects.push({
          ...(attrs as ProjectFrontmatter),
          content: body,
        });
      } catch (error) {
        console.error(`Error loading project ${dirEntry.name}:`, error);
      }
    }
  }

  // Sort projects by date (most recent first)
  return projects.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

import { marked } from "https://esm.sh/marked@4.3.0";

export async function loadProjectBySlug(
  slug: string,
): Promise<ProjectContent | null> {
  const projects = await loadProjects();
  const project = projects.find((project) => project.slug === slug) || null;

  if (project) {
    // Convert markdown content to HTML
    project.content = marked(project.content);
  }

  return project;
}
