// import { useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const TotalChart = ({studentPerCourse}) => {
//   const [series, setSeries] = useState([139, 124, 90]);
// console.log(studentPerCourse)
//   const options = {
//     chart: {
//       width: 380,
//       type: "donut",
//     },
//     labels: ["Grade 1", "Grade 2", "Grade 3"],
//     dataLabels: {
//       enabled: false,
//     },
//     plotOptions: {
//       pie: {
//         donut: {
//           labels: {
//             show: true,
//             total: {
//               show: true,
//               label: "Total",
//               formatter: () => series.reduce((acc, val) => acc + val, 0),
//             },
//           },
//         },
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 768,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             show: false,
//           },
//         },
//       },
//     ],
//     legend: {
//       position: "right",
//       offsetY: 0,
//       height: 230,
//     },
//   };

//   return (
//     <div>
//       <div className="chart-wrap  ">
//         <div id="chart">
//           <ReactApexChart
//             options={options}
//             series={series}
//             type="donut"
//             width={380}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TotalChart;


import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useTranslation } from "react-i18next";

const TotalChart = ({ studentPerCourse }) => {
  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);
const {i18n}=useTranslation()
 
  useEffect(() => {
    if (studentPerCourse && studentPerCourse.length > 0) {
      const counts = studentPerCourse.map(course => course.count);
      const titles = studentPerCourse.map(course => course.title);
      setSeries(counts);
      setLabels(titles);
    }
  }, [studentPerCourse]);

  const options = {
    chart: {
      width: 380,
      type: "donut",
    },
  
    labels: labels,
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
              label: `${i18n.language ==='ar'? "الاجمالي" : "Total"}`,
              formatter: () => series.reduce((acc, val) => acc + val, 0),
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 768,
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
