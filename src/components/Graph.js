import React, { useState,useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const Graph = (activebtn) => {

  // const [series] = useState([
  //   {
  //     name: 'Humidity Level',
  //     data: [31, 40, 28, 51, 42, 9, 90,72,55,12,57,22],
  //   },
  // ]);

    

  const [options] = useState({
    chart: {
      theme: {
       mode:'dark' 
      },
      height: 200,
      type: 'area',
      zoom: {
        enabled: true, // Enable zoom
        type: 'x', 
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
        tool:{
          zoom: false,
          pan: true,
        }, 
        autoSelected: 'pan',
      },
    },
    grid: {
      show: true,
      borderColor: '#90A4AE',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
          lines: {
              show: false
          }
      },   
      yaxis: {
          lines: {
              show: true
          },
      },  
      row: {
          colors: undefined,
          opacity: 0.5
      },  
      column: {
          colors: undefined,
          opacity: 0.5
      },  
  },
    dataLabels: {
      enabled: false,
    },
    markers: {
      colors: ['#1b1b1b'],
   },
    stroke: {
      curve: 'smooth',
      colors:['#b270d6'], 
      // fill:['#be83de'], 
    },
    fill: {
      colors: ['#be83de'],
      type: "gradient",
      gradient: {
        gradientToColors: ['#1b1b1b'], 
        shadeIntensity: 0.8,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 90, 100]
      }
    },
    // xaxis: {
    //   // type: 'datetime',
    //   categories: ["Jan",
    //   "Feb",
    //   "Mar",
    //   "Apr",
    //   "May",
    //   "Jun",
    //   "Jul",
    //   "Aug",
    //   "Sep",
    //   "Oct",
    //   "Nov",
    //   "Dec",],
    // },

    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
      
      labels: {
        format: 'MMM', // Display only months initially (Jan, Feb, etc.)
        style:{
          colors:'white'
        }
      },
      tickAmount:12,
      
    },
    yaxis: {
      tickAmount: 5, // Adjust the number of ticks on the y-axis
      min: 0,        // Minimum value on y-axis
      max: 100,      // Maximum value on y-axis
      labels: {
        style:{
          colors:'white'
        }
      },
    },
    // tooltip: {
    //   x: {
    //     format: 'dd/MM/yy HH:mm',
    //   },
    // },


    tooltip: {
      // x: {
      //   format: 'dd/MM', // When zoomed in, show days and months (01/01, 02/01, etc.)
      // },

      x: {
        formatter: (val, opts) => {
          // Ensure proper formatting of the month in the tooltip
          return opts.w.globals.categoryLabels[opts.dataPointIndex];
        },
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'Series 1',
      data: [], // Initialize with an empty array
    },
  ]);

  useEffect(() => {
    if (activebtn.activebtn === 'humidity') {
      setSeries([
        {
          name: 'Series 1',
          data: [10, 20, 38, 11, 22, 79, 90, 84, 60, 72, 50, 90], // Data points for humidity
        },
      ]);
    } else if (activebtn.activebtn === 'uvindex') {
      setSeries([
        {
          name: 'Series 1',
          data: [31, 40, 28, 51, 42, 89, 90, 94, 60, 70, 80, 95], // Data points for UV index
        },
      ]);
    }else if (activebtn.activebtn === 'rainfall') {
      setSeries([
        {
          name: 'Series 1',
          data: [62, 40, 28, 51, 22, 89, 90, 34, 60, 50, 20, 15], // Data points for UV index
        },
      ]);
    }else if (activebtn.activebtn === 'pressure') {
      setSeries([
        {
          name: 'Series 1',
          data:[28, 59, 38, 48, 83, 39, 36, 49, 61, 11, 5, 46], // Data points for UV index
        },
      ]);
    }
  }, [activebtn]); // Add activeOverview as a dependency

  return (
    <div>
      <div id="chart" style={{ width: '550px', height: '200px' }}>
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={220}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Graph;
