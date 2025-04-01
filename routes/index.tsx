import { Handlers, PageProps } from "$fresh/server.ts";
import { loadProjects, ProjectContent } from "../utils/projectLoader.ts";
import ProjectsFilter from "../islands/ProjectsFilter.tsx";
import Hero from "../islands/Hero.tsx";
import ContactForm from "../components/ContactForm.tsx";
import HeaderBar from "../islands/HeaderBar.tsx";
import WorldMap from "../islands/WorldMap.tsx";
import Footer from "../components/Footer.tsx";
import Particles from "../islands/Particles.tsx";
import Intro from "../components/Intro.tsx";

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
        <div style="position: relative; background-color: white;">
          {/* <div style={{ position: "relative", "backgroundColor": "black" }}> */}
          <Particles />
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            <Hero />
          </div>
        </div>
      </section>

      <section id="intro">
        <Intro />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" class="bg-white mt-24 pt-24 pb-24">
        {/* Projects Filter (Island) */}
        <ProjectsFilter projects={projects} />
      </section>

      <section id="contact">
        {/* Contact Form */}
        <ContactForm />
      </section>

      <section id="world-map">
        <WorldMap lat={43.6} lng={1.43333} zoom={3} />
      </section>

      {/* <ThreeScene /> */}

      <Footer />
    </div>
  );
}
