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
import Timeline from "../islands/Timeline.tsx";
import WordCloud from "../islands/WordCloud.tsx";
import CitationChart from "../islands/CitationChart.tsx";
// import ThreeScene from "../islands/ThreeScene.tsx";
import TestimonialCarousel from "../islands/TestimonialCarousel.tsx";
import { citations } from "../content/citations.ts";

export const handler: Handlers<ProjectContent[]> = {
  async GET(_, ctx) {
    const projects = await loadProjects();
    return ctx.render(projects);
  },
};

// Testimonials 
const testimonials = [
  {
    text: "This service exceeded my expectations. Highly recommended! Another sentence to make it longer. And again longer. blablablabla.",
    author: "Boris Johnsonson",
    role: "CEO, United Kingdom",
    image: "/images/testimonials/boris.jpg",
  },
  {
    text: "A professional experience from start to finish.",
    author: "Eliza Bet",
    role: "Queen, Startup.io",
    image: "/images/testimonials/elizabeth.png",
  },
];


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

      <section id="intro" class="pt-4 pb-8">
        <Intro />
        <Timeline />
      </section>

      {/* <WordCloud 
            width={800} 
            height={600} 
            csvPath="./content/skills/words.csv" 
          /> */}

      {/* Portfolio Section */}
      <section id="portfolio" class="bg-white mt-24 pt-24 pb-24">
        {/* Projects Filter (Island) */}
        <ProjectsFilter projects={projects} />
      </section>

      <section id="citations-graph" class="bg-gray-800 pt-24 pb-24">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl font-bold text-gray-100 mb-2">SCIENTIFIC PAPERS</h1>
          <p class="text-gray-300 mb-10 mt-6 italic">
            Number of citations per year for my research articles
          </p>
          <CitationChart data={citations} />
        </div>
      </section>

      <section id="testimonials" class="bg-white pt-24 pb-24">
        <div class="max-w-4xl mx-auto text-center mb-10">
          <h1 class="text-4xl font-bold text-gray-900 mb-2">TESTIMONIALS</h1>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>


      <section id="contact" class="bg-gray-100">
        <div class="max-w-4xl mx-auto ">
          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
      
      <section id="world-map">
        <WorldMap lat={43.6} lng={1.43333} zoom={3} />
      </section>

      {/* <ThreeScene /> */}

      <Footer />
    </div>
  );
}
