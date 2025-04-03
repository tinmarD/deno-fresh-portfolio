import { useState } from "preact/hooks";

export default function HorizontalTimeline() {
  const timelineEvents = [
    {
      id: 3,
      date: "2014",
      title: "",
      description: "",
    },
    {
      id: 4,
      date: "2020",
      title: "",
      description: "",
    },
    {
      id: 5,
      date: "2025",
      title: "",
      description: "",
    },
    {
      id: 6,
      date: "Today",
      title: "",
      description: "",
    },
  ];

  // Texts between events (one fewer than the number of events)
  const betweenTextsTop = [
    {
      text: "Research Engineer",
      position: "top",
    },
    {
      text: "Edge AI Engineer",
      position: "top",
    },
    {
      text: "Freelance Software Dev",
      position: "top",
    },
  ];

  const betweenTextsBottom = [
    {
      text: "CNRS UMR5549 CerCo",
      position: "bottom",
    },
    {
      text: "wiiCare",
      position: "bottom",
    },
    {
      text: "",
      position: "bottom",
    },
  ];

  const [activeEvent, setActiveEvent] = useState(1);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 mt-12">
      {/* <h2 className="text-2xl font-bold mb-8 text-center">Project Timeline</h2> */}

      {/* Timeline track and dots */}
      <div className="relative">
        {/* The horizontal line */}
        <div className="absolute top-5 left-0 w-full h-1 bg-gray-200"></div>

        {/* Timeline dots, between-texts, and labels */}
        <div className="relative mb-16">
          <div className="flex justify-between">
            {timelineEvents.map((event) => (
              <div key={event.id} className="flex flex-col items-center">
                <div
                  onClick={() =>
                    setActiveEvent(event.id)}
                  className={`w-8 h-8 rounded-full z-10 transition-all mt-1 duration-300 bg-gray-400`}
                />
                {
                  /* <button
                  type="button"
                  onClick={() =>
                    setActiveEvent(event.id)}
                  className={`w-10 h-10 rounded-full z-10 flex items-center justify-center transition-all duration-300
                  ${
                    activeEvent === event.id
                      ? "bg-blue-600 text-white"
                      : "bg-white border-2 border-gray-300 hover:border-blue-400"
                  }`}
                >
                  {event.id}
                </button> */
                }
                <div className="mt-2 text-sm font-medium">{event.date}</div>
              </div>
            ))}
          </div>

          {/* Between-event texts top */}
          <div className="absolute top-0 left-0 w-full">
            {betweenTextsTop.map((text, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `calc(${
                    (index + 0.5) * (100 / (timelineEvents.length - 1))
                  }%)`,
                  transform: "translateX(-50%)",
                  top: "-30px",
                }}
              >
                <div
                  className={`text-xs font-medium px-2 py-1 rounded bg-gray-100 ${text
                    .position = "mb-2"}`}
                >
                  {text.text}
                </div>
                <div className="w-0.5 h-2 bg-gray-300 mx-auto"></div>
              </div>
            ))}
          </div>

          {/* Between-event texts bottom */}
          <div className="absolute top-0 left-0 w-full">
            {betweenTextsBottom.map((text, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `calc(${
                    (index + 0.5) * (100 / (timelineEvents.length - 1))
                  }%)`,
                  transform: "translateX(-50%)",
                  top: "20px",
                }}
              >
                <div
                  className={`text-xs font-medium italic text-gray-700 px-2 py-1 rounded bg-gray-100 ${text
                    .position = "mt-6"}`}
                >
                  {text.text}
                </div>
                {/* <div className="w-0.5 h-2 bg-gray-300 mx-auto -mt-1"></div> */}
              </div>
            ))}
          </div>
        </div>

        {/* Content for the active event */}
        {
          /* {timelineEvents.map((event) => (
          <div
            key={event.id}
            className={`transition-opacity duration-300 ${
              activeEvent === event.id ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-blue-600">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          </div>
        ))} */
        }
      </div>
    </div>
  );
}
