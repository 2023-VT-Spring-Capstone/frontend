import React from 'react';

function DashboardCard07({data}) {

  const renderText = (title) => {
    const boldText = title.replace(/<em>(.*?)<\/em>/g, '<strong>$1</strong>');
    return <div dangerouslySetInnerHTML={{__html: boldText}} />;
  }
  return (

    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Reddit Posts</h2>
        <p>Total: {data.total}</p>
      </header>
      
      <div className="p-3">

        {/* Table */}
        <div className="w-full h-96 overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2 w-1/12">
                  <div className="font-semibold text-left">date</div>
                </th>
                <th className="p-2 w-2/12">
                  <div className="font-semibold text-center">title</div>
                </th>
                <th className="p-2 w-1/12">
                  <div className="font-semibold text-center">ticker</div>
                </th>
                <th className="p-2 w-1/12">
                  <div className="font-semibold text-center">upvote ratio</div>
                </th>
                <th className="p-2 w-1/12">
                  <div className="font-semibold text-center">label</div>
                </th>
                <th className="p-2 w-3/12">
                  <div className="font-semibold text-left">body</div>
                </th>
                <th className="p-2 w-1/12">
                  <div className="font-semibold text-center">bullish</div>
                </th>               
                <th className="p-2 w-1/12">
                  <div className="font-semibold text-center">sentiment</div>
                </th>
                <th className="p-2 w-1/12">
                  <div className="font-semibold text-center">subreddit</div>
                </th>
                <th className="p-2 w-1/12">
                  <div className="font-semibold text-center">permalink</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            {data.detail && data.detail.length > 0 && (
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {data.detail.map((item) => (
                <tr key={item.id}>
                  <td className="px-3">{item.created_time}</td>
                  <td className="px-3">{renderText(item.title)}</td>
                  <td className="px-3">{item.ticker}</td>
                  <td className="px-3">{item.upvote_ratio}</td>
                  <td className="px-3">{item.label}</td>
                  <td className="px-3">{renderText(item.body)}</td>
                  <td className="px-3">{item.bullish}</td>
                  <td className="px-3">{item.sentiment}</td>
                  <td className="px-3">{item.subreddit}</td>
                  <td className="px-3">
                    <a href={`https://www.reddit.com/${item.permalink}`} className="underline hover:no-underline">
                      link
                    </a>
                  </td>
                </tr>
                ))}
            </tbody>
            )}
          </table>
          
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
