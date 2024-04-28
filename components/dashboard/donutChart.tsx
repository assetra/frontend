// components/DonutChart.js
import React from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  const options = {
    chart: {
      type: "donut",
      dropShadow: {
        enabled: false,
        color: "#111",
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.2,
      },
    },
    labels: ["BTC", "ETH", "USDT"],
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "22px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              color: "undefined",
              offsetY: -10,
              // formatter: function (val: any) {
              //   return val;
              // },
            },
            value: {
              show: false,
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              color: "undefined",
              offsetY: 16,
              // formatter: function (val: any) {
              //   return val;
              // },
            },
            total: {
              show: true,
              showAlways: false,
              label: "2.31%",
              fontSize: "22px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              color: "white",
              // formatter: function (w: any) {
              //   return w.globals.seriesTotals.reduce((a: any, b: any) => {
              //     return a + b;
              //   }, 0);
              // },
            },
          },
        },
      },
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            // width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [2.36, 1.8, 1.64];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="donut" />
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
