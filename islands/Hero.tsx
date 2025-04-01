export default function Hero() {
  return (
    <section class="w-full text-center py-20">
      {/* Logo and Name */}
      <div class="flex justify-center items-center gap-4 mb-6">
        <span class="text-3xl font-bold">Tinmar</span>
        <div class="border-2 border-black rounded-full w-16 h-16 flex items-center justify-center">
          <span class="text-xl font-bold">⚡</span>
        </div>
        <span class="text-3xl font-bold">Deudon</span>
      </div>

      <hr class="w-12 mx-auto border-t-2 border-gray-300 mb-6" />

      {/* Social Links */}
      <div class="flex justify-center gap-4 mb-6">
        <a
          href="https://github.com/tinmarD"
          class="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
        >
          <i class="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/martin-deudon-122a1130/"
          class="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
        >
          <i class="fab fa-linkedin-in" />
        </a>
        <a
          href="https://scholar.google.fr/citations?user=3n9lLKMAAAAJ&hl=en"
          class="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="material-icons">school</span>
        </a>
      </div>

      {/* Intro Text */}
      <p class="max-w-2xl mx-auto text-lg leading-relaxed">
        👋 Hi! I'm a freelance <strong>senior software engineer</strong>{" "}
        specializing in
        <strong>data visualization</strong>. I worked for prestigious research
        centers and top-tier companies. Blablabla.
      </p>

      {/* Buttons */}
      <div class="mt-8 flex justify-center gap-4">
        <a
          href="#contact"
          class="border border-teal-600 text-teal-600 px-6 py-2 rounded hover:bg-teal-600 hover:text-white"
        >
          CONTACT
        </a>
      </div>
    </section>
  );
}
