import React from 'react';
import LineChart from '../../charts/LineChart02';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard08({data}) {

  const chartData = {
    labels: data['time'],
    datasets: [
      {
        label: 'Close',
        data: data['closePrice'],
        borderColor: tailwindConfig().theme.colors.red[500],
        fill: true,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.red[500],
      },
      {
        label: 'Open',
        data: data['openPrice'],
        borderColor: tailwindConfig().theme.colors.blue[400],
        fill: true,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
      },
      {
        label: 'High',
        data: data['highPrice'],
        borderColor: tailwindConfig().theme.colors.green[500],
        fill: true,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.green[500],
      },
      {
        label: 'Low',
        data: data['lowPrice'],
        borderColor: tailwindConfig().theme.colors.indigo[400],
        fill: true,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[400],
      },
      // {
      //   label: 'Volume',
      //   data: data['volume'],
      //   borderColor: tailwindConfig().theme.colors.purple[500],
      //   fill: false,
      //   borderWidth: 2,
      //   tension: 0,
      //   pointRadius: 0,
      //   pointHoverRadius: 3,
      //   pointBackgroundColor: tailwindConfig().theme.colors.purple[500],
      // },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">History Price</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {chartData && <LineChart data={chartData} width={595} height={248} />}
      {/* <div>{data['time']}</div> */}
      {/* <div>{data['price']}</div> */}
    </div>
  );
}

export default DashboardCard08;
