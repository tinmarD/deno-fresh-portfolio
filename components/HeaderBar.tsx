export default function HeaderBar() {
  return (
    <header class="fixed top-0 left-0 right-0 bg-white z-50">
      <nav class="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <div class="text-2xl">
          <a href="#home" class="hover:text-teal-600">
            HOME
          </a>
        </div>
        <ul class="flex space-x-6">
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
