import { Handlers, PageProps } from "$fresh/server.ts";
import { ProjectContent, loadProjects } from "../utils/projectLoader.ts";
import ProjectsFilter from "../islands/ProjectsFilter.tsx";

export const handler: Handlers<ProjectContent[]> = {
  async GET(_, ctx) {
    const projects = await loadProjects();
    return ctx.render(projects);
  },
};

export default function ProjectsPage({ data: projects }: PageProps<ProjectContent[]>) {
  return (
    <div class="px-6 py-12 min-h-screen bg-gray-100">
      {/* Page Header */}
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-gray-800 mb-2">PORTFOLIO</h1>
        <p class="text-gray-600 mb-8">A glimpse of the projects I've been working on</p>

        {/* Projects Filter (Island) */}
        <ProjectsFilter projects={projects} />
      </div>
    </div>
  );
}