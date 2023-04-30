import React from 'react';

function DashboardCard10({data}) {


  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-3 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Analysis</h2>
      </header>
      <div className="overflow-x-auto">
      <table class="table-auto w-full">
      <tbody className="text-sm divide-y divide-slate-100">
          <tr>
            <td className="px-5 py-2 whitespace-nowrap">Year High:</td>
            <td className="px-5 py-2 whitespace-nowrap">{data.yearHigh}</td>
          </tr>
          <tr>
            <td className="px-5 py-2 whitespace-nowrap">Year Low:</td>
            <td className="px-5 py-2 whitespace-nowrap">{data.yearLow}</td>
          </tr>
          <tr>
            <td className="px-5 py-2 whitespace-nowrap">Year Change:</td>
            <td className="px-5 py-2 whitespace-nowrap">{data.yearChange}</td>
          </tr>
          <tr>
            <td className="px-5 py-2 whitespace-nowrap">50-Day Average:</td>
            <td className="px-5 py-2 whitespace-nowrap">{data.fiftyDayAverage}</td>
          </tr>
          <tr>
            <td className="px-5 py-2 whitespace-nowrap">200-Day Average:</td>
            <td className="px-5 py-2 whitespace-nowrap">{data.twoHundredDayAver}</td>
          </tr>
          <tr>
            <td className="px-5 py-2 whitespace-nowrap">10-Day Average Volume:</td>
            <td className="px-5 py-2 whitespace-nowrap">{data.tenDayAverVol}</td>
          </tr>
          <tr>
            <td className="px-5 py-2 whitespace-nowrap">3-Month Average Volume:</td>
            <td className="px-5 py-2 whitespace-nowrap">{data.tenDayAverVol}</td>
          </tr>


        </tbody>
      </table>
    </div>
    </div>
  );
}

export default DashboardCard10;
