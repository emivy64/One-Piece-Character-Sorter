dataSetVersion = "2024-05-14"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Sagas",
    key: "saga",
    tooltip: "Check this to restrict to certain saga.",
    checked: false,
    sub: [
      { name: "East Blue", key: "s1" },
      { name: "Baroque Works", key: "s2" },
      { name: "Skypiea", key: "s3" },
      { name: "Water Seven", key: "s4" },
      { name: "Thriller Bark", key: "s5" },
      { name: "Marineford", key: "s6" },
      { name: "Fishmen Island", key: "s7" },
      { name: "Dressrosa", key: "s8" },
      { name: "Whole Cake", key: "s9" },
      { name: "Wano", key: "s10" },
      { name: "Final Saga", key: "s11" },
    ]
  },
  {
    name: "Filter by Groups",
    key: "group",
    tooltip: "Check this to restrict to characters to groups.",
    checked: false,
    sub: [ 
      { name: "Straw Hats", key: "mugiwara" },
    ];


dataSet[dataSetVersion].characterData = [
  {
    name: "Luffy",
    img: "https://imgur.com/KSL747Q",
    opts: {
      series: [ "s1" ],
      group: ["mugiwara"]
    }
  },
  {
    name: "Zoro",
    img: "https://i.imgur.com/lVSi63L.png",
    opts: {
      series: [ "s1" ],
      group: ["mugiwara"]
    }
  },
  {
    name: "Nami",
    img: "https://i.imgur.com/0upwMqj.png",
    opts: {
      series: [ "s1" ],
      group: ["mugiwara"]
    }
  ];
