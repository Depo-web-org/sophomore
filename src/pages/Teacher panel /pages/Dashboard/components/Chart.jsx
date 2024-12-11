import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Views",
        data: [120, 200, 150, 80, 70, 110, 130, 170, 220, 240, 180, 200], // Example data for monthly views
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#F15C54"],
      title: {
        text: "Course Statistics",
        align: "left",
      },
      subtitle: {
        text: "Monthly Views",
        align: "left",
      },
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ], // Months of the year
      xaxis: {
        type: "category",
        title: {
          text: "Months",
        },
      },
      yaxis: {
        title: {
          text: "Views",
        },
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  });

  return (
    <div className="bg-white p-2 rounded-lg" style={{ width: "100%" }}>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={380}
        />
      </div>
    </div>
  );
};

export default ApexChart;
