import { useEffect, useState } from "preact/hooks";

export default function HeaderBar() {
  const [opacity, setOpacity] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  // Fade in header based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const newOpacity = Math.min(globalThis.scrollY / 100, 1);
      setOpacity(newOpacity);
    };

    globalThis.addEventListener("scroll", handleScroll);
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active section using IntersectionObserver
  useEffect(() => {
    // List of section ids corresponding to each nav link
    const sectionIds = ["home", "intro", "portfolio", "contact"];
    const observerOptions = {
      threshold: 0.6,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const navItem = (id: string, label: string) => (
    <li class="relative">
      <a href={`#${id}`} class="hover:text-teal-600">
        {label}
      </a>
      {activeSection === id && (
        <span class="absolute -bottom-4 -left-4 -right-4 h-1 bg-gray-300" />
      )}
    </li>
  );

  return (
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={`background-color: rgba(255, 255, 255, ${opacity});`}
    >
      <nav class="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div class="text-2xl">
          <a href="#home" class="hover:text-teal-600">
            HOME
          </a>
        </div>
        <ul class="flex space-x-6">
          {navItem("intro", "INTRO")}
          {navItem("skills", "SKILLS")}
          {navItem("portfolio", "PORTFOLIO")}
          {navItem("citations-graph", "ACADEMIC")}
          {/* {navItem("testimonials", "TESTIMONIALS")} */}
          {navItem("contact", "CONTACT")}
        </ul>
      </nav>
    </header>
  );
}
