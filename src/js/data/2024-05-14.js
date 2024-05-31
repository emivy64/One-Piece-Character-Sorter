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
      name: "Remove creatures",
      key: "ani",
      tooltip: "Check this if you don't want animals/creatures to be listed",
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
        saga: [ "s1", "s3", "s6", "s10", "s11"],
      }
    },
    {
      name: "Koby",
      img: "012Koby.jpeg",
      opts: {
        saga: [ "s1", "s4", "s6", "s9", "s10", "s11"],
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
        saga: [ "s1", "s4", "s6", "s9", "s10", "s11"],
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
        saga: [ "s1", "s3", "s6", "s10", "s11"],
      }
    },
    {
      name: "Cabaji",
      img: "021Cabaji.jpeg",
      opts: {
        saga: [ "s1", "s3", "s6", "s10", "s11"],
      }
    },
    {
      name: "Mohji",
      img: "022Mohji.jpeg",
      opts: {
        saga: [ "s1", "s3", "s6", "s10", "s11"],
      }
    },
    {
      name: "Richie",
      img: "023Richie.jpeg",
      opts: {
        saga: [ "s1", "s3", "s6", "s10", "s11"],
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
      name: "Gaimon",
      img: "027Gaimon.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Usopp",
      img: "028Usopp.jpeg",
      opts: {
        saga: [ "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Piiman",
      img: "029Piiman.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Ninjin",
      img: "030Ninjin.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Tamanegi",
      img: "031Tamanegi.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Kaya",
      img: "032Kaya.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Kuro",
      img: "033Kuro.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Merry",
      img: "034Merry.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Jango",
      img: "035Jango.jpeg",
      opts: {
        saga: [ "s1", "s2", "s6", "s9", "s11"],
      }
    },
    {
      name: "Sham",
      img: "036Sham.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Buchi",
      img: "037Buchi.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Banchina",
      img: "038Banchina.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Yosaku",
      img: "039Yosaku.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Johnny",
      img: "040Johnny.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Fullbody",
      img: "041Fullbody.jpeg",
      opts: {
        saga: [ "s1", "s2", "s6", "s9", "s11"],
      }
    },
    {
      name: "Sanji",
      img: "042Sanji.jpeg",
      opts: {
        saga: [ "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Zeff",
      img: "043Zeff.jpeg",
      opts: {
        saga: [ "s1", "s9"],
      }
    },
    {
      name: "Patty",
      img: "044Patty.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Gin",
      img: "045Gin.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Carne",
      img: "046Carne.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Don Krieg",
      img: "047Krieg.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Dracule Mihawk",
      img: "048Mihawk.jpg",
      opts: {
        saga: [ "s1", "s3", "s6", "s7", "s8", "s10", "s11"],
      }
    },
    {
      name: "Pearl",
      img: "049Pearl.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Nezumi",
      img: "050Nezumi.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Arlong",
      img: "051Arlong.jpeg",
      opts: {
        saga: [ "s1", "s7"],
      }
    },
    {
      name: "Chew",
      img: "052Chew.jpeg",
      opts: {
        saga: [ "s1", "s7"],
      }
    },
    {
      name: "Kuroobi",
      img: "053Kuroobi.jpeg",
      opts: {
        saga: [ "s1", "s7"],
      }
    },
    {
      name: "Hatchan",
      img: "054Hatchan.jpeg",
      opts: {
        saga: [ "s1", "s6", "s7"],
      }
    },
    {
      name: "Chabo",
      img: "055Chabo.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Nojiko",
      img: "056Nojiko.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Genzo",
      img: "057Genzo.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Mohmoo",
      img: "058Mohmoo.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Pudding Pudding",
      img: "059PuddingPudding.png",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Bellemere",
      img: "060Bellemere.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Stainless",
      img: "061Stainless.jpeg",
      opts: {
        saga: [ "s1", "s3", "s6", "s10"],
      }
    },
    {
      name: "Brannew",
      img: "062Brannew.jpeg",
      opts: {
        saga: [ "s1", "s6", "s8", "s10", "s11"],
      }
    },
    {
      name: "John Giant",
      img: "063JohnGiant.jpeg",
      opts: {
        saga: [ "s1", "s6"],
      }
    },
    {
      name: "Tashigi",
      img: "064Tashigi.jpeg",
      opts: {
        saga: [ "s1", "s2", "s4", "s6", "s8", "s11"],
      }
    },
    {
      name: "Ipponmatsu",
      img: "065Ipponmatsu.jpeg",
      opts: {
        saga: [ "s1"],
      }
    },
    {
      name: "Smoker",
      img: "066Smoker.jpeg",
      opts: {
        saga: [ "s1", "s2", "s4", "s6", "s8"],
      }
    },
    {
      name: "Monkey D. Dragon",
      img: "067Dragon.jpeg",
      opts: {
        saga: [ "s1", "s4", "s6", "s9", "s10", "s11"],
      }
    },
    {
      name: "Laboon",
      img: "068Laboon.png",
      opts: {
        saga: [ "s2", "s5"],
        ani: true
      }
    },
    {
      name: "Crocus",
      img: "069Crocus.png",
      opts: {
        saga: [ "s2", "s10"],
      }
    },
    {
      name: "Nerfetari Vivi",
      img: "070Vivi.jpeg",
      opts: {
        saga: [ "s2", "s9", "s11"],
      }
    },
    {
      name: "Mister 9",
      img: "071Mister9.jpeg",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Mister 13",
      img: "072Mister13.png",
      opts: {
        saga: [ "s2"],
        ani: true
      }
    },
    {
      name: "Miss Friday",
      img: "073Miss Friday.jpeg",
      opts: {
        saga: [ "s2"],
        ani: true
      }
    },
    {
      name: "Igaram",
      img: "074Igaram.png",
      opts: {
        saga: [ "s2", "s9"],
      }
    },
    {
      name: "Miss Monday",
      img: "075MissMonday.jpeg",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Karoo",
      img: "076Karoo.jpeg",
      opts: {
        saga: [ "s2", "s9", "s11"],
        ani: true
      }
    },
    {
      name: "Gem",
      img: "077Gem.jpeg",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Mikita",
      img: "078Mikita.jpeg",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Nico Robin",
      img: "079Robin.jpeg",
      opts: {
        saga: [ "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Broggy",
      img: "080Broggy.jpeg",
      opts: {
        saga: [ "s2", "s11"],
      }
    },
    {
      name: "Dorry",
      img: "081Dorry.jpeg",
      opts: {
        saga: [ "s2", "s11"],
      }
    },
    {
      name: "Galdino",
      img: "082Galdino.png",
      opts: {
        saga: [ "s1", "s6", "s9", "s10", "s11"],
      }
    },
    {
      name: "Marianne",
      img: "083Marianne.png",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Mister 11",
      img: "084Mister11.jpeg",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Chess",
      img: "085Chess.jpeg",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Wapol",
      img: "086Wapol.jpeg",
      opts: {
        saga: [ "s2", "s9", "s10", "s11"],
      }
    },
    {
      name: "Kuromarimo",
      img: "087Kuromarimo.jpeg",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Dalton",
      img: "088Dalton.jpeg",
      opts: {
        saga: [ "s2", "s9"],
      }
    },
    {
      name: "Negikuma Maria",
      img: "089NegikumaMaria.jpeg",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Tamachibi",
      img: "090Tamachibi.jpeg",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Kureha",
      img: "091Kureha.jpeg",
      opts: {
        saga: [ "s2", "s9"],
      }
    },
    {
      name: "Chopper",
      img: "092Chopper.jpeg",
      opts: {
        saga: [ "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Robson",
      img: "093Robson.jpeg",
      opts: {
        saga: [ "s2"],
        ani: true
      }
    },
    {
      name: "Hiriluk",
      img: "094Hiriluk.jpeg",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Cobra",
      img: "095Cobra.jpeg",
      opts: {
        saga: [ "s2", "s9", "s11"],
      }
    },
    {
      name: "Bentham",
      img: "096Bentham.jpeg",
      opts: {
        saga: [ "s2", "s6"],
      }
    },
    {
      name: "Crocodile",
      img: "097Crocodile.jpeg",
      opts: {
        saga: [ "s2", "s6", "s11"],
      }
    },
    {
      name: "Portgas D. Ace",
      img: "098Ace.png",
      opts: {
        saga: [ "s2", "s3", "s4", "s6", "s10"],
      }
    },
    {
      name: "Drophy",
      img: "099Drophy.jpeg",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Babe",
      img: "100Babe.png",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Zala",
      img: "101Zala.jpeg",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Daz Bonez",
      img: "102DazBonez.png",
      opts: {
        saga: [ "s2", "s6", "s11"],
      }
    },
    {
      name: "Banchi",
      img: "103Banchi.jpeg",
      opts: {
        saga: [ "s2"],
        ani: true
      }
    },
    {
      name: "Matsuge",
      img: "104Matsuge.jpeg",
      opts: {
        saga: [ "s2"],
        ani: true
      }
    },
    {
      name: "Toto",
      img: "105Toto.jpeg",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Koza",
      img: "106Koza.jpeg",
      opts: {
        saga: [ "s2", "s9"],
      }
    },
    {
      name: "Pell",
      img: "107Pell.jpeg",
      opts: {
        saga: [ "s2", "s9", "s11"],
      }
    },
    {
      name: "Chaka",
      img: "108Chaka.png",
      opts: {
        saga: [ "s2", "s9", "s11"],
      }
    },
    {
      name: "Miss Father's Day",
      img: "109MissFathersDay.jpeg",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Mister 7",
      img: "110Mister7.png",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Hina",
      img: "111Hina.jpeg",
      opts: {
        saga: [ "s2", "s6", "s9", "s11"],
      }
    },
    {
      name: "Terracotta",
      img: "112Terracotta.jpeg",
      opts: {
        saga: [ "s2"],
      }
    },
    {
      name: "Masira",
      img: "113Masira.jpeg",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Van Augur",
      img: "114VanAugur.jpeg",
      opts: {
        saga: [ "s3", "s4", "s6", "s9", "s11"],
      }
    },
    {
      name: "Jesus Burgess",
      img: "115JesusBurgess.jpeg",
      opts: {
        saga: [ "s3", "s4", "s6", "s8", "s9", "s11"],
      }
    },
    {
      name: "Bellamy",
      img: "117Bellamy.jpeg",
      opts: {
        saga: [ "s3", "s8"],
      }
    },
    {
      name: "Sarquiss",
      img: "118Sarquiss.png",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Doc Q",
      img: "119DocQ.jpeg",
      opts: {
        saga: [ "s3", "s4", "s6", "s9", "s11"],
      }
    },
    {
      name: "Stronger",
      img: "120Stronger.png",
      opts: {
        saga: [ "s3", "s4", "s6", "s9", "s11"],
        ani: true
      }
    },
    {
      name: "Marshall D. Teach",
      img: "122Blackbeard.jpeg",
      opts: {
        saga: [ "s3", "s4", "s6", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Shoujou",
      img: "123Shoujou.jpeg",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Mont Blanc Cricket",
      img: "124MontBlancCricket.jpeg",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Saint Jaygarcia Saturn",
      img: "126Saturn.jpeg",
      opts: {
        saga: [ "s3", "s4", "s9", "s11"],
      }
    },
    {
      name: "Saint Marcus Mars",
      img: "127Mars.jpeg",
      opts: {
        saga: [ "s3", "s4", "s9", "s11"],
      }
    },
    {
      name: "Saint Topman Warcury",
      img: "128Warcury.jpeg",
      opts: {
        saga: [ "s3", "s4", "s9", "s11"],
      }
    },
    {
      name: "Saint Ethanboron V. Nusjuro",
      img: "129Nusjuro.jpeg",
      opts: {
        saga: [ "s3", "s4", "s9", "s11"],
      }
    },
    {
      name: "Saint Shepherd Ju Peter",
      img: "130Peter.jpeg",
      opts: {
        saga: [ "s3", "s4", "s9", "s11"],
      }
    },
    {
      name: "Donquixote Doflamingo",
      img: "131Doflamingo.jpeg",
      opts: {
        saga: [ "s3", "s4", "s8", "s9", "s11"],
      }
    },
    {
      name: "Bartholomew Kuma",
      img: "132Kuma.jpeg",
      opts: {
        saga: [ "s3", "s5", "s6", "s7", "s9", "s11"],
      }
    },
    {
      name: "Tsuru",
      img: "133Tsuru.png",
      opts: {
        saga: [ "s3", "s6", "s8", "s11"],
      }
    },
    {
      name: "Sengoku",
      img: "134Sengoku.jpeg",
      opts: {
        saga: [ "s3", "s4", "s5", "s6", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Laffite",
      img: "135Laffite.jpeg",
      opts: {
        saga: [ "s3", "s4", "s6", "s9", "s11"],
      }
    },
    {
      name: "Rockstar",
      img: "136Rockstar.jpeg",
      opts: {
        saga: [ "s3", "s11"],
      }
    },
    {
      name: "Marco",
      img: "137Marco.png",
      opts: {
        saga: [ "s4", "s6", "s10", "s11"],
      }
    },
    {
      name: "Jozu",
      img: "138Jozu.jpeg",
      opts: {
        saga: [ "s4", "s6", "s10"],
      }
    },
    {
      name: "Edward Newgate",
      img: "139Whitebeard.jpeg",
      opts: {
        saga: [ "s3", "s4", "s6", "s10"],
      }
    },
    {
      name: "Wyper",
      img: "140Wyper.jpeg",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Gan Fall",
      img: "141GanFall.jpeg",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Pierre",
      img: "142Pierre.jpeg",
      opts: {
        saga: [ "s3"],
        ani: true
      }
    },
    {
      name: "Amazon",
      img: "143Amazon.jpeg",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Conis",
      img: "144Conis.jpeg",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Su",
      img: "145Su.png",
      opts: {
        saga: [ "s3"],
        ani: true
      }
    },
    {
      name: "Pagaya",
      img: "146Pagaya.jpeg",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Ohm",
      img: "147Ohm.jpeg",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Holy",
      img: "148Holy.jpg",
      opts: {
        saga: [ "s3"],
        ani: true
      }
    },
    {
      name: "Shura",
      img: "149Shura.jpg",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Fuza",
      img: "150Fuza.jpg",
      opts: {
        saga: [ "s3"],
        ani: true
      }
    },
    {
      name: "Satori",
      img: "151Satori.png",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Gedatsu",
      img: "152Gedatsu.jpg",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "McKinley",
      img: "153McKinley.png",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Aisa",
      img: "154Aisa.jpg",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Laki",
      img: "155Laki.png",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Kamakiri",
      img: "156Kamakiri.png",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Braham",
      img: "157Braham.png",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Genbo",
      img: "158Genbo.png",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Yama",
      img: "159Yama.jpg",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Enel",
      img: "160Enel.jpg",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Kalgara",
      img: "162Kalgara.png",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Noland",
      img: "163Noland.jpg",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Mousse",
      img: "164Mousse.png",
      opts: {
        saga: [ "s3"],
      }
    },
    {
      name: "Tonjit",
      img: "166Tonjit.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Porche",
      img: "167Porche.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Foxy",
      img: "168Foxy.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Hamburg",
      img: "169Hamburg.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Itomimizu",
      img: "170Itomimizu.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Chuchun",
      img: "171Chuchun.png",
      opts: {
        saga: [ "s4"],
        ani: true
      }
    },
    {
      name: "Capote",
      img: "172Capote.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Pickles",
      img: "173Pickles.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Big Pan",
      img: "174BigPan.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Kuzan",
      img: "175Kuzan.jpg",
      opts: {
        saga: [ "s4", "s6", "s8", "s11"],
      }
    },
    {
      name: "Yokozuna",
      img: "176Yokozuna.jpg",
      opts: {
        saga: [ "s4"],
        ani: true
      }
    },
    {
      name: "Chimney",
      img: "177Chimney.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Gonbe",
      img: "178Gonbe.png",
      opts: {
        saga: [ "s4"],
        ani: true
      }
    },
    {
      name: "Kokoro",
      img: "179Kokoro.png",
      opts: {
        saga: [ "s4", "s10"],
      }
    },
    {
      name: "Paullie",
      img: "180Paullie.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Iceburg",
      img: "182Iceburg.jpg",
      opts: {
        saga: [ "s4", "s10"],
      }
    },
    {
      name: "Kalifa",
      img: "183Kalifa.jpg",
      opts: {
        saga: [ "s4", "s11"],
      }
    },
    {
      name: "Rob Lucci",
      img: "184RobLucci.jpg",
      opts: {
        saga: [ "s4", "s9", "s10", "s11"],
      }
    },
    {
      name: "Kaku",
      img: "185Kaku.jpg",
      opts: {
        saga: [ "s4", "s9", "s11"],
      }
    },
    {
      name: "Peeply Lulu",
      img: "186PeeplyLulu.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Hattori",
      img: "187Hattori.png",
      opts: {
        saga: [ "s4", "s9", "s10", "s11"],
        ani: true
      }
    },
    {
      name: "Tilestone",
      img: "188Tilestone.png",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Zambai",
      img: "189Zambai.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Corgie",
      img: "190Corgie.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Franky",
      img: "191Franky.png",
      opts: {
        saga: [ "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Mozu",
      img: "192Mozu.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Kiwi",
      img: "193Kiwi.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Blueno",
      img: "194Blueno.jpg",
      opts: {
        saga: [ "s4", "s11"],
      }
    },
    {
      name: "Tom",
      img: "195Tom.jpg",
      opts: {
        saga: [ "s4", "s7", "s10"],
      }
    },
    {
      name: "Spandam",
      img: "196Spandam.png",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Jerry",
      img: "197Jerry.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "T Bone",
      img: "198TBone.png",
      opts: {
        saga: [ "s4", "s6", "s9", "s11"],
      }
    },
    {
      name: "Sodom",
      img: "199Sodom.png",
      opts: {
        saga: [ "s4"],
        ani: true
      }
    },
    {
      name: "Gomorrah",
      img: "200Gomorrah.png",
      opts: {
        saga: [ "s4"],
        ani: true
      }
    },
    {
      name: "Wanzey",
      img: "201Wanzey.png",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Nero",
      img: "202Nero.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Kumadori",
      img: "203Kumadori.jpg",
      opts: {
        saga: [ "s4", "s11"],
      }
    },
    {
      name: "Jabra",
      img: "204Jabra.jpg",
      opts: {
        saga: [ "s4", "s11"],
      }
    },
    {
      name: "Fukurou",
      img: "205Fukurou.jpg",
      opts: {
        saga: [ "s4", "s11"],
      }
    },
    {
      name: "Kashii",
      img: "206Kashii.png",
      opts: {
        saga: [ "s4", "s11"],
      }
    },
    {
      name: "Oimo",
      img: "207Oimo.jpg",
      opts: {
        saga: [ "s4", "s11"],
      }
    },
    {
      name: "Clover",
      img: "209Clover.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Saul",
      img: "210Saul.jpg",
      opts: {
        saga: [ "s4", "s11"],
      }
    },
    {
      name: "Spandine",
      img: "211Spandine.jpg",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Olvia",
      img: "212Olvia.png",
      opts: {
        saga: [ "s4"],
      }
    },
    {
      name: "Sakazuki",
      img: "213Akainu.jpeg",
      opts: {
        saga: [ "s4", "s6", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Funkfreed",
      img: "214Funkfreed.jpg",
      opts: {
        saga: [ "s4"],
        ani: true
      }
    },
    {
      name: "Momonga",
      img: "215Momonga.jpg",
      opts: {
      saga: [ "s4", "s6"],
      }
    },
    {
      name: "Onigumo",
      img: "216Onigumo.jpg",
      opts: {
      saga: [ "s4", "s6"],
      }
    },
    {
      name: "Doberman",
      img: "217Doberman.jpg",
      opts: {
      saga: [ "s4", "s6", "s11"],
      }
    },
    {
      name: "Strawberry",
      img: "219Strawberry.jpg",
      opts: {
      saga: [ "s4", "s6", "s7"],
      }
    },
    {
      name: "Monkey D. Garp",
      img: "220Garp.jpg",
      opts: {
      saga: [ "s4", "s6", "s9", "s10", "s11"],
      }
    },
    {
      name: "Thatch",
      img: "221Thatch.jpeg",
      opts: {
      saga: [ "s4", "s6"],
      }
    },
    {
      name: "Brook",
      img: "222Brook.png",
      opts: {
        saga: [ "s5", "s6", "s7", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Hildon",
      img: "224Hildon.png",
      opts: {
        saga: [ "s5"],
      }
    },
    {
      name: "Victoria Cindry",
      img: "225Cindry.png",
      opts: {
        saga: [ "s5"],
      }
    },
    {
      name: "Hogback",
      img: "226Hogback.png",
      opts: {
        saga: [ "s5"],
      }
    },
    {
      name: "Kumashi",
      img: "228Kumashi.jpg",
      opts: {
        saga: [ "s5"],
        ani: true
      }
    },
    {
      name: "Absalom",
      img: "229Absalom.jpg",
      opts: {
        saga: [ "s5"],
      }
    },
    {
      name: "Perona",
      img: "230Perona.jpg",
      opts: {
        saga: [ "s5", "s6", "s7", "s10", "s11"],
      }
    },
    {
      name: "Shimotsuki Ryuma",
      img: "231Ryuma.jpg",
      opts: {
        saga: [ "s5"],
      }
    },
    {
      name: "John",
      img: "232John.jpg",
      opts: {
        saga: [ "s5"],
      }
    },
    {
      name: "Charlotte Lola",
      img: "233Lola.jpg",
      opts: {
        saga: [ "s5", "s9"],
      }
    },
    {
      name: "Inuppe",
      img: "234Inuppe.jpg",
      opts: {
        saga: [ "s5"],
        ani: true
      }
    },
    {
      name: "Jigorou",
      img: "235Jigoro.jpg",
      opts: {
        saga: [ "s5"],
      }
    },
    {
      name: "Tararan",
      img: "236Tararan.jpg",
      opts: {
        saga: [ "s5"],
        ani: true
      }
    },
    {
      name: "Gecko Moria",
      img: "237GeckoMoriah.jpg",
      opts: {
        saga: [ "s5", "s6", "s10"],
      }
    },
    {
      name: "Oars",
      img: "238Oars.jpg",
      opts: {
        saga: [ "s5"],
      }
    },
    {
      name: "Yorki",
      img: "239Yorki.jpg",
      opts: {
        saga: [ "s5"],
      }
    },
    {
      name: "Camie",
      img: "240Camie.png",
      opts: {
        saga: [ "s6", "s7"],
      }
    },
    {
      name: "Pappag",
      img: "241Pappag.jpg",
      opts: {
        saga: [ "s6", "s7"],
        ani: true
      }
    },
    {
      name: "Duval",
      img: "242Duval.png",
      opts: {
        saga: [ "s6", "s7"],
      }
    },
    {
      name: "Macro",
      img: "243Macro.jpg",
      opts: {
        saga: [ "s6", "s7"],
      }
    },
    {
      name: "Saint Shalria",
      img: "244Shalria.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Saint Rosward",
      img: "245Rosward.jpg",
      opts: {
        saga: [ "s6", "s9", "s11"],
      }
    },
    {
      name: "Jean Bart",
      img: "246JeanBart.jpg",
      opts: {
        saga: [ "s6", "s9", "s10", "s11"],
      }
    },
    {
      name: "Shakky",
      img: "247Shakky.png",
      opts: {
        saga: [ "s6", "s7", "s11"],
      }
    },
    {
      name: "Capone Bege",
      img: "248Bege.png",
      opts: {
        saga: [ "s6", "s8", "s9"],
      }
    },
    {
      name: "Jewelry Bonney",
      img: "249Bonney.jpeg",
      opts: {
        saga: [ "s6", "s8", "s9", "s11"],
      }
    },
    {
      name: "Basil Hawkins",
      img: "250Hawkins.jpg",
      opts: {
        saga: [ "s6", "s8", "s10"],
      }
    },
    {
      name: "Eustass Kid",
      img: "251Kid.jpg",
      opts: {
        saga: [ "s6", "s8", "s10", "s11"],
      }
    },
    {
      name: "Scratchmen Apoo",
      img: "252Apoo.jpg",
      opts: {
        saga: [ "s6", "s8", "s10"],
      }
    },
    {
      name: "X Drake",
      img: "253XDrake.jpg",
      opts: {
        saga: [ "s6", "s8", "s10"],
      }
    },
    {
      name: "Urouge",
      img: "255Urouge.jpg",
      opts: {
        saga: [ "s6", "s8"],
      }
    },
    {
      name: "Killer",
      img: "256Killer.jpg",
      opts: {
        saga: [ "s6", "s8", "s10", "s11"],
      }
    },
    {
      name: "Trafalgar D. Water Law",
      img: "257Law.jpg",
      opts: {
        saga: [ "s6", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Bepo",
      img: "258Bepo.jpg",
      opts: {
        saga: [ "s6", "s9", "s10", "s11"],
      }
    },
    {
      name: "Saint Charlos",
      img: "260Charlos.jpeg",
      opts: {
        saga: [ "s6", "s9", "s11"],
      }
    },
    {
      name: "Heat",
      img: "261Heat.jpg",
      opts: {
        saga: [ "s6", "s8", "s10", "s11"],
      }
    },
    {
      name: "Wire",
      img: "262Wire.jpg",
      opts: {
        saga: [ "s6", "s8", "s10", "s11"],
      }
    },
    {
      name: "Disco",
      img: "263Disco.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Stansen",
      img: "264Stansen.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Silvers Rayleigh",
      img: "265Rayleigh.jpg",
      opts: {
        saga: [ "s6", "s7", "s10", "s11"],
      }
    },
    {
      name: "Borsalino",
      img: "266Kizaru.jpg",
      opts: {
        saga: [ "s6", "s9", "s11"],
      }
    },
    {
      name: "Sentomaru",
      img: "267Sentomaru.jpg",
      opts: {
        saga: [ "s6", "s7", "s11"],
      }
    },
    {
      name: "Marguerite",
      img: "268Marguerite.jpeg",
      opts: {
        saga: [ "s6", "s7", "s10"],
      }
    },
    {
      name: "Sweet Pea",
      img: "269Sweet Pea.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Aphelandra",
      img: "270Aphelandra.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Belladonna",
      img: "271Belladonna.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Kikyo",
      img: "272Kikyo.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Nerine",
      img: "273Nerine.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Gloriosa",
      img: "274Gloriosa.jpg",
      opts: {
        saga: [ "s6", "s7", "s11"],
      }
    },
    {
      name: "Ran",
      img: "275Ran.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Boa Marigold",
      img: "277Marigold.jpeg",
      opts: {
        saga: [ "s6", "s7", "s10", "s11"],
      }
    },
    {
      name: "Boa Hancock",
      img: "278Hancock.jpeg",
      opts: {
        saga: [ "s6", "s7", "s10", "s11"],
      }
    },
    {
      name: "Boa Sandersonia",
      img: "279Sandersonia.png",
      opts: {
        saga: [ "s6", "s7", "s10", "s11"],
      }
    },
    {
      name: "Enishida",
      img: "280Enishida.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Bacura",
      img: "281Bacura.jpeg",
      opts: {
        saga: [ "s6"],
        ani: true
      }
    },
    {
      name: "Haredas",
      img: "282Haredas.jpeg",
      opts: {
        saga: [ "s6", "s7"],
      }
    },
    {
      name: "Kitton",
      img: "283Kitton.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Heracles",
      img: "284Heracles.jpg",
      opts: {
        saga: [ "s6", "s7"],
      }
    },
    {
      name: "Pekkori",
      img: "285Pekkori.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Shanba",
      img: "286Shanba.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Comil",
      img: "287Comil.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Hannyabal",
      img: "288Hannyabal.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Domino",
      img: "289Domino.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Magellan",
      img: "290Magellan.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Jinbe",
      img: "291Jinbe.png",
      opts: {
        saga: [ "s6", "s7", "s9", "s10", "s11"],
      }
    },
    {
      name: "Sphinx",
      img: "292Sphinx.jpg",
      opts: {
        saga: [ "s6", "s10"],
        ani: true
      }
    },
    {
      name: "Saldeath",
      img: "293Saldeath.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Sadie",
      img: "295Sadie.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Minokoala",
      img: "296Minokoala.jpeg",
      opts: {
        saga: [ "s6"],
        ani: true
      }
    },
    {
      name: "Minotaurus",
      img: "297Minotaurus.jpg",
      opts: {
        saga: [ "s6"],
        ani: true
      }
    },
    {
      name: "Minorhinoceros",
      img: "298Minorhinoceros.jpeg",
      opts: {
        saga: [ "s6"],
        ani: true
      }
    },
    {
      name: "Minozebra",
      img: "299Minozebra.jpg",
      opts: {
        saga: [ "s6"],
        ani: true
      }
    },
    {
      name: "Inazuma",
      img: "300Inazuma.png",
      opts: {
        saga: [ "s6", "s9", "s11"],
      }
    },
    {
      name: "Emporio Ivankov",
      img: "301Ivankov.jpg",
      opts: {
        saga: [ "s6", "s9", "s11"],
      }
    },
    {
      name: "Shiryu",
      img: "304Shiryu.png",
      opts: {
        saga: [ "s6", "s8", "s9", "s10", "s11"],
      }
    },
    {
      name: "Lonz",
      img: "305Lonz.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Lacroix",
      img: "306Lacroix.jpeg",
      opts: {
        saga: [ "s6", "s9"],
      }
    },
    {
      name: "Portgas D. Rouge",
      img: "307Rouge.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Doma",
      img: "308Doma.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "McGuy",
      img: "309McGuy.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Squard",
      img: "310Squard.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Blamenco",
      img: "311Blamenco.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Vista",
      img: "312Vista.png",
      opts: {
        saga: [ "s6", "s10"],
      }
    },
    {
      name: "Curiel",
      img: "313Curiel.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Namur",
      img: "314Nemur.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Rakuyo",
      img: "318Rakuyo.jpeg",
      opts: {
        saga: [ "s6", "s10"],
      }
    },
    {
      name: "Blenheim",
      img: "319Blenheim.jpeg",
      opts: {
        saga: [ "s6", "s10"],
      }
    },
    {
      name: "Atmos",
      img: "320Atmos.jpeg",
      opts: {
        saga: [ "s6", "s10"],
      }
    },
    {
      name: "Izou",
      img: "321Izou.jpg",
      opts: {
        saga: [ "s6", "s10"],
      }
    },
    {
      name: "Epoida",
      img: "322Epoida.png",
      opts: {
        saga: [ "s6", "s10"],
      }
    },
    {
      name: "Haruta",
      img: "323Haruta.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Speed Jiru",
      img: "324SpeedJiru.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Kingdew",
      img: "325Kingdew.jpeg",
      opts: {
        saga: [ "s6", "s10"],
      }
    },
    {
      name: "Bastille",
      img: "326Bastille.jpeg",
      opts: {
        saga: [ "s6", "s8"],
      }
    },
    {
      name: "Dalmatian",
      img: "327Dalmatian.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Little Oars Jr.",
      img: "328LittleOarsJunior.jpg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Whitey Bay",
      img: "329WhiteyBay.png",
      opts: {
        saga: [ "s6", "s10"],
      }
    },
    {
      name: "Fossa",
      img: "330Fossa.jpeg",
      opts: {
        saga: [ "s6", "s10"],
      }
    },
    {
      name: "Sancrin",
      img: "331Sancrin.jpeg",
      opts: {
        saga: [ "s6", "s7"],
      }
    },
    {
      name: "Sanjuan Wolf",
      img: "334SanjuanWolf.jpeg",
      opts: {
        saga: [ "s6", "s11"],
      }
    },
    {
      name: "Catarina Devon",
      img: "335Devon.jpeg",
      opts: {
        saga: [ "s6", "s10", "s11"],
      }
    },
    {
      name: "Vasco Shot",
      img: "336Vasco.jpeg",
      opts: {
        saga: [ "s6", "s11"],
      }
    },
    {
      name: "Avalo Pizarro",
      img: "337Avalo.jpeg",
      opts: {
        saga: [ "s6", "s10", "s11"],
      }
    },
    {
      name: "Chadros Higelyges",
      img: "338Chadros.jpeg",
      opts: {
        saga: [ "s6", "s8"],
      }
    },
    {
      name: "Curly Dadan",
      img: "339CurlyDadan.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Dogra",
      img: "340Dogra.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Magra",
      img: "341Magra.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Porchemy",
      img: "342Porchemy.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Bluejam",
      img: "343Bluejam.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Sabo",
      img: "344Sabo.jpeg",
      opts: {
        saga: [ "s6", "s8", "s9", "s11"],
      }
    },
    {
      name: "Outlook III",
      img: "345Outlook.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
    {
      name: "Sterry",
      img: "347Sterry.jpeg",
      opts: {
        saga: [ "s6", "s9"],
      }
    },
    {
      name: "Kong",
      img: "349Kong.jpeg",
      opts: {
        saga: [ "s6", "s11"],
      }
    },
    {
      name: "Scotch",
      img: "350Scotch.jpeg",
      opts: {
        saga: [ "s6"],
      }
    },
  ]
