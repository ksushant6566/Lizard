import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


const Pie3D = ({data}) => {
  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        subCaption: "different languages used by the user",
        theme: "fusion",
        pieRadius: "30%"
      },
      data
    }
  }

  return (<ReactFC {...chartConfigs} />);
}
// STEP 4 - Creating the DOM element to pass the react-fusioncharts component

export default Pie3D;