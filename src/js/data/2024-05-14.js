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
