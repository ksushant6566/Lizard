import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);



const Bar3D = ({ data }) => {
    const chartConfigs = {
      type: "bar3d", // The chart type
      width: "100%", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Chart Configuration
        chart: {
          caption: "Most Forked",
          theme: "candy",
          xAxisName: "Forks",
          yAxisName: "Repos",
          xAxisNameFontSize: "16px",
          yAxisNameFontSize: "16px",
        },
        data
    }
  }
  
  return (<ReactFC {...chartConfigs} />);
};

export default Bar3D;