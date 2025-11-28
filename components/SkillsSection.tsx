import { JSX } from "preact";

// 1. Define the data structure
interface SkillGroup {
  name: string;
  skills: string[];
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  color: string; // Tailwind color class base (e.g., "blue", "emerald")
  groups: SkillGroup[];
}

// 2. Simple Icon Components (SVG)
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>
);
const ServerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
);

export default function SkillsSection() {
  // 3. Populate Data
  const categories: SkillCategory[] = [
    {
      title: "Programming & Frameworks",
      icon: <CodeIcon />,
      color: "indigo",
      groups: [
        { name: "Languages", skills: ["Python", "Matlab", "JavaScript", "C++"] },
        { name: "Backend", skills: ["Django", "Flask", "FastAPI"] },
        { name: "Frontend", skills: ["React", "NodeJS", "React Native", "Expo", "Streamlit"] },
        { name: "Docs", skills: ["Markdown", "LaTeX", "Sphinx"] },
      ],
    },
    {
      title: "Machine Learning & AI",
      icon: <BrainIcon />,
      color: "purple",
      groups: [
        { name: "Classical", skills: ["Linear Regression", "SVM", "KNN", "K-means"] },
        { name: "Deep Learning", skills: ["CNNs", "Transformers", "Embeddings"] },
        { name: "Libraries", skills: ["Scikit-Learn", "PyTorch", "openMMLAB", "HuggingFace", "TensorFlow"] },
        { name: "Edge AI", skills: ["ONNX", "TensorRT", "OpenVINO", "LiteRT", "ExecuTorch"] },
        { name: "MLOps", skills: ["MLFlow", "DVC"] },
        { name: "Data-Viz", skills: ["Matplotlib", "Seaborn", "NetworkX", "Three.js", "Voxel51"] },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <ServerIcon />,
      color: "emerald",
      groups: [
        { name: "CI/CD", skills: ["GitHub Actions"] },
        { name: "Containers", skills: ["Docker", "Proxmox", "Portainer"] },
        { name: "Cloud", skills: ["GCP", "AWS"] },
        { name: "Automation", skills: ["Ansible", "n8n"] },
        { name: "Monitoring", skills: ["Grafana", "Prometheus", "Loki", "Uptime-Kuma"] },
      ],
    },
  ];

  return (
    <div class="py-12 bg-gray-50> bg-[url(/images/backgrounds/montagne2.webp)] bg-center bg-cover bg-gray-200 bg-blend-multiply">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-2">
            TECHNICAL EXPERTISE
          </h2>
          <p class="text-white font-semibold mb-10 mt-6 italic">
            A comprehensive toolkit across the full stack and AI lifecycle.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.title} 
              class="bg-white dark:bg-gray-700 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header */}
              <div class={`px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3 bg-${category.color}-50 dark:bg-opacity-10`}>
                {/* <div class={`p-2 rounded-lg bg-${category.color}-100 text-${category.color}-600 dark:bg-${category.color}-900 dark:text-${category.color}-300`}> */}
                <div class={`p-2 rounded-lg text-gray-200`}>
                  {category.icon}
                </div>
                <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>

              {/* Body */}
              <div class="p-6 space-y-6">
                {category.groups.map((group) => (
                  <div key={group.name}>
                    <h4 class="text-xs font-semibold text-gray-200 uppercase tracking-wider mb-3">
                      {group.name}
                    </h4>
                    <div class="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span 
                          key={skill} 
                          class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-white hover:bg-${category.color}-100 hover:text-${category.color}-800 dark:hover:bg-${category.color}-900 dark:hover:text-${category.color}-200 transition-colors`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}