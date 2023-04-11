import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

const PieChart = ({ datos }) => {
  const svgRef = useRef(null);
  const asistencia = datos.filter((shift) => {
    return shift.statusHour === "finished";
  });
  const faltas = datos.filter((shift) => {
    return shift.statusHour === "cancelled";
  });
  const data = [asistencia.length, faltas.length];
  const width = 158;
  const height = 158;

  useEffect(() => {
    const colors = ["#CC6AFF", "#A442F1"];
    const svg = d3.select(svgRef.current);

    const pie = d3.pie()(data);
    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(Math.min(width, height) / 2 - 1);

    svg
      .selectAll("path")
      .data(pie)
      .join("path")
      .attr("d", arc)
      .attr("fill", (_, i) => colors[i])
      .attr("transform", `translate(${width / 2}, ${height / 2})`);
  }, []);

  return (
    <svg className="pie-chart" ref={svgRef} width={width} height={height}></svg>
  );
};

export default PieChart;
