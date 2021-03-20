import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);



const Column3D = ({ data }) => {
    const chartConfigs = {
      type: "column3d", // The chart type
      width: "100%", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Chart Configuration
        chart: {
          caption: "Most Popular",
          theme: "candy",
          xAxisName: "Repos",
          yAxisName: "Stars",
          xAxisNameFontSize: "16px",
          yAxisNameFontSize: "16px",
        },
        data
    }
  }
  
  return (<ReactFC {...chartConfigs} />);
};

export default Column3D;
