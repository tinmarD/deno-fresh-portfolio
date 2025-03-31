import { useSignal } from "@preact/signals";
import ProjectModal from "./ProjectModal.tsx";
import ProjectsPage from "../routes/index.tsx";

export function ProjectCard({ project }: { project: ProjectFrontmatter }) {
  // State for modal visibility
  const isModalOpen = useSignal(false);

  return (
    <div
      class="relative group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => (isModalOpen.value = true)} // Open modal on click anywhere on the card
    >
      {/* Thumbnail */}
      <img
        src={project.thumbnail}
        alt={`${project.title} thumbnail`}
        class="w-full h-48 object-cover"
      />

      {/* Hover Overlay */}
      <div class="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Title */}
        <h3 class="text-xl font-semibold text-white mb-2">{project.title}</h3>

        {/* Description */}
        <p class="text-gray-300 text-sm">{project.description}</p>
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen.value}
        onClose={() => (isModalOpen.value = false)}
      >
        <div class="max-w-3xl mx-auto px-4 py-8 text-center space-y-6">
          {/* Thumbnail */}
          <img
            src={project.thumbnail}
            alt={project.title}
            class="mx-auto h-40 object-contain"
          />

          <div>
            <h1 class="text-3xl font-semibold">{project.title}</h1>
            <p class="text-gray-500">{project.description}</p>
          </div>

          <div class="text-left text-gray-700 space-y-4">
            <h2 class="text-lg font-medium">Description</h2>
            <hr />
            <div class="space-y-2">{project.details}</div>
          </div>

          <img
            src={project.gallery[0]}
            alt={project.title}
            class="mx-auto h-60 object-contain"
          />

          {/* Technologies */}
          <div class="flex items-center space-x-2 text-left text-gray-700">
            <h2 class="text-lg font-medium">Technologies :</h2>
            <div class="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <hr />

          {
            /* <h2 class="text-left text-lg font-medium">Read more</h2>
          <hr /> */
          }

          <div class="mt-6 text-sm text-gray-600">
            {project.links.github && (
              <>
                The source code of the project is on{" "}
                <a href={project.links.github} class="text-blue-600 underline">
                  Github
                </a>
                .{" "}
              </>
            )}
            {project.links.doc && (
              <>
                The documentation is available{" "}
                <a href={project.links.doc} class="text-blue-600 underline">
                  online
                </a>
              </>
            )}

            <div class="mt-3 space-x-2">
              {project.links.app && (
                <a
                  href={project.links.app}
                  class="inline-block px-3 py-1 bg-green-100 border rounded"
                >
                  ONLINE APP
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  class="inline-block px-3 py-1 bg-blue-100 border rounded"
                >
                  GITHUB
                </a>
              )}
              {project.links.doc && (
                <a
                  href={project.links.doc}
                  class="inline-block px-3 py-1 bg-green-100 border rounded"
                >
                  DOCS
                </a>
              )}
            </div>
          </div>
        </div>
      </ProjectModal>
    </div>
  );
}
