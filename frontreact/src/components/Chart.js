import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export const Chart = ({ width = 600, height = 600, data }) => {
  const barChart = useRef();

  useEffect(() => {
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = d3.select(barChart.current);
    svg.attr("width", width);
    svg.attr("height", height);

    let g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const y = d3.scaleLinear().domain([0, 500]).range([iheight, 0]);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d._id))
      .range([0, iwidth])
      .padding(0.1);

    const bars = g.selectAll("rect").data(data);

    bars
      .enter()
      .append("rect")
      .attr("class", "bar")
      .style("fill", "steelblue")
      .attr("x", (d) => x(d._id))
      .attr("y", (d) => y(d.stock))
      .attr("height", (d) => iheight - y(d.stock))
      .attr("width", x.bandwidth());

    g.append("g")
      .classed("x--axis", true)
      .call(d3.axisBottom(x))
      .attr("transform", `translate(0, ${iheight})`);

    g.append("g").classed("y--axis", true).call(d3.axisLeft(y));

    const tooldiv = d3
      .select(barChart.current)
      .append("div")
      .style("visibility", "hidden")
      .style("position", "absolute")
      .style("background-color", "white");

    svg
      .append("g")
      .selectAll("path")
      .data("bars")
      .attr("d", "bars")
      .on("mouseover", (e, d) => {
        tooldiv
          .style("visibility", "visible")
          .text(`${data.name}:`, `${data.stock}`);
      })
      .on("mousemove", (e, d) => {
        tooldiv
          .style("top", e.pageY - 50 + "px")
          .style("left", e.pageX - 50 + "px");
      })
      .on("mouseout", () => {
        tooldiv.style("visibility", "hidden");
      });
  });

  return (
    <div id="chartArea">
      <svg ref={barChart}></svg>
    </div>
  );
};
