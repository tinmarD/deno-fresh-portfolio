import { useEffect, useState } from "preact/hooks";

export default function HeaderBar() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the divisor (e.g., 100) to control how fast opacity reaches 1.
      const newOpacity = Math.min(globalThis.scrollY / 100, 1);
      setOpacity(newOpacity);
    };

    globalThis.addEventListener("scroll", handleScroll);
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={`background-color: rgba(255, 255, 255, ${opacity});`}
    >
      <nav class="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <div class="text-2xl">
          <a href="#home" class="hover:text-teal-600">
            HOME
          </a>
        </div>
        <ul class="flex space-x-6">
          <li>
            <a href="#intro" class="hover:text-teal-600">
              INTRO
            </a>
          </li>
          <li>
            <a href="#portfolio" class="hover:text-teal-600">
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#contact" class="hover:text-teal-600">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
