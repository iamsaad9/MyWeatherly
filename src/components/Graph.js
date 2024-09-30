import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: "series1",
        data: [
            // January
            [new Date('2023-01-01').getTime(), 75],
            [new Date('2023-01-02').getTime(), 92],
            [new Date('2023-01-03').getTime(), 27],
            [new Date('2023-01-04').getTime(), 49],
            [new Date('2023-01-05').getTime(), 18],
            [new Date('2023-01-06').getTime(), 53],
            [new Date('2023-01-07').getTime(), 67],
            [new Date('2023-01-08').getTime(), 31],
            [new Date('2023-01-09').getTime(), 44],
            [new Date('2023-01-10').getTime(), 59],
            [new Date('2023-01-11').getTime(), 39],
            [new Date('2023-01-12').getTime(), 72],
            [new Date('2023-01-13').getTime(), 88],
            [new Date('2023-01-14').getTime(), 91],
            [new Date('2023-01-15').getTime(), 75],
            [new Date('2023-01-16').getTime(), 68],
            [new Date('2023-01-17').getTime(), 62],
            [new Date('2023-01-18').getTime(), 45],
            [new Date('2023-01-19').getTime(), 82],
            [new Date('2023-01-20').getTime(), 53],
            [new Date('2023-01-21').getTime(), 38],
            [new Date('2023-01-22').getTime(), 65],
            [new Date('2023-01-23').getTime(), 71],
            [new Date('2023-01-24').getTime(), 58],
            [new Date('2023-01-25').getTime(), 77],
            [new Date('2023-01-26').getTime(), 60],
            [new Date('2023-01-27').getTime(), 82],
            [new Date('2023-01-28').getTime(), 45],
            [new Date('2023-01-29').getTime(), 89],
            [new Date('2023-01-30').getTime(), 71],
            [new Date('2023-01-31').getTime(), 64],
          
            // February
            [new Date('2023-02-01').getTime(), 52],
            [new Date('2023-02-02').getTime(), 37],
            [new Date('2023-02-03').getTime(), 29],
            [new Date('2023-02-04').getTime(), 74],
            [new Date('2023-02-05').getTime(), 56],
            [new Date('2023-02-06').getTime(), 62],
            [new Date('2023-02-07').getTime(), 51],
            [new Date('2023-02-08').getTime(), 79],
            [new Date('2023-02-09').getTime(), 68],
            [new Date('2023-02-10').getTime(), 43],
            [new Date('2023-02-11').getTime(), 70],
            [new Date('2023-02-12').getTime(), 91],
            [new Date('2023-02-13').getTime(), 87],
            [new Date('2023-02-14').getTime(), 40],
            [new Date('2023-02-15').getTime(), 73],
            [new Date('2023-02-16').getTime(), 85],
            [new Date('2023-02-17').getTime(), 55],
            [new Date('2023-02-18').getTime(), 32],
            [new Date('2023-02-19').getTime(), 62],
            [new Date('2023-02-20').getTime(), 74],
            [new Date('2023-02-21').getTime(), 67],
            [new Date('2023-02-22').getTime(), 49],
            [new Date('2023-02-23').getTime(), 58],
            [new Date('2023-02-24').getTime(), 76],
            [new Date('2023-02-25').getTime(), 80],
            [new Date('2023-02-26').getTime(), 65],
            [new Date('2023-02-27').getTime(), 60],
            [new Date('2023-02-28').getTime(), 79],
          
            // March
            [new Date('2023-03-01').getTime(), 64],
            [new Date('2023-03-02').getTime(), 76],
            [new Date('2023-03-03').getTime(), 89],
            [new Date('2023-03-04').getTime(), 44],
            [new Date('2023-03-05').getTime(), 77],
            [new Date('2023-03-06').getTime(), 52],
            [new Date('2023-03-07').getTime(), 93],
            [new Date('2023-03-08').getTime(), 71],
            [new Date('2023-03-09').getTime(), 34],
            [new Date('2023-03-10').getTime(), 28],
            [new Date('2023-03-11').getTime(), 39],
            [new Date('2023-03-12').getTime(), 67],
            [new Date('2023-03-13').getTime(), 85],
            [new Date('2023-03-14').getTime(), 70],
            [new Date('2023-03-15').getTime(), 54],
            [new Date('2023-03-16').getTime(), 84],
            [new Date('2023-03-17').getTime(), 90],
            [new Date('2023-03-18').getTime(), 38],
            [new Date('2023-03-19').getTime(), 80],
            [new Date('2023-03-20').getTime(), 72],
            [new Date('2023-03-21').getTime(), 61],
            [new Date('2023-03-22').getTime(), 69],
            [new Date('2023-03-23').getTime(), 49],
            [new Date('2023-03-24').getTime(), 64],
            [new Date('2023-03-25').getTime(), 77],
            [new Date('2023-03-26').getTime(), 73],
            [new Date('2023-03-27').getTime(), 68],
            [new Date('2023-03-28').getTime(), 46],
            [new Date('2023-03-29').getTime(), 58],
            [new Date('2023-03-30').getTime(), 81],
            [new Date('2023-03-31').getTime(), 60],
          
            // April
            [new Date('2023-04-01').getTime(), 92],
            [new Date('2023-04-02').getTime(), 87],
            [new Date('2023-04-03').getTime(), 77],
            [new Date('2023-04-04').getTime(), 68],
            [new Date('2023-04-05').getTime(), 54],
            [new Date('2023-04-06').getTime(), 73],
            [new Date('2023-04-07').getTime(), 60],
            [new Date('2023-04-08').getTime(), 80],
            [new Date('2023-04-09').getTime(), 92],
            [new Date('2023-04-10').getTime(), 81],
            [new Date('2023-04-11').getTime(), 57],
            [new Date('2023-04-12').getTime(), 63],
            [new Date('2023-04-13').getTime(), 72],
            [new Date('2023-04-14').getTime(), 75],
            [new Date('2023-04-15').getTime(), 64],
            [new Date('2023-04-16').getTime(), 49],
            [new Date('2023-04-17').getTime(), 82],
            [new Date('2023-04-18').getTime(), 71],
            [new Date('2023-04-19').getTime(), 54],
            [new Date('2023-04-20').getTime(), 68],
            [new Date('2023-04-21').getTime(), 55],
            [new Date('2023-04-22').getTime(), 69],
            [new Date('2023-04-23').getTime(), 73],
            [new Date('2023-04-24').getTime(), 87],
            [new Date('2023-04-25').getTime(), 76],
            [new Date('2023-04-26').getTime(), 65],
            [new Date('2023-04-27').getTime(), 53],
            [new Date('2023-04-28').getTime(), 89],
            [new Date('2023-04-29').getTime(), 84],
            [new Date('2023-04-30').getTime(), 91],
          
            // May
            [new Date('2023-05-01').getTime(), 78],
            [new Date('2023-05-02').getTime(), 82],
            [new Date('2023-05-03').getTime(), 67],
            [new Date('2023-05-04').getTime(), 55],
            [new Date('2023-05-05').getTime(), 71],
            [new Date('2023-05-06').getTime(), 64],
            [new Date('2023-05-07').getTime(), 88],
            [new Date('2023-05-08').getTime(), 45],
            [new Date('2023-05-09').getTime(), 92],
            [new Date('2023-05-10').getTime(), 63],
            [new Date('2023-05-11').getTime(), 70],
            [new Date('2023-05-12').getTime(), 53],
            [new Date('2023-05-13').getTime(), 60],
            [new Date('2023-05-14').getTime(), 79],
            [new Date('2023-05-15').getTime(), 83],
            [new Date('2023-05-16').getTime(), 91],
            [new Date('2023-05-17').getTime(), 72],
            [new Date('2023-05-18').getTime(), 68],
            [new Date('2023-05-19').getTime(), 82],
            [new Date('2023-05-20').getTime(), 75],
            [new Date('2023-05-21').getTime(), 64],
            [new Date('2023-05-22').getTime(), 89],
            [new Date('2023-05-23').getTime(), 80],
            [new Date('2023-05-24').getTime(), 74],
            [new Date('2023-05-25').getTime(), 56],
            [new Date('2023-05-26').getTime(), 70],
            [new Date('2023-05-27').getTime(), 65],
            [new Date('2023-05-28').getTime(), 77],
            [new Date('2023-05-29').getTime(), 81],
            [new Date('2023-05-30').getTime(), 85],
            [new Date('2023-05-31').getTime(), 93],
          
            // June
            [new Date('2023-06-01').getTime(), 68],
            [new Date('2023-06-02').getTime(), 75],
            [new Date('2023-06-03').getTime(), 82],
            [new Date('2023-06-04').getTime(), 90],
            [new Date('2023-06-05').getTime(), 77],
            [new Date('2023-06-06').getTime(), 66],
            [new Date('2023-06-07').getTime(), 80],
            [new Date('2023-06-08').getTime(), 62],
            [new Date('2023-06-09').getTime(), 54],
            [new Date('2023-06-10').getTime(), 71],
            [new Date('2023-06-11').getTime(), 86],
            [new Date('2023-06-12').getTime(), 82],
            [new Date('2023-06-13').getTime(), 66],
            [new Date('2023-06-14').getTime(), 73],
            [new Date('2023-06-15').getTime(), 88],
            [new Date('2023-06-16').getTime(), 79],
            [new Date('2023-06-17').getTime(), 68],
            [new Date('2023-06-18').getTime(), 82],
            [new Date('2023-06-19').getTime(), 75],
            [new Date('2023-06-20').getTime(), 84],
            [new Date('2023-06-21').getTime(), 77],
            [new Date('2023-06-22').getTime(), 69],
            [new Date('2023-06-23').getTime(), 56],
            [new Date('2023-06-24').getTime(), 64],
            [new Date('2023-06-25').getTime(), 73],
            [new Date('2023-06-26').getTime(), 88],
            [new Date('2023-06-27').getTime(), 91],
            [new Date('2023-06-28').getTime(), 65],
            [new Date('2023-06-29').getTime(), 72],
            [new Date('2023-06-30').getTime(), 78],
          
            // July
            [new Date('2023-07-01').getTime(), 80],
            [new Date('2023-07-02').getTime(), 70],
            [new Date('2023-07-03').getTime(), 90],
            [new Date('2023-07-04').getTime(), 81],
            [new Date('2023-07-05').getTime(), 75],
            [new Date('2023-07-06').getTime(), 84],
            [new Date('2023-07-07').getTime(), 72],
            [new Date('2023-07-08').getTime(), 68],
            [new Date('2023-07-09').getTime(), 79],
            [new Date('2023-07-10').getTime(), 74],
            [new Date('2023-07-11').getTime(), 65],
            [new Date('2023-07-12').getTime(), 77],
            [new Date('2023-07-13').getTime(), 82],
            [new Date('2023-07-14').getTime(), 70],
            [new Date('2023-07-15').getTime(), 64],
            [new Date('2023-07-16').getTime(), 89],
            [new Date('2023-07-17').getTime(), 78],
            [new Date('2023-07-18').getTime(), 80],
            [new Date('2023-07-19').getTime(), 86],
            [new Date('2023-07-20').getTime(), 81],
            [new Date('2023-07-21').getTime(), 72],
            [new Date('2023-07-22').getTime(), 69],
            [new Date('2023-07-23').getTime(), 90],
            [new Date('2023-07-24').getTime(), 68],
            [new Date('2023-07-25').getTime(), 74],
            [new Date('2023-07-26').getTime(), 71],
            [new Date('2023-07-27').getTime(), 65],
            [new Date('2023-07-28').getTime(), 85],
            [new Date('2023-07-29').getTime(), 72],
            [new Date('2023-07-30').getTime(), 88],
            [new Date('2023-07-31').getTime(), 90],
          
            // August
            [new Date('2023-08-01').getTime(), 74],
            [new Date('2023-08-02').getTime(), 89],
            [new Date('2023-08-03').getTime(), 92],
            [new Date('2023-08-04').getTime(), 85],
            [new Date('2023-08-05').getTime(), 78],
            [new Date('2023-08-06').getTime(), 81],
            [new Date('2023-08-07').getTime(), 63],
            [new Date('2023-08-08').getTime(), 90],
            [new Date('2023-08-09').getTime(), 68],
            [new Date('2023-08-10').getTime(), 76],
            [new Date('2023-08-11').getTime(), 64],
            [new Date('2023-08-12').getTime(), 75],
            [new Date('2023-08-13').getTime(), 87],
            [new Date('2023-08-14').getTime(), 93],
            [new Date('2023-08-15').getTime(), 72],
            [new Date('2023-08-16').getTime(), 86],
            [new Date('2023-08-17').getTime(), 54],
            [new Date('2023-08-18').getTime(), 66],
            [new Date('2023-08-19').getTime(), 78],
            [new Date('2023-08-20').getTime(), 80],
            [new Date('2023-08-21').getTime(), 71],
            [new Date('2023-08-22').getTime(), 83],
            [new Date('2023-08-23').getTime(), 62],
            [new Date('2023-08-24').getTime(), 64],
            [new Date('2023-08-25').getTime(), 89],
            [new Date('2023-08-26').getTime(), 82],
            [new Date('2023-08-27').getTime(), 70],
            [new Date('2023-08-28').getTime(), 79],
            [new Date('2023-08-29').getTime(), 73],
            [new Date('2023-08-30').getTime(), 60],
            [new Date('2023-08-31').getTime(), 66],
          
            // September
            [new Date('2023-09-01').getTime(), 79],
            [new Date('2023-09-02').getTime(), 82],
            [new Date('2023-09-03').getTime(), 65],
            [new Date('2023-09-04').getTime(), 74],
            [new Date('2023-09-05').getTime(), 61],
            [new Date('2023-09-06').getTime(), 58],
            [new Date('2023-09-07').getTime(), 85],
            [new Date('2023-09-08').getTime(), 73],
            [new Date('2023-09-09').getTime(), 89],
            [new Date('2023-09-10').getTime(), 76],
            [new Date('2023-09-11').getTime(), 66],
            [new Date('2023-09-12').getTime(), 81],
            [new Date('2023-09-13').getTime(), 90],
            [new Date('2023-09-14').getTime(), 87],
            [new Date('2023-09-15').getTime(), 79],
            [new Date('2023-09-16').getTime(), 64],
            [new Date('2023-09-17').getTime(), 72],
            [new Date('2023-09-18').getTime(), 68],
            [new Date('2023-09-19').getTime(), 75],
            [new Date('2023-09-20').getTime(), 89],
            [new Date('2023-09-21').getTime(), 70],
            [new Date('2023-09-22').getTime(), 56],
            [new Date('2023-09-23').getTime(), 80],
            [new Date('2023-09-24').getTime(), 83],
            [new Date('2023-09-25').getTime(), 77],
            [new Date('2023-09-26').getTime(), 92],
            [new Date('2023-09-27').getTime(), 84],
            [new Date('2023-09-28').getTime(), 66],
            [new Date('2023-09-29').getTime(), 55],
            [new Date('2023-09-30').getTime(), 62],
          
            // October
            [new Date('2023-10-01').getTime(), 78],
            [new Date('2023-10-02').getTime(), 74],
            [new Date('2023-10-03').getTime(), 89],
            [new Date('2023-10-04').getTime(), 67],
            [new Date('2023-10-05').getTime(), 75],
            [new Date('2023-10-06').getTime(), 81],
            [new Date('2023-10-07').getTime(), 82],
            [new Date('2023-10-08').getTime(), 88],
            [new Date('2023-10-09').getTime(), 71],
            [new Date('2023-10-10').getTime(), 76],
            [new Date('2023-10-11').getTime(), 68],
            [new Date('2023-10-12').getTime(), 90],
            [new Date('2023-10-13').getTime(), 84],
            [new Date('2023-10-14').getTime(), 69],
            [new Date('2023-10-15').getTime(), 77],
            [new Date('2023-10-16').getTime(), 72],
            [new Date('2023-10-17').getTime(), 82],
            [new Date('2023-10-18').getTime(), 85],
            [new Date('2023-10-19').getTime(), 76],
            [new Date('2023-10-20').getTime(), 81],
            [new Date('2023-10-21').getTime(), 79],
            [new Date('2023-10-22').getTime(), 62],
            [new Date('2023-10-23').getTime(), 88],
            [new Date('2023-10-24').getTime(), 74],
            [new Date('2023-10-25').getTime(), 64],
            [new Date('2023-10-26').getTime(), 66],
            [new Date('2023-10-27').getTime(), 90],
            [new Date('2023-10-28').getTime(), 82],
            [new Date('2023-10-29').getTime(), 72],
            [new Date('2023-10-30').getTime(), 87],
            [new Date('2023-10-31').getTime(), 76],
          
            // November
            [new Date('2023-11-01').getTime(), 74],
            [new Date('2023-11-02').getTime(), 78],
            [new Date('2023-11-03').getTime(), 65],
            [new Date('2023-11-04').getTime(), 82],
            [new Date('2023-11-05').getTime(), 69],
            [new Date('2023-11-06').getTime(), 74],
            [new Date('2023-11-07').getTime(), 86],
            [new Date('2023-11-08').getTime(), 77],
            [new Date('2023-11-09').getTime(), 64],
            [new Date('2023-11-10').getTime(), 81],
            [new Date('2023-11-11').getTime(), 88],
            [new Date('2023-11-12').getTime(), 72],
            [new Date('2023-11-13').getTime(), 84],
            [new Date('2023-11-14').getTime(), 90],
            [new Date('2023-11-15').getTime(), 75],
            [new Date('2023-11-16').getTime(), 66],
            [new Date('2023-11-17').getTime(), 70],
            [new Date('2023-11-18').getTime(), 76],
            [new Date('2023-11-19').getTime(), 83],
            [new Date('2023-11-20').getTime(), 61],
            [new Date('2023-11-21').getTime(), 85],
            [new Date('2023-11-22').getTime(), 73],
            [new Date('2023-11-23').getTime(), 64],
            [new Date('2023-11-24').getTime(), 87],
            [new Date('2023-11-25').getTime(), 78],
            [new Date('2023-11-26').getTime(), 72],
            [new Date('2023-11-27').getTime(), 82],
            [new Date('2023-11-28').getTime(), 76],
            [new Date('2023-11-29').getTime(), 85],
            [new Date('2023-11-30').getTime(), 80],
          
            // December
            [new Date('2023-12-01').getTime(), 74],
            [new Date('2023-12-02').getTime(), 77],
            [new Date('2023-12-03').getTime(), 65],
            [new Date('2023-12-04').getTime(), 81],
            [new Date('2023-12-05').getTime(), 90],
            [new Date('2023-12-06').getTime(), 72],
            [new Date('2023-12-07').getTime(), 80],
            [new Date('2023-12-08').getTime(), 84],
            [new Date('2023-12-09').getTime(), 76],
            [new Date('2023-12-10').getTime(), 87],
            [new Date('2023-12-11').getTime(), 75],
            [new Date('2023-12-12').getTime(), 78],
            [new Date('2023-12-13').getTime(), 64],
            [new Date('2023-12-14').getTime(), 83],
            [new Date('2023-12-15').getTime(), 66],
            [new Date('2023-12-16').getTime(), 88],
            [new Date('2023-12-17').getTime(), 79],
            [new Date('2023-12-18').getTime(), 90],
            [new Date('2023-12-19').getTime(), 68],
            [new Date('2023-12-20').getTime(), 74],
            [new Date('2023-12-21').getTime(), 82],
            [new Date('2023-12-22').getTime(), 81],
            [new Date('2023-12-23').getTime(), 70],
            [new Date('2023-12-24').getTime(), 72],
            [new Date('2023-12-25').getTime(), 86],
            [new Date('2023-12-26').getTime(), 85],
            [new Date('2023-12-27').getTime(), 66],
            [new Date('2023-12-28').getTime(), 77],
            [new Date('2023-12-29').getTime(), 81],
            [new Date('2023-12-30').getTime(), 64],
            [new Date('2023-12-31').getTime(), 75]
          ],
      },
    ],

    options: {
      chart: {
        background:'',
        type: "area",
        zoom: {
          enabled: true,
          type: 'x', // Enable zooming on the x-axis
          autoScaleYaxis: true // Automatically scale the y-axis during zoom
        },

        events: {
            zoomed: function (chartContext, { xaxis }) {
              const startDate = xaxis.min; // Get min value directly
              const endDate = xaxis.max; // Get max value directly
          
              const oneMonth = 30 * 24 * 60 * 60 * 1000; // Milliseconds in one month
          
              if (endDate - startDate > oneMonth) {
                // Zoomed out (more than one month)
                chartContext.updateOptions({
                  xaxis: {
                    min: new Date("2023-01-01").getTime(),
                    max: new Date("2023-12-31").getTime(),
                    tickAmount: 12, // One tick per month
                  },
                });
              } else {
                // Zoomed in (within one month)
                chartContext.updateOptions({
                  xaxis: {
                    min: startDate,
                    max: endDate,
                    tickAmount: 30, // Show all days in the month
                  },
                });
              }
            },
          },
          



        toolbar: {
          show: true,
        },
      },

      colors: ["#be83de"], // Series colors
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        curve: "smooth",
      },

      grid: {
        borderColor: "orange",
        show: true,
        borderColor: "#474646",
        strokeDashArray: 5,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          right: 0,
          bottom: 0,
          left: 10,
        },
      },

      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 10,
        labels: {
          formatter: function (value) {
            return value + "%"; // Add % to the y-axis labels
          },
          style: {
            colors: "white",
            fontSize: "12px",
          },
        },
      },

      xaxis: {
        type: "datetime", // Set x-axis type to datetime
      min: new Date("2023-01-01").getTime(),
      max: new Date("2023-01-31").getTime(),
      tickAmount: 30, // Show all days in January by default



        labels: {
          formatter: function (value) {
            return new Date(value).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }); // Format date to "Month Day"
          },
          style: {
            colors: "white",
            fontSize: "12px",
          },
        },
        tooltip: {
          enabled: true,
          formatter: function (val) {
            return new Date(val).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
          },
        },
      },

      tooltip: {
        theme: "dark",
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div>
      <div
        id="chart"
        style={{
          width: "850px",
          paddingTop: "17px",
          paddingRight: "20px",
          backgroundColor: "",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={210}
          width={570}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
