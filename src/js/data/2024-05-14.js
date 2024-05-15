dataSetVersion = "2024-05-15"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Saga",
      key: "saga",
      tooltip: "Check this to restrict to certain sagas",
      checked: false,
      sub: [
        { name: "East Blue", key: "s1" },
        { name: "Alabasta", key: "s2" },
        { name: "Skypiea", key: "s3" },
        { name: "Water Seven", key: "s4" },
        { name: "Thriller Bark", key: "s5" },
        { name: "Marineford", key: "s6" },
        { name: "Fishmen Island", key: "s7" },
        { name: "Dressrosa", key: "s8" },
        { name: "Whole Cake", key: "s9" }
        { name: "Wano", key: "s10" }
        { name: "Final Saga", key: "s11" }
      ]
    },
    {
      name: "Filter by Affiliation",
      key: "group",
      tooltip: "Check this to restrict to characters to a certain affiliation",
      checked: false,
      sub: [ 
      ]
    },
    {
      name: "Remove animals",
      key: "ani",
      tooltip: "Check this if you don't want animals to be listed",
      checked: false
    }
  ];
  
  dataSet[dataSetVersion].characterData = [
    {
      name: "Monkey D. Luffy",
      img: "001 - Luffy.jpeg",
      opts: {
        saga: [ "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"]
      }
    },
    {
      name: "Roronoa Zoro",
      img: "https://i.imgur.com/AwQrjIR.png",
      opts: {
        saga: [ "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"]
      }
    },
    {
      name: "Nami",
      img: "https://i.imgur.com/oyXj0nA.png",
      opts: {
        saga: [ "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"]
      }
    },
    {
      name: "Usopp",
      img: "https://i.imgur.com/nsM3vKF.png",
      opts: {
        saga: [ "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"]
      }
    },
    {
      name: "Vinsmoke Sanji",
      img: "https://i.imgur.com/wYNK5aD.png",
      opts: {
        saga: [ "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"]
      }
    },
    {
      name: "Karoo",
      img: "https://i.imgur.com/wBETMAJ.png",
      opts: {
        saga: [ "s2", "s9", "s11"]
        ani: true
      }
    },
    {
      name: "Tony Tony Chopper",
      img: "https://i.imgur.com/tmzFR3Y.png",
      opts: {
        saga: [ "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"]
      }
    },
    {
      name: "Nico Robin",
      img: "https://i.imgur.com/7k9rMaB.png",
      opts: {
        saga: [ "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"]
      }
    },
    {
      name: "Franky",
      img: "https://i.imgur.com/aKlcPls.png",
      opts: {
        saga: [ "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"]
      }
    },
    {
      name: "Brook",
      img: "https://i.imgur.com/dO2e3ap.png",
      opts: {
        saga: [ "s5", "s6", "s7", "s8", "s9", "s10", "s11"]
      }
    },
    {
      name: "Jinbe",
      img: "291 - Jinbe.png",
      opts: {
        saga: [ "s6", "s7", "s9", "s10", "s11"]
      }
    },
  ]
