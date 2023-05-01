import React from 'react';

function DashboardCard12({data}) {
  return (
    <div className="col-span-full xl:col-span-12 bg-white h-96 overflow-y-auto shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 sticky top-0 z-50 bg-white">
        <h2 className="font-semibold text-slate-800">Recent News</h2>
      </header>
      <ul className="">
      {data.map(article => (
        <li key={article.uuid}>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex px-2 py-2 m-1 space-x-3 border border-gray-300 rounded-md hover:bg-gray-100"
          >
          <div className="flex-shrink-0">
            <img
              src={article.thumbnail && JSON.parse(article.thumbnail)?.resolutions?.[0]?.url}
              alt={article.title}
              className="w-24 h-24 object-cover rounded-md"
            />
          </div>
          <div className="flex-grow">
                <h2 className="font-small font-bold ml-5 mr-5">{article.title}</h2>
                <div className="text-gray-500 text-sm ml-5">{article.publisher}</div>
                <div className="text-red-500 text-sm ml-5">{article.newsType}</div>
                <div className="text-gray-500 text-right">
                  {new Date(article.createdAt).toLocaleDateString()}
                </div>
                {/* <div className="text-black text-sm">
                  {article.relatedTickers.join(', ')}
                </div> */}
          </div>
          </a>
        </li>
      ))}
    </ul>
    
    </div>
  );
}

export default DashboardCard12;
