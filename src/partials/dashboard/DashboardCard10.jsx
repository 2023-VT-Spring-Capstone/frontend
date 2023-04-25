import React from 'react';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';

import { useState, useEffect } from 'react';

function DashboardCard10() {

  const customers = [
    {
      id: '0',
      image: Image01,
      name: 'Alex Shatov',
      email: 'alexshatov@gmail.com',
      location: '🇺🇸',
      spent: '$2,890.66',
    },
    {
      id: '1',
      image: Image02,
      name: 'Philip Harbach',
      email: 'philip.h@gmail.com',
      location: '🇩🇪',
      spent: '$2,767.04',
    },
    {
      id: '2',
      image: Image03,
      name: 'Mirko Fisuk',
      email: 'mirkofisuk@gmail.com',
      location: '🇫🇷',
      spent: '$2,996.00',
    },
    {
      id: '3',
      image: Image04,
      name: 'Olga Semklo',
      email: 'olga.s@cool.design',
      location: '🇮🇹',
      spent: '$1,220.66',
    },
    {
      id: '4',
      image: Image05,
      name: 'Burak Long',
      email: 'longburak@gmail.com',
      location: '🇬🇧',
      spent: '$1,890.66',
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost/stock/BB/info');
      const newData = await response.json();
      setData(newData);
    }
    fetchData();
  }, []);

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Basic Info (TSLA)</h2>
      </header>
      <div className="overflow-x-auto">
      <table class="table-auto w-full">
      <tbody className="text-sm divide-y divide-slate-100">
          <tr>
            <td className="p-2 whitespace-nowrap">Year Low:</td>
            <td className="p-2 whitespace-nowrap">{data.yearLow}</td>
          </tr>
          <tr>
          <td className="p-2 whitespace-nowrap">Year High:</td>
          <td className="p-2 whitespace-nowrap">{data.yearHigh}</td>
          </tr>
          <tr>
          <td className="p-2 whitespace-nowrap">Fifty Day Average:</td>
          <td className="p-2 whitespace-nowrap">{data.fiftyDayAver}</td>
          </tr>
          <tr>
          <td className="p-2 whitespace-nowrap">Two Hundred Day Average:</td>
          <td className="p-2 whitespace-nowrap">{data.twoHundredDayAver}</td>
          </tr>
          <tr>
          <td className="p-2 whitespace-nowrap">Earnings Date:</td>
          <td className="p-2 whitespace-nowrap">{data.earningsDate}</td>
          </tr>
          <tr>
          <td className="p-2 whitespace-nowrap">Reported EPS:</td>
          <td className="p-2 whitespace-nowrap">{data.reportedEps}</td>
          </tr>
          <tr>
          <td className="p-2 whitespace-nowrap">Exchange Name:</td>
          <td className="p-2 whitespace-nowrap">{data.exchangeName}</td>
          </tr>
          <tr>
          <td className="p-2 whitespace-nowrap">Currency:</td>
          <td className="p-2 whitespace-nowrap">{data.currency}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default DashboardCard10;
