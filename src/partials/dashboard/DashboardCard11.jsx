import React from 'react';
import BarChart from '../../charts/BarChart03';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard11({data}) {

  let bullishCount = data['bullishCount'] ?? 0;
  let neutralCount = data['neutralCount'] ?? 0;
  let bearishCount = data['bearishCount'] ?? 0;

  const chartData = {
    labels: ['Reasons'],
    datasets: [
      {
        label: 'Bullish',
        data: [bullishCount],
        backgroundColor: tailwindConfig().theme.colors.green[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Neutral',
        data: [neutralCount],
        backgroundColor: tailwindConfig().theme.colors.sky[800],
        hoverBackgroundColor: tailwindConfig().theme.colors.sky[900],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Bearish',
        data: [bearishCount],
        backgroundColor: tailwindConfig().theme.colors.red[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.red[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };

  let largestCount = Math.max(bullishCount, neutralCount, bearishCount);
  let result = "";
  if (largestCount === bullishCount) {
    result = "Bullish 🐮";
  } else if (largestCount === neutralCount) {
    result = "Neutral";
  } else {
    result = "Bearish 🐻";
  }

  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Sentiment Distribution</h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">{result}</div>
          {/* <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">{bearishCount}</div> */}
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        {chartData && <BarChart data={chartData} width={595} height={48} />}
      </div>
    </div>
  );
}

export default DashboardCard11;
