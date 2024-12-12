import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const TotalChart = () => {
  const [series, setSeries] = useState([139, 124, 90]);

  const options = {
    chart: {
      width: 380,
      type: "donut",
    },
    labels: ["Grade 1", "Grade 2", "Grade 3"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: () => series.reduce((acc, val) => acc + val, 0),
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
  };

  return (
    <div>
      <div className="chart-wrap">
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width={380}
          />
        </div>
      </div>
    </div>
  );
};

export default TotalChart;
