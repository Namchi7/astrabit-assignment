import { useEffect, useRef } from "react";
import * as d3 from "d3";

const data = [
  { id: 0, amount: 25000, label: "Bajaj Finserv", color: "#6C63FF" },
  { id: 1, amount: 20000, label: "Shriram Finance", color: "#FA9D17" },
  { id: 2, amount: 15000, label: "Mahindra Finance", color: "#B9C606" },
  {
    id: 3,
    amount: 40000,
    label: "Utkarsh Small Finance Bank",
    color: "#59CBD3",
  },
];

function PieChartComp() {
  const svgPieDivRef = useRef();
  const svgPieRef = useRef();

  let dataTotal = 0;
  data.forEach((item) => (dataTotal += item.amount));

  useEffect(() => {
    const renderPieSvg = () => {
      const width = svgPieDivRef.current.offsetWidth;
      const height = svgPieDivRef.current.offsetHeight;

      // Create the pie layout and arc generator.
      const pie = d3
        .pie()
        .sort(null)
        .value((d) => d.amount);

      const arc = d3
        .arc()
        .innerRadius(0)
        .outerRadius(Math.min(width, height) / 2 - 1);

      const labelRadius = arc.outerRadius()() * 0.8;

      // A separate arc generator for labels.
      const arcLabel = d3
        .arc()
        .innerRadius(labelRadius)
        .outerRadius(labelRadius);

      const arcs = pie(data);

      // Create the SVG container.
      const svg = d3
        .select(svgPieRef.current)
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

      // Add a sector path for each value.
      svg
        .append("g")
        .attr("stroke", "white")
        .selectAll()
        .data(arcs)
        .join("path")
        .attr("fill", (d) => d.data.color)
        .attr("d", arc)
        .append("title")
        .text(
          (d) =>
            `${d.data.amount.toLocaleString("en-US")} (${
              (d.data.amount / dataTotal) * 100
            }%)`
        );

      // Create a new arc generator to place a label close to the edge.
      // The label shows the value if there is enough room.

      svg
        .append("g")
        .attr("text-anchor", "middle")
        .selectAll()
        .data(arcs)
        .join("text")
        .attr("transform", (d) => `translate(${arcLabel.centroid(d)})`)
        .call((text) =>
          text
            .append("tspan")
            .attr("y", "-0.4em")
            .attr("font-weight", "bold")
            .style("fill", "white")
            .text(
              (d) =>
                `${d.data.amount.toLocaleString("en-US")}
              (${(d.data.amount / dataTotal) * 100}%)`
            )
        );
    };
    renderPieSvg();

    window.addEventListener("resize", renderPieSvg);

    return () => {
      window.removeEventListener("resize", renderPieSvg);
    };
  }, [data]);

  return (
    <div ref={svgPieDivRef} className="w-full h-full">
      <svg ref={svgPieRef} className=""></svg>
    </div>
  );
}

export default PieChartComp;
