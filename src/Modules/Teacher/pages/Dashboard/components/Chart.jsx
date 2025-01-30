import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useTranslation } from "react-i18next";

const ApexChart = () => {
  const {i18n} = useTranslation()
  const [state, setState] = useState({
    series: [
      {
        name: `${i18n.language === 'ar'? "المشاهدات" : "Views"}`,
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
        text: `${i18n.language === 'ar'? "احصائيات الكورسات" : "Course Statistics"}`,
        align: "left",
      },
      subtitle: {
        text: `${i18n.language === 'ar'? "عدد المشاهدات " : "Monthly Views"}`,
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
          text: `${i18n.language === 'ar'? "الشهور" : "Months"}`,
        },
      },
      yaxis: {
        title: {
          text: `${i18n.language === 'ar'? "المشاهدات" : "Views"}`,
        },
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  });

  return (
    <div
      className="bg-white p-2 rounded-lg group hover:shadow-lg "
      style={{ width: "100%" }}
    >
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
