import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


const Pie3D = ({data}) => {
  const chartConfigs = {
    type: "pie3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Languages",
        subCaption: "different languages used by the user",
        theme: "candy",
        pieRadius: "50%"
      },
      data
    }
  }

  return (<ReactFC {...chartConfigs} />);
}
// STEP 4 - Creating the DOM element to pass the react-fusioncharts component

export default Pie3D;