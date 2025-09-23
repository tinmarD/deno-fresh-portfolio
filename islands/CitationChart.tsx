import { useEffect, useRef } from "preact/hooks";
import * as d3 from "d3";

type CitationData = {
  title: string;
  url: string;
  authors: string;
  journal: string;
  citations: { year: number; count: number }[];
}[];

export default function CitationChart({ data }: { data: CitationData }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Clear previous render (important for HMR/dev reloads)
    ref.current.innerHTML = "";

    const allYears = data.flatMap((d) => d.citations.map((c) => c.year));
    const allCounts = data.flatMap((d) => d.citations.map((c) => c.count));

    const margin = { top: 40, right: 40, bottom: 40, left: 40 };
    const width = 900 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create the SVG container
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleLinear()
      .domain(d3.extent(allYears) as [number, number])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(allCounts) as number])
      .nice()
      .range([height, 0]);

    // svg.append("g").attr("class", "y-axis").call(d3.axisLeft(y));
    
    const colorScale = d3.scaleLinear<string>()
    .domain([0, d3.max(allCounts) as number]) // min → max citations
    .range(["#333333", "#ff00ff"]); // dark grey → white

    // Define gradients for the color of each line
    const defs = svg.append("defs");

    // For displaying points on hover
    const pointsGroup = svg.append("g").attr("class", "points-group");


    data.forEach((article, i) => {
      const gradientId = `line-gradient-${i}`;

      const maxCount = d3.max(article.citations, d => d.count)!;

      // Normalize each point's color by this line's max
      const stops = article.citations.map(c => ({
        offset: ((c.year - d3.min(allYears)!) / (d3.max(allYears)! - d3.min(allYears)!)) * 100,
        color: colorScale(c.count * (1 / maxCount) * d3.max(allCounts)!) // adjust scaling
      }));

      const gradient = defs.append("linearGradient")
        .attr("id", gradientId)
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", x(d3.min(allYears)!))
        .attr("x2", x(d3.max(allYears)!))
        .attr("y1", 0)
        .attr("y2", 0);

      gradient.selectAll("stop")
        .data(stops)
        .enter()
        .append("stop")
        .attr("offset", d => `${d.offset}%`)
        .attr("stop-color", d => d.color);
    });

    let selected: SVGPathElement | null = null;
    let hovered: SVGPathElement | null = null;

    const line = d3
      .line<{ year: number; count: number }>()
      .x((d) => x(d.year))
      .y((d) => y(d.count))
      .curve(d3.curveMonotoneX); // smooth interpolation

    svg.selectAll(".citation-line")
      .data(data)
      .enter()
      .append("path")
      .attr("d", d => line(d.citations)!)
      .attr("fill", "none")
      .attr("stroke-width", 3)
      .attr("stroke", (_, i) => `url(#line-gradient-${i})`)
      // .on("mouseout", function () {
      //   d3.select(this).attr("stroke", (_, i) => `url(#line-gradient-${i})`)
      //   d3.select(this).attr("stroke-width", 3);
      //   // Clear old points
      //   pointsGroup.selectAll("circle").remove();
      // })
      .on("mouseover", function (event, d) {

        if (hovered && hovered !== selected) {
          const idx = d3.select(hovered).datum().id ?? data.indexOf(d3.select(hovered).datum());
          d3.select(hovered)
            .attr("stroke", `url(#line-gradient-${idx})`)
            .attr("stroke-width", 3);
        }
        // mark this as hovered
        hovered = this;

        d3.select(this).attr("stroke", "white").attr("stroke-width", 4);
        // Reset all lines
        svg.selectAll(".citation-line")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 2);

        // Highlight selected line
        d3.select(this)
          .attr("stroke", "white")
          .attr("stroke-width", 4);

        // Clear old points
        pointsGroup.selectAll("circle").remove();

        // Add points for this line
        pointsGroup.selectAll("circle")
          .data(d.citations)
          .enter()
          .append("circle")
          .attr("cx", c => x(c.year))
          .attr("cy", c => y(c.count))
          .attr("r", 4)
          .attr("fill", "crimson")
          .attr("stroke", "white")
          .attr("stroke-width", 1.5);

        // Calculate total citations
        const total = d.citations.reduce((sum, c) => sum + c.count, 0);

        // Update info box
        d3.select("#article-name").html(
          `<a href="${d.url}" target="_blank" class="text-indigo-400 hover:underline">${d.title}</a>`
        );
        d3.select("#authors").text(`${d.authors}`);
        d3.select("#journal").text(`${d.journal}`);
        d3.select("#citation-count").text(`Total Citations: ${total}`);
      });

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .attr("class", "x-axis")
      .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  }, [data]);

  return <div>
    <div ref={ref}></div>
    <div id="info" class="mt-4 min-h-32">
      <div id="article-name" class="text-lg font-bold text-indigo-200"></div>
      <div id="authors" class="text-l text-gray-300"></div>
      <div id="journal" class="text-l text-gray-300"></div>
      <div id="citation-count" class="text-l text-gray-300"></div>
    </div>
    </div>
}
