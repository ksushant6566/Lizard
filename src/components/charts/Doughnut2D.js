import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);



const Doughnut2d = ({data}) => {
    const chartConfigs = {
      type: "doughnut2d", // The chart type
      width: "100%", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Chart Configuration
        chart: {
          caption: "Stars Per Language",
          theme: "candy",
          decimals : 0,
          doughnutRadius: '45%',
          showPercentvalues: 0
        },
        data
    }
  }
  
  return (<ReactFC {...chartConfigs} />);
};

export default Doughnut2d;
