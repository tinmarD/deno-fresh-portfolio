import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

interface Testimonial {
  text: string;
  author: string;
  role?: string;
  image: string;
}

interface Props {
  testimonials: Testimonial[];
  interval?: number; // autoplay interval in ms
}

export default function TestimonialCarousel(
  { testimonials, interval = 5000 }: Props,
) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setIndex((index + 1) % testimonials.length);

  useEffect(() => {
    if (paused) return; // stop autoplay while paused

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(id);
  }, [paused, testimonials.length, interval]);

  const t = testimonials[index];

  return (
    <div class="relative max-w-5xl mx-auto min-h-80 mt-20 flex items-center bg-white rounded-2xl pr-10 p-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      >
         {/* Animated wrapper */}
      <div
        key={index} // important so React re-renders when index changes
        class="flex w-full items-center gap-x-12 transition-all duration-700 ease-in-out opacity-0 translate-x-4 animate-fadeIn"
      >
        {/* Left side: testimonial text */}
        <div class="flex-1 pr-6 mx-8">
          <p class="text-lg italic text-gray-700">“{t.text}”</p>
          <div class="mt-4">
            <p class="font-semibold text-gray-900">{t.author}</p>
            {t.role && <p class="text-gray-500 text-sm">{t.role}</p>}
          </div>
        </div>

        {/* Right side: photo */}
        <div class="flex-shrink-0 mx-8">
          <img
            src={t.image}
            alt={t.author}
            class="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
          />
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow"
      >
        ←
      </button>
      <button
        onClick={next}
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow"
      >
        →
      </button>
    </div>
  );
}
