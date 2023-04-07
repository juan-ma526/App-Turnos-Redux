import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineChart = ({ datos }) => {
  const svgRef = useRef(null);
  const asistencia = datos.filter((shift) => {
    return shift.statusHour === "finished";
  });
  const faltas = datos.filter((shift) => {
    return shift.statusHour === "cancelled";
  });

  const data = [asistencia.length, faltas.length];

  // definir los márgenes del gráfico
  const margin = { top: 20, right: 20, bottom: 30, left: 80 };
  const width = 715 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  useEffect(() => {
    const colors = ["#CC6AFF", "#DD2626"];
    // crear un nuevo gráfico
    const svg = d3
      .select(svgRef.current)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // crear escalas para los ejes X e Y
    const xScale = d3
      .scaleLinear()
      .domain([0, Math.max(...data)])
      .range([0, width]);

    const yScale = d3
      .scaleBand()
      .domain(data.map((d, i) => i))
      .range([height, 0])
      .padding(0.1);

    // agregar los rectángulos para los datos
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .style("fill", (_, i) => colors[i])
      .attr("x", 0)
      .attr("y", (d, i) => yScale(i))
      .attr("height", yScale.bandwidth())
      .attr("width", (d) => xScale(d));

    // agregar los ejes X e Y al gráfico
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append("g").call(d3.axisLeft(yScale));
  }, [data]);

  return (
    <svg
      ref={svgRef}
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    ></svg>
  );
};

export default LineChart;
