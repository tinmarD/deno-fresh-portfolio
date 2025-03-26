import { useSignal } from "@preact/signals";
import ProjectModal from "./ProjectModal.tsx";

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
      <ProjectModal isOpen={isModalOpen.value} onClose={() => (isModalOpen.value = false)}>
        <div>
          {/* Modal Content */}
          <h2 class="text-2xl font-bold mb-4">{project.title}</h2>
          <p class="text-gray-600 mb-4">{project.description}</p>
          <div class="flex flex-wrap gap-2 mb-4"> A
            {project.technologies.map((tech) => (
              <span
                key={tech}
                class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div class="flex gap-4">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:underline"
              >
                Live Site
              </a>
            )}
          </div>
        </div>
      </ProjectModal>
    </div>
  );
}
// export function ProjectCard({ project }: { project: ProjectFrontmatter }) {
//   return (
//     <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//       {/* Thumbnail */}
//       <img
//         src={project.thumbnail}
//         alt={`${project.title} thumbnail`}
//         class="w-full h-48 object-cover"
//       />

//       {/* Project Info */}
//       <div class="p-4 space-y-4">
//         {/* Title */}
//         <h3 class="text-xl font-semibold text-gray-800">
//           <a
//             href={`/projects/${project.slug}`}
//             class="hover:underline text-blue-600"
//           >
//             {project.title}
//           </a>
//         </h3>

//         {/* Description */}
//         <p class="text-gray-600 text-sm">{project.description}</p>

//         {/* Technologies */}
//         <div class="flex flex-wrap gap-2">
//           {project.technologies.map((tech) => (
//             <span
//               key={tech}
//               class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         {/* Links */}
//         <div class="flex gap-4 mt-4">
//           {project.links?.github && (
//             <a
//               href={project.links.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               class="text-gray-800 hover:text-gray-600 transition"
//             >
//               <span class="inline-block bg-gray-200 px-4 py-2 rounded-lg shadow hover:bg-gray-300">
//                 GitHub
//               </span>
//             </a>
//           )}
//           {project.links?.live && (
//             <a
//               href={project.links.live}
//               target="_blank"
//               rel="noopener noreferrer"
//               class="text-blue-600 hover:text-blue-500 transition"
//             >
//               <span class="inline-block bg-blue-100 px-4 py-2 rounded-lg shadow hover:bg-blue-200">
//                 Live Site
//               </span>
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }