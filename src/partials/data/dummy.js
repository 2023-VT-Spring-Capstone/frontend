export const dropdownData = [
  {
    name:'AMC Entertainment',
    ticket : 'AMC'
  },
{
  name: 'BlackBerry Ltd.',
  ticket: 'BB'
},
{
  name: 'Bed Bath & Beyond',
  ticket: 'BBBY'
},
{
  name: 'GameStop',
  ticket: 'GME'
},
{
  name: 'Tesla',
  ticket: 'TSLA'
}
]

export const ColorMappingPrimaryXAxis = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Months',
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}°C',
  title: 'Temperature',
};

export const FinancialPrimaryXAxis = {
  valueType: 'DateTime',
  minimum: new Date('2016, 12, 31'),
  maximum: new Date('2017, 9, 30'),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: 'Price',
  minimum: 450,
  maximum: 0,
  interval: 50,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};


export const companyInfos = [
  {
    name: "AMC Entertainment",
    attribute: "Entertainment ",
    details: `
    AMC Entertainment Holdings, Inc. is an American movie theater chain founded in Kansas City, Missouri and now headquartered in Leawood, Kansas. It is the largest movie theater chain in the world. Founded in 1920, 
    AMC has the largest share of the U.S. theater market ahead of Regal and Cinemark Theatres.
    `,
    link:"https://en.wikipedia.org/wiki/AMC_Theatres"
    
  },
  {
    name: "BlackBerry Ltd.",
    attribute: "Technology",
    details: `
    Amazon.com
    is an American multinational technology company focusing on e-commerce, 
    cloud computing, online advertising, digital streaming, and artificial intelligence. It has been referred to as "one of the most influential economic and cultural forces in the world",[5] and is one of the world's most valuable brands.[6] It is one of the Big Five American information technology companies, 
    alongside Alphabet (Google), Apple, Meta (Facebook), and Microsoft.
    `
  },
  {
    name: "Bed Bath & Beyond",
    attribute: "Technology",
    details: `
    Bed Bath & Beyond Inc. is an American chain of domestic merchandise retail stores. The chain operates stores in the United States, Canada, Mexico, and Puerto Rico. Bed Bath & Beyond was 
    founded in 1971. It is counted among the Fortune 500 and the Forbes Global 2000.
    `,
    link:'https://en.wikipedia.org/wiki/Bed_Bath_%26_Beyond'
  },
  {
    name: "GameStop",
    attribute: "Technology",
    details: `
    GameStop Corp. is an American video game, consumer electronics, and gaming merchandise retailer. The company is headquartered in 
    Grapevine, Texas, and is the largest video game retailer worldwide.
    `,
    link:"https://en.wikipedia.org/wiki/GameStop"
  },
  {
    name: "Tesla",
    attribute: "Technology",
    details: `
    Tesla, Inc. is an American multinational automotive and clean 
    energy company headquartered in Austin, Texas. Tesla designs and manufactures electric vehicles, battery energy storage from 
    home to grid-scale, solar panels and solar roof tiles, and related products and services.
    `,
    link:"https://en.wikipedia.org/wiki/Tesla,_Inc."
  }

]

export const basicInformation = {
  columns:[
    { name: 'yearLow', width: '80', dataType: "int" }, 
    { name: 'instrumentType', width: '80',dataType: "string" },
    { name: 'yearChange', width: '80', dataType: "int"},
    { name: 'fiftyDayAver', width: '80', dataType: "int"},
    { name: 'twoHundredDayAver', width: '80', dataType: "int"},
    { name: 'earningsDate', width: '100',dataType: "string"},
    { name: 'yearHigh', width: '80',dataType: "int"},
    { name: 'reportedEps', width: '80',dataType: "int"},
    { name: 'currRegMarketStart', width: '100',dataType: "string"},
    { name: 'threeMonthAverVol', width: '80',dataType: "int"},
    { name: 'surprisePct', width: '80',dataType: "int"},
    { name: 'currRegMarketEnd', width: '100',dataType: "string"},
    { name: 'exchangeName', width: '80',dataType: "string"},
    { name: 'currency', width: '80',dataType: "string"},
    { name: 'tenDayAverVol', width: '100',dataType: "int"},
  ],
  info:[
    {
      "yearLow": 124.17,
      "instrumentType": "EQUITY",
      "yearChange": 0.003,
      "fiftyDayAver": 154.826,
      "twoHundredDayAver": 149.5925,
      "earningsDate": "2023-02-02T11:00:00",
      "yearHigh": 176.15,
      "reportedEps": 1.88,
      "currRegMarketStart": "2023-04-14T00:00:00",
      "threeMonthAverVol": 65276644,
      "surprisePct": -0.0289,
      "currRegMarketEnd": "2023-04-14T00:00:00",
      "exchangeName": "NMS",
      "currency": "USD",
      "tenDayAverVol": 53229250
    }
  ]
}







export const PyramidData = [
  { x: 'Sweet Treats', y: 120, text: '120 cal' },
  { x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal' },
  { x: 'Vegetables', y: 470, text: '470 cal' },
  { x: 'Meat, Poultry, Fish', y: 475, text: '475 cal' },
  { x: 'Fruits', y: 520, text: '520 cal' },
  { x: 'Bread, Rice, Pasta', y: 930, text: '930 cal' },
];

// https://github.com/elastic/search-ui
export const reddditRealTime = {
  columns: [ 
    { name: 'id', width: '100', dataType: "string" }, 
    { name: 'score', width: '50',dataType: "int" },
    { name: 'num', width: '50', dataType: "int"},
    { name: 'body', width: '250', dataType: "string"},
    { name: 'subreddit', width: '100', dataType: "string"},
    { name: 'url', width: '50',dataType: "int"},
  ],
  

  info: [
      {
        id: "xahik0",
        score : "5",
        num: "7", // num of comments
        body: "Got recommend this sub for this brand so here I am. The car is a '64 american...'",
        subreddit: "amc",
        url:"https://www.reddit.com/r/amc/comment/xahik0/thoughts_on_a_64_rambler_american_660_that_is/",
      },
      {
        id: "xahik0",
        score : "5",
        num: "7", // num of comments
        body: "Got recommend this sub for this brand so here I am. The car is a '64 american...'",
        subreddit: "amc",
        url:"https://www.reddit.com/r/amc/comment/xahik0/thoughts_on_a_64_rambler_american_660_that_is/",
      },
      {
        id: "xahik0",
        score : "5",
        num: "7", // num of comments
        body: "Got recommend this sub for this brand so here I am. The car is a '64 american...'",
        subreddit: "amc",
        url:"https://www.reddit.com/r/amc/comment/xahik0/thoughts_on_a_64_rambler_american_660_that_is/",
      },
      {
        id: "xahik0",
        score : "5",
        num: "7", // num of comments
        body: "Got recommend this sub for this brand so here I am. The car is a '64 american...'",
        subreddit: "amc",
        url:"https://www.reddit.com/r/amc/comment/xahik0/thoughts_on_a_64_rambler_american_660_that_is/",
      },      {
        id: "xahik0",
        score : "5",
        num: "7", // num of comments
        body: "Got recommend this sub for this brand so here I am. The car is a '64 american...'",
        subreddit: "amc",
        url:"https://www.reddit.com/r/amc/comment/xahik0/thoughts_on_a_64_rambler_american_660_that_is/",
      },      {
        id: "xahik0",
        score : "5",
        num: "7", // num of comments
        body: "Got recommend this sub for this brand so here I am. The car is a '64 american...'",
        subreddit: "amc",
        url:"https://www.reddit.com/r/amc/comment/xahik0/thoughts_on_a_64_rambler_american_660_that_is/",
      },      {
        id: "xahik0",
        score : "5",
        num: "7", // num of comments
        body: "Got recommend this sub for this brand so here I am. The car is a '64 american...'",
        subreddit: "amc",
        url:"https://www.reddit.com/r/amc/comment/xahik0/thoughts_on_a_64_rambler_american_660_that_is/",
      },      {
        id: "xahik0",
        score : "5",
        num: "7", // num of comments
        body: "Got recommend this sub for this brand so here I am. The car is a '64 american...'",
        subreddit: "amc",
        url:"https://www.reddit.com/r/amc/comment/xahik0/thoughts_on_a_64_rambler_american_660_that_is/",
      },      {
        id: "xahik0",
        score : "5",
        num: "7", // num of comments
        body: "Got recommend this sub for this brand so here I am. The car is a '64 american...'",
        subreddit: "amc",
        url:"https://www.reddit.com/r/amc/comment/xahik0/thoughts_on_a_64_rambler_american_660_that_is/",
      },      {
        id: "xahik0",
        score : "5",
        num: "7", // num of comments
        body: "Got recommend this sub for this brand so here I am. The car is a '64 american...'",
        subreddit: "amc",
        url:"https://www.reddit.com/r/amc/comment/xahik0/thoughts_on_a_64_rambler_american_660_that_is/",
      },      {
        id: "xahik0",
        score : "5",
        num: "7", // num of comments
        body: "Got recommend this sub for this brand so here I am. The car is a '64 american...'",
        subreddit: "amc",
        url:"https://www.reddit.com/r/amc/comment/xahik0/thoughts_on_a_64_rambler_american_660_that_is/",
      }

  ]

}

