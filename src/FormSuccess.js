import React, {  useRef, useEffect } from "react";
import * as d3 from "d3";

const FormSuccess = (props) => {


	
	const data =props.data
	  const margin = { top: 50, bottom: 50, left: 50, right: 50 };
  const svgRef = useRef();
  useEffect(() => {
    const w = 900;
    const h = 450;
    const svg = d3
      .select(svgRef.current)
      .attr('width', w - margin.left - margin.right)
  .attr('height', h - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, w, h]);

    const xScale = d3
      .scaleBand()
      .domain(d3.range(data.length))
	  .range([margin.left, w - margin.right])
	  .padding(0.1)
    const yScale = d3.scaleLinear().domain([0, 100])
	.range([h - margin.bottom, margin.top])

    function yAxis(g) {
		g.attr("transform", `translate(${margin.left}, 0)`)
		  .call(d3.axisLeft(yScale).ticks(null, data.format))
		  .attr("font-size", '20px')
	  }
	  
	  function xAxis(g) {
		g.attr("transform", `translate(0,${h - margin.bottom})`)
		  .call(d3.axisBottom(xScale).tickFormat(i => data[i].name))
		  .attr("font-size", '20px')
	  }
	  

    svg
	.append("g")
	.attr("fill", 'royalblue')
	.selectAll("rect")
	.data(data.sort((a, b) => d3.descending(a.score, b.score)))
	.join("rect")
	  .attr("x", (d, i) => xScale(i))
	  .attr("y", d => yScale(d.score))
	  .attr('title', (d) => d.score)
	  .attr("class", "rect")
	  .attr("height", d => yScale(0) - yScale(d.score))
	  .attr("width", xScale.bandwidth());


	  svg.append("g").call(xAxis);
	  svg.append("g").call(yAxis);
  }, [data]);

  return (
    <div className="success">
	<h1>Data Changes on every Login</h1>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default FormSuccess;
