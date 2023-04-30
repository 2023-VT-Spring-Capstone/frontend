import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06({data}) {

  function randomColor(count) {
    const hexChars = '0123456789ABCDEF';
    let colorArray = [];
    let hoverArray = [];
    for (let i = 0; i < count; i++) {
      let color = '#';
      let hoverColor = '#';
      for (let j = 0; j < 6; j++) {
        let hexIndex = Math.floor(Math.random() * 16);
        let hexChar = hexChars[hexIndex];
        color += hexChar;
        if (j < 3) {
          // make hover color slightly darker
          hexIndex = Math.max(hexIndex - 2, 0);
          hexChar = hexChars[hexIndex];
          hoverColor += hexChar;
        } else {
          hoverColor += hexChar;
        }
      }
      colorArray.push(color);
      hoverArray.push(hoverColor);
    }
    return [colorArray, hoverArray];
  }
  

  const labels = Object.keys(data);
  const values = labels.map(key => data[key]);
  const [backgroundColors, hoverBackgroundColors] = randomColor(labels.length);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Data Source',
        data: values,
        backgroundColor: backgroundColors,
        hoverBackgroundColor: hoverBackgroundColors,
        hoverBorderColor: tailwindConfig().theme.colors.white,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Srouce</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default DashboardCard06;
