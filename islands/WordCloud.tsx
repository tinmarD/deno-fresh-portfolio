// islands/WordCloud.tsx
import { useEffect, useRef } from "preact/hooks";
import * as d3 from "d3";
import cloud from "d3-cloud";

interface Word {
  text: string;
  value: number;
}

interface WordCloudProps {
  width?: number;
  height?: number;
  csvPath: string;
}

export default function WordCloud(props: WordCloudProps) {
  const { width = 800, height = 600, csvPath } = props;
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const fetchAndRenderWordCloud = async () => {
      try {
        // Fetch CSV data directly from the static folder
        const response = await fetch(csvPath);
        const csvText = await response.text();
        
        // Parse CSV data
        const words: Word[] = d3.csvParse(csvText, (d) => {
          return {
            text: d.word || "",  // Assuming 'word' is the column name in CSV
            value: +d.count || 0 // Assuming 'count' is the column name in CSV
          };
        }).filter(d => d.text && d.value > 0);

        if (!words.length) {
          console.error("No valid words found in CSV");
          return;
        }

        // Clear any existing content
        if (svgRef.current) {
          d3.select(svgRef.current).selectAll("*").remove();
        }

        // Set up color scale
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        // Create layout
        const layout = cloud()
          .size([width, height])
          .words(words)
          .padding(5)
          .rotate(() => ~~(Math.random() * 2) * 90)
          .font("Impact")
          .fontSize(d => Math.sqrt(d.value) * 10)
          .on("end", draw);

        // Start layout calculation
        layout.start();

        // Function to draw the word cloud
        function draw(words: any[]) {
          d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${width / 2},${height / 2})`)
            .selectAll("text")
            .data(words)
            .enter()
            .append("text")
            .style("font-size", d => `${d.size}px`)
            .style("font-family", "Impact")
            .style("fill", (_, i) => color(i.toString()))
            .attr("text-anchor", "middle")
            .attr("transform", d => `translate(${d.x},${d.y}) rotate(${d.rotate})`)
            .text(d => d.text);
        }
      } catch (error) {
        console.error("Error loading or rendering word cloud:", error);
      }
    };

    fetchAndRenderWordCloud();
  }, [csvPath, width, height]);

  return (
    <div className="word-cloud-container">
      <p> MOKOKO </p>
      <svg ref={svgRef}></svg>
    </div>
  );
}