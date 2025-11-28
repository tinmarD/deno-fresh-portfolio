export default function Intro() {
  return (
    <div class="max-w-4xl mx-auto mt-24">
      <div class="flex flex-col md:flex-row items-center gap-12 p-6">
        {/* Photo Section */}
        <div class="md:w-1/3">
          <img
            src="/images/profil.jpg"
            alt="Profile Picture"
            class="w-auto h-72 rounded-md"
          />
        </div>
        {/* Text Description Section */}
        <div class="md:w-2/3">
          {/* <h2 class="text-2xl font-bold mb-4">Your Title Here</h2> */}
          <p class="text-gray-700">
            My research background at CNRS focused on EEG signal analysis, applying machine learning for epilepsy detection, and developing user 
            interfaces to assist practitioners. Another project explored modeling brain learning mechanisms through spiking neural networks and unsupervised learning.
          </p>

          <p class="text-gray-700 mt-4">
            More recently, I have worked on intelligent sensor systems for healthcare, developing fall detection algorithms and optimizing AI models
            for embedded hardware. In parallel, I managed the monitoring and deployment platforms supporting these systems, and developed web 
            and mobile applications for tracking fall events and related alerts.
          </p>

          <div class="mt-8 flex  gap-4">
            <a
              href="https://github.com/tinmarD"
              rel="noopener noreferrer"
              target="_blank"
              class="border border-teal-600 text-teal-600 px-6 py-2 rounded hover:bg-teal-600 hover:text-white"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/martin-deudon-122a1130"
              rel="noopener noreferrer"
              target="_blank"
              class="border border-teal-600 text-teal-600 px-6 py-2 rounded hover:bg-teal-600 hover:text-white"
            >
              LINKEDIN
            </a>
            <a
              href="https://scholar.google.fr/citations?user=3n9lLKMAAAAJ&hl=en"
              rel="noopener noreferrer"
              target="_blank"
              class="border border-teal-600 text-teal-600 px-6 py-2 rounded hover:bg-teal-600 hover:text-white"
            >
              PUBLICATIONS
            </a>
            <a
               href="/CV_MartinDEUDON_en.pdf"
               target="_blank"
               rel="noopener noreferrer"
              class="border border-teal-600 text-teal-600 px-6 py-2 rounded hover:bg-teal-600 hover:text-white"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
