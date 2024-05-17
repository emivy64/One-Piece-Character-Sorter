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
        { name: "Whole Cake", key: "s9" },
        { name: "Wano", key: "s10" },
        { name: "Final Saga", key: "s11" }
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
      img: "001Luffy.jpeg",
      opts: {
        saga: [ "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Gol D. Roger",
      img: "002Roger.jpeg",
      opts: {
        saga: [ "s1", "s6", "s10", "s11"],
      }
    },
    {
      name: "Shanks",
      img: "003Shanks.jpeg",
      opts: {
        saga: [ "s1", "s3", "s4", "s6", "s9", "s10", "s11"],
      }
    },
    {
      name: "Lucky Roux",
      img: "004Lucky Roux.png",
      opts: {
        saga: [ "s1", "s3", "s4", "s6", "s10", "s11"],
      }
    },
    {
      name: "Yasopp",
      img: "005Yasopp.jpeg",
      opts: {
        saga: [ "s1", "s3", "s4", "s6", "s10", "s11"],
      }
    },
    {
      name: "Benn Beckman",
      img: "006Benn Beckman.jpeg",
      opts: {
        saga: [ "s1", "s3", "s4", "s6", "s10", "s11"],
      }
    },
    {
      name: "Makino",
      img: "007Makino.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Higuma",
      img: "008Higuma.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Woop Slap",
      img: "010WoopSlap.png",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Alvida",
      img: "011Alvida.jpeg",
      opts: {
        saga: [ "s1", "s3", "s6", "s9", "s11"],
      }
    },
    {
      name: "Koby",
      img: "012Koby.jpeg",
      opts: {
        saga: [ "s1", "s4", "s6", "s9", "s11"],
      }
    },
    {
      name: "Roronoa Zoro",
      img: "013Zoro.jpeg",
      opts: {
        saga: [ "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Rika",
      img: "014Rika.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Helmeppo",
      img: "015Helmeppo.png",
      opts: {
        saga: [ "s1", "s4", "s6", "s9", "s11"],
      }
    },
    {
      name: "Morgan",
      img: "016Morgan.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Koshirou",
      img: "017Koshirou.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Kuina",
      img: "018Kuina.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Nami",
      img: "019Nami.jpeg",
      opts: {
        saga: [ "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Buggy",
      img: "020Buggy.jpeg",
      opts: {
        saga: [ "s1", "s3", "s6", "s9", "s11"],
      }
    },
    {
      name: "Cabaji",
      img: "021Cabaji.jpeg",
      opts: {
        saga: [ "s1", "s3", "s6", "s9", "s11"],
      }
    },
    {
      name: "Mohji",
      img: "022Mohji.jpeg",
      opts: {
        saga: [ "s1", "s3", "s6", "s9", "s11"],
      }
    },
    {
      name: "Richie",
      img: "023Richie.jpeg",
      opts: {
        saga: [ "s1", "s3", "s6", "s9", "s11"],
        ani: true
      }
    },
    {
      name: "Chouchou",
      img: "024Chouchou.png",
      opts: {
        saga: [ "s1"],
        ani: true
      }
    },
    {
      name: "Boodle",
      img: "025Boodle.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Usopp",
      img: "028 - Usopp.jpeg",
      opts: {
        saga: [ "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Sanji",
      img: "042 - Sanji.jpeg",
      opts: {
        saga: [ "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Karoo",
      img: "076 - Karoo.jpeg",
      opts: {
        saga: [ "s2", "s9", "s11"],
        ani: true
      }
    },
    {
      name: "Nico Robin",
      img: "079 - Nico Robin.png",
      opts: {
        saga: [ "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Tony Tony Chopper",
      img: "092 - Chopper.jpeg",
      opts: {
        saga: [ "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Franky",
      img: "191 - Franky.jpeg",
      opts: {
        saga: [ "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Brook",
      img: "222 - Brook.png",
      opts: {
        saga: [ "s5", "s6", "s7", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Jinbe",
      img: "291 - Jinbe.png",
      opts: {
        saga: [ "s6", "s7", "s9", "s10", "s11"],
      }
    },
  ]
