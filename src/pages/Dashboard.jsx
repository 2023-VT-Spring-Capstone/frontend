import React, { useState, useEffect } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import DashboardCard14 from '../partials/dashboard/DashboardCard14';
import Banner from '../partials/Banner';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [keyword, setKeyword] = useState('');
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [redditData, setRedditData] = useState({});
  const [redditSentimentData, setRedditSentimentData] = useState({});
  const [redditSources, setSubredditSrouceData] = useState({});
  const [stockInfoData, setInfoData] = useState([]);
  const [detailInfoData, setDetailData] = useState([]);
  const [histInfoData, setHistData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const today = new Date();

  // Get year, month, and day from the date object
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  
  // Format the date as "YYYY-MM-DD"
  const formattedDate = `${year}-${month}-${day}`;
  
  const handleSearch = async () => {
    setRedditData({}); // clear the previous redditData
    // const response = await fetch(`http://localhost/detailByItem?startDate=${formattedDate}&endDate=${formattedDate}&keyWord=${keyword}`);
    const response = await fetch(`http://localhost/detailByItem?startDate=2023-04-01&endDate=2023-04-30&keyWord=${keyword}`);
    const data = await response.json();
    setRedditData(data);
    let sentimentCounts = [];
    sentimentCounts['bullishCount'] = data.bullishCount;
    sentimentCounts['bearishCount'] = data.bearishCount;
    sentimentCounts['neutralCount'] = data.neutralCount;

    setRedditSentimentData(sentimentCounts);
    setSubredditSrouceData(data.dataOrigin);

    setIsSearchClicked(true);
  }

  useEffect(() => {
    async function fetchInfoData() {
      const stockResponse = await fetch('http://localhost/stock/BB/info');
      const stockData = await stockResponse.json();
      setInfoData(stockData);
    }
    async function fetchDetailData() {
      const response = await fetch('http://localhost/stock/BB');
      const detailData = await response.json();
      setDetailData(detailData.info);

      let timePrice = [];
      timePrice['time'] = detailData.histPrice.datetimeList.map((time) => time.split('T')[0]);
      timePrice['price'] = detailData.histPrice.closePriceList;
      setHistData(timePrice);

      setNewsData(detailData.newsList);
    }
    fetchDetailData();
    // fetchHistData();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner data={detailInfoData}/>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Acme Plus) */}
              {/* <DashboardCard01 /> */}
              {/* Line chart (Acme Advanced) */}
              {/* <DashboardCard02 /> */}
              {/* Line chart (Acme Professional) */}
              {/* <DashboardCard03 /> */}

              {/* Summary (TICKER) */}
              <DashboardCard14 data={detailInfoData}/>
              {/* Analysis (TICKER) */}
              <DashboardCard10 data={detailInfoData}/>
              {/* Stacked bar chart (open, high, low and close) */}
              {/* <DashboardCard09 ohlcData={detailInfoData}/> */}
              {/* Line chart (Real Time Traffic) */}
              <DashboardCard05 />

              {/* Line chart (History Price & Social Sentiment for (TICKER_SYMBOL)) */}
              <DashboardCard08 data={histInfoData}/>
            </div> 
            

            {/* Dashboard actions */}
            < div className="sm:flex sm:justify-end sm:items-center m-8">
              {/* Left: Avatars */}
              {/* <DashboardAvatars /> */}

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                <div>
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="keyword"
                  />
                </div>
                <button onClick={handleSearch} className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Search</span>
                </button>                
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* Table (Reddit Posts) */}
              <DashboardCard07  data={redditData}/>
              {/* Card (Recent News) */}
              {/* Sentiment Distribution */}
              <DashboardCard11 data={redditSentimentData}/>
              {/* Doughnut chart (Sentiment Distribution) */}
              <DashboardCard06 data={redditSources}/>
              {/* Card (Recent News) */}
              <DashboardCard12 data={newsData}/>
              {/* Bar chart (Direct vs Indirect) */}
              {/* <DashboardCard04 /> */}
              {/* Card (Income/Expenses) */}
              {/* <DashboardCard13 /> */}
            </div>
          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Dashboard;