export default function ContactForm() {
  return (
    <section class="w-full py-20 bg-white mt-32">
      <div class="max-w-4xl mx-auto ">
        <h1 class="text-4xl font-bold text-gray-800 mb- text-center mb-8">
          CONTACT ME
        </h1>
        <p class="text-gray-600 text-center mb-10 mt-6">
          Feel free to contact me for any question.
        </p>
        <form
          action="https://formspree.io/f/xyzedywz" // Replace with your Formspree endpoint
          method="POST"
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
            </textarea>
          </div>
          <div class="flex items-center justify-center">
            <button
              type="submit"
              class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
