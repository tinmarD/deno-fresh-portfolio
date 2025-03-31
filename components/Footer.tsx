export default function Footer() {
  return (
    <div class="bg-white">
      <div class="flex justify-center gap-8 p-3">
        <a
          href="https://github.com/tinmarD"
          class="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 h-10"
        >
          <i class="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/martin-deudon-122a1130/"
          class="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 h-10 "
        >
          <i class="fab fa-linkedin-in" />
        </a>
        <a
          href="https://scholar.google.fr/citations?user=3n9lLKMAAAAJ&hl=en"
          class="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 h-10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="material-icons">school</span>
        </a>
      </div>
    </div>
  );
}
