import { useSignal } from "@preact/signals";
import { ProjectContent } from "../utils/projectLoader.ts";
import { ProjectCard } from "../components/ProjectCard.tsx";

export default function ProjectsFilter({ projects }: { projects: ProjectContent[] }) {
  // State for the selected tag
  const selectedTag = useSignal<string | null>(null);

  // Get a list of unique tags
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  // Filter projects based on the selected tag
  const filteredProjects = selectedTag.value
    ? projects.filter((project) =>
        project.tags.includes(selectedTag.value!)
      )
    : projects;

  return (
    <div>
      {/* Filter Controls */}
      <div class="flex flex-wrap gap-4 mb-8">
        {/* "Show All" Button */}
        <button
          type="button"
          class={`px-4 py-2 rounded ${
            selectedTag.value === null
              ? "bg-gray-800 text-white"
              : "border border-gray-300 hover:bg-gray-100"
          }`}
          onClick={() => (selectedTag.value = null)}
        >
          Show All
        </button>

        {/* Buttons for Each Tag */}
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            class={`px-4 py-2 rounded ${
              selectedTag.value === tag
                ? "bg-gray-800 text-white"
                : "border border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => (selectedTag.value = tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}