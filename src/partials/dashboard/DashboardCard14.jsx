import React from 'react';

function DashboardCard14({data}) {


  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Summary of {data.symbol}</h2>
      </header>
      <div className="overflow-x-auto">
      <table class="table-auto w-full">
      <tbody className="text-sm divide-y divide-slate-100">
          <tr>
            <td className="px-5 py-2 whitespace-nowrap">Previous Close:</td>
            <td className="px-5 py-2 whitespace-nowrap">{data.preClose}</td>
          </tr>
          <tr>
            <td className="px-5 py-2 whitespace-nowrap">Open:</td>
            <td className="px-5 py-2 whitespace-nowrap">{data.dayOpen}</td>
          </tr>
          <tr>
            <td className="px-5 py-2 whitespace-nowrap">Day High:</td>
            <td className="px-5 py-2 whitespace-nowrap">{data.dayHigh}</td>
          </tr>
          <tr>
            <td className="px-5 py-2 whitespace-nowrap">Day Low:</td>
            <td className="px-5 py-2 whitespace-nowrap">{data.dayLow}</td>
          </tr>
          <tr>
            <td className="px-5 py-2 whitespace-nowrap">Previous Close:</td>
            <td className="px-5 py-2 whitespace-nowrap">{data.preClose}</td>
          </tr>
          <tr>
            <td className="px-5 py-2 whitespace-nowrap">Volume:</td>
            <td className="px-5 py-2 whitespace-nowrap">{data.lastVolume}</td>
          </tr>
          <tr>
            <td className="px-5 py-2 whitespace-nowrap">Market Cap:</td>
            <td className="px-5 py-2 whitespace-nowrap">{data.marketCap}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default DashboardCard14;
