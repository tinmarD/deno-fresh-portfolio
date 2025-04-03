export default function Intro() {
  return (
    <div class="max-w-4xl mx-auto mt-24">
      <div class="flex flex-col md:flex-row items-center gap-12 p-6">
        {/* Photo Section */}
        <div class="md:w-1/3">
          <img
            src="/images/profil.jpg"
            alt="Profile Picture"
            class="w-auto h-64"
          />
        </div>
        {/* Text Description Section */}
        <div class="md:w-2/3">
          {/* <h2 class="text-2xl font-bold mb-4">Your Title Here</h2> */}
          <p class="text-gray-700">
            This is your text description. Add any details you'd like to share
            about yourself or the content related to the photo. This is your
            text description. Add any details you'd like to share about yourself
            or the content related to the photo. This is your text description.
            Add any details you'd like to share about yourself or the content
            related to the photo. This is your text description. Add any details
            you'd like to share about yourself or the content related to the
            photo.
          </p>
          <div class="mt-8 flex  gap-4">
            <a
              href="https://github.com/tinmarD"
              class="border border-teal-600 text-teal-600 px-6 py-2 rounded hover:bg-teal-600 hover:text-white"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/martin-deudon-122a1130/b.com/tinmarD"
              class="border border-teal-600 text-teal-600 px-6 py-2 rounded hover:bg-teal-600 hover:text-white"
            >
              LINKEDIN
            </a>
            <a
              href="https://scholar.google.fr/citations?user=3n9lLKMAAAAJ&hl=en"
              class="border border-teal-600 text-teal-600 px-6 py-2 rounded hover:bg-teal-600 hover:text-white"
            >
              PUBLICATIONS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
