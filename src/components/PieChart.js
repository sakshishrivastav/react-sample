import React, { useState, useLayoutEffect } from 'react'
import * as d3 from "d3";
import useContainerDimensions from '../utils/useContainerDimensions';


const chartRef = React.createRef();


const Arc = ({d, innerRadius, hoverduration, sliceMove, sliceGrow, outerRadius}) =>{

  const generateArcData = d3.arc().outerRadius(outerRadius).innerRadius(innerRadius);

  const arcOver = (target) => {
    const el = d3.select(target);
    const isselected = el.classed('selected');
    if(isselected) return;
    el.transition()
      .duration(hoverduration)
      .attr('opacity', '.7')
      .attr('stroke', '#98898955')
      .attr('stroke-width', 4);
  }

  const arcOut = (target) => {
    const el = d3.select(target);
    const isselected = el.classed('selected');
    if(isselected) return;
    el.transition()
      .duration(hoverduration)
      .attr('opacity', '1')
      .attr('stroke', 'transparent')
      .attr('stroke-width', 0);
  }

  const arcClicked = ( target, d ) => {
    const el = d3.select(target);
    const isselected = el.classed('selected');

    el.attr('class', isselected ? '' : 'selected')
      .attr('transform', isselected ? 'translate(0, 0)' : calcTranslate(d, sliceMove))
      .attr('stroke', isselected ? 'transparent' : '#98898955')
      .attr('stroke-width', isselected ? 0 : 4);
    
    const outerRadiusUpdate = isselected ? outerRadius : outerRadius + sliceGrow
    el.transition()
      .attr('opacity', '1')
      .attrTween("d", () => {
        const interpolator = d3.interpolate(outerRadius,  outerRadiusUpdate);
        return t => {
          const outerRadius = interpolator(t);
          return generateArcData.outerRadius(outerRadius)(d);
        };
      });
  }

  const calcTranslate = (data, move) => {
    const moveAngle = data.startAngle + ((data.endAngle - data.startAngle) / 2);
    return `translate(${- move * Math.cos(moveAngle + Math.PI / 2)}, ${- move * Math.sin(moveAngle + Math.PI / 2)})`;
  }

  return (
    <path
      fill= {d.data.color}
      d={generateArcData(d)}
      onMouseOver={event => arcOver(event.target)}
      onMouseOut={event => arcOut(event.target)}
      onClick={event => arcClicked(event.target, d )}
    />
  );
}

const ResponsivePieChart = ({dataSet, pieMAxSize = 800, sliceGrow = 20, sliceMove = 4, revealDuration = 3000}) => {

  // Animated using React Effects

  const { width } = useContainerDimensions(chartRef);
  const size = Math.min(width, pieMAxSize);

  const [revealPercent, setRevealPercent] = useState(0);

  const pieGenerator = d3.pie()
    .startAngle(0)
    .endAngle(2*Math.PI*revealPercent)
    .sort(null)
    .value(data => data.count);
  
  
  useLayoutEffect(() => {
    d3.selection()
      .transition('pie-reveal').duration(revealDuration)
      .attrTween('visibility',() => {
        return t => {
          const n = d3.interpolate(0, t)(t)
          return setRevealPercent(n)
        }
      })
  }, [revealDuration])


  return (
    <div className="chart" ref={chartRef}>
      <svg width={'100%'} height={size+sliceMove*2}  id="piechart">
        <g transform={`translate(${width/2}, ${size/2+sliceMove})`}>
          {pieGenerator(dataSet).map((data, i)=>(
            <Arc key={`${data.type}${i}`} 
              d={data} 
              innerRadius={0} 
              outerRadius={size / 2 - sliceGrow}
              hoverduration={250} 
              sliceMove={sliceMove} 
              sliceGrow={sliceGrow} 
            />
          ))}
        </g>
      </svg>
      
      <div className="legend-pie col-12 mb-2 d-flex justify-content-center">
        <div className="d-flex">
          {dataSet.map((x, i) =>(
            <div className="me-4" key={`${x.name}_legen`+i} >
              <i className="me-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={x.color} className="bi bi-circle-fill" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8"/>
                </svg>
              </i>
              <span>{x.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResponsivePieChart;