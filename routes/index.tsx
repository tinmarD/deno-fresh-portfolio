import { Handlers, PageProps } from "$fresh/server.ts";
import { loadProjects, ProjectContent } from "../utils/projectLoader.ts";
import ProjectsFilter from "../islands/ProjectsFilter.tsx";
import Hero from "../islands/Hero.tsx";
import ContactForm from "../components/ContactForm.tsx";
import HeaderBar from "../components/HeaderBar.tsx";
import WorldMap from "../islands/WorldMap.tsx";
import Footer from "../components/Footer.tsx";

export const handler: Handlers<ProjectContent[]> = {
  async GET(_, ctx) {
    const projects = await loadProjects();
    return ctx.render(projects);
  },
};

export default function ProjectsPage(
  { data: projects }: PageProps<ProjectContent[]>,
) {
  return (
    <div class="min-h-screen bg-gray-100">
      <HeaderBar />
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <div class="max-w-4xl mx-auto text-center mt-24">
          <h1 class="text-4xl font-bold text-gray-800 mb-2">PORTFOLIO</h1>
          <p class="text-gray-600 mb-10 mt-6">
            A glimpse of the projects I've been working on
          </p>

          {/* Projects Filter (Island) */}
          <ProjectsFilter projects={projects} />
        </div>
      </section>

      <section id="contact">
        {/* Contact Form */}
        <ContactForm />
      </section>

      <section id="world-map">
        <WorldMap lat={43.6} lng={1.43333} zoom={3} />
      </section>

      <Footer />
    </div>
  );
}
