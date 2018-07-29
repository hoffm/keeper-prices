(function() {
  var players = ["Mike Trout", "Jose Altuve", "Nolan Arenado", "Bryce Harper", "Mookie Betts", "Clayton Kershaw", "Giancarlo Stanton", "Trea Turner", "Charlie Blackmon", "Max Scherzer", "Paul Goldschmidt", "Carlos Correa", "Corey Kluber", "Kris Bryant", "Chris Sale", "Manny Machado", "Joey Votto", "Aaron Judge", "Francisco Lindor", "Anthony Rizzo", "Freddie Freeman", "J.D. Martinez", "Jose Ramirez", "Stephen Strasburg", "Cody Bellinger", "George Springer", "Josh Donaldson", "Noah Syndergaard", "Brian Dozier", "Gary Sanchez", "Carlos Carrasco", "Kenley Jansen", "Dee Gordon", "Corey Seager", "Jose Abreu", "Jacob deGrom", "Justin Verlander", "Luis Severino", "Justin Upton", "Alex Bregman", "Craig Kimbrel", "Christian Yelich", "Edwin Encarnacion", "Anthony Rendon", "Marcell Ozuna", "Andrew Benintendi", "Yu Darvish", "Rhys Hoskins", "Nelson Cruz", "Zack Greinke", "Buster Posey", "Robbie Ray", "Dallas Keuchel", "Starling Marte", "Carlos Martinez", "Elvis Andrus", "Chris Archer", "Robinson Cano", "Jonathan Schoop", "Wil Myers", "Byron Buxton", "Khris Davis", "Tommy Pham", "Yoenis Cespedes", "Gerrit Cole", "Aroldis Chapman", "Eric Hosmer", "Xander Bogaerts", "A.J. Pollock", "Jose Quintana", "Willson Contreras", "Aaron Nola", "Andrew McCutchen", "Miguel Sano", "DJ LeMahieu", "Roberto Osuna", "Billy Hamilton", "Corey Knebel", "Jean Segura", "Lorenzo Cain", "James Paxton", "Whit Merrifield", "Masahiro Tanaka", "Jake Arrieta", "Joey Gallo", "Nicholas Castellanos", "Ryan Braun", "Trevor Story", "Daniel Murphy", "Rougned Odor", "Mike Moustakas", "Madison Bumgarner", "Edwin Diaz", "Ken Giles", "Travis Shaw", "Rich Hill", "Kyle Hendricks", "Domingo Santana", "Carlos Santana", "Yasiel Puig", "Ian Desmond", "Ender Inciarte", "Felipe Rivero", "Jose Berrios", "Alex Wood", "Didi Gregorius", "Adam Jones", "Kyle Seager", "Rafael Devers", "Cody Allen", "Luis Castillo", "Eddie Rosario", "Matt Carpenter", "Raisel Iglesias", "Trevor Bauer", "Shohei Ohtani", "Salvador Perez", "Jon Lester", "Miguel Cabrera", "Justin Turner", "Justin Smoak", "Javier Baez", "Eduardo Nunez", "Luke Weaver", "Matt Olson", "Lance McCullers Jr.", "Sonny Gray", "Manuel Margot", "David Price", "Brad Hand", "Marwin Gonzalez", "Wade Davis", "Adrian Beltre", "Sean Doolittle", "Michael Conforto", "Adam Eaton", "Zack Godley", "Nomar Mazara", "Gregory Polanco", "Jay Bruce", "Chris Taylor", "Gio Gonzalez", "Alex Colome", "Brett Gardner", "Evan Gattis", "Jake Lamb", "Ian Happ", "Adam Duvall", "Josh Bell", "Marcus Stroman", "Ryan Zimmerman", "Dylan Bundy", "Ozzie Albies", "Ronald Acuna", "Johnny Cueto", "Greg Bird", "Arodys Vizcaino", "Kevin Gausman", "Evan Longoria", "Kyle Schwarber", "Justin Bour", "Josh Reddick", "Jon Gray", "Trey Mancini", "Kevin Kiermaier", "J.T. Realmuto", "Paul DeJong", "Ian Kinsler", "Danny Duffy", "Yoan Moncada", "Jeurys Familia", "Yadier Molina", "Steven Souza Jr.", "Garrett Richards", "Orlando Arcia", "Aaron Sanchez", "Andrelton Simmons", "Delino DeShields", "Eric Thames", "Chase Anderson", "Taijuan Walker", "Mark Melancon", "Michael Fulmer", "Eugenio Suarez", "Hector Neris", "Cole Hamels", "Danny Salazar", "Andrew Miller", "Avisail Garcia", "Dexter Fowler", "Archie Bradley", "Kenta Maeda", "Charlie Morton", "Odubel Herrera", "Chris Davis", "Brandon Morrow", "Corey Dickerson", "Logan Morrison", "Matt Chapman", "Jacob Faria", "Ben Zobrist", "Julio Teheran", "Kole Calhoun", "Addison Russell", "Jeff Samardzija", "Stephen Piscotty", "Zack Cozart", "Brandon Crawford", "Jameson Taillon", "Joe Panik", "Mike Zunino", "Jackie Bradley Jr.", "Kendrys Morales", "Dansby Swanson", "Max Kepler", "Kelvin Herrera", "Matt Kemp", "David Robertson", "Yangervis Solarte", "Asdrubal Cabrera", "Scooter Gennett", "Carlos Gonzalez", "CC Sabathia", "Kevin Pillar", "Jason Kipnis", "Blake Treinen", "Shin-Soo Choo", "Michael Wacha", "Matt Harvey", "Lance Lynn", "Joakim Soria", "Wilson Ramos", "Yonder Alonso", "Jonathan Villar", "Jose Peraza", "Ervin Santana", "Rick Porcello", "Felix Hernandez", "Tim Beckham", "Fernando Rodney", "Starlin Castro", "Chad Green", "Michael Brantley", "Bradley Zimmer", "Austin Barnes", "Jordan Montgomery", "Maikel Franco", "Aaron Hicks", "Cesar Hernandez", "Albert Pujols", "Jonathan Lucroy", "Dellin Betances", "Alex Cobb", "Michael Taylor", "Zach Davies", "Lucas Giolito", "Randal Grichuk", "Josh Harrison", "Hanley Ramirez", "Tim Anderson", "Brad Peacock", "Jose Martinez", "Todd Frazier", "Shane Greene", "Ryon Healy", "Mike Clevinger", "Jake Odorizzi", "Brian McCann", "Marco Estrada", "Scott Schebler", "Tanner Roark", "David Peralta", "Drew Pomeranz", "Hunter Renfroe", "Aaron Altherr", "Greg Holland", "Mitch Haniger", "Mark Trumbo", "Dominic Leone", "Patrick Corbin", "Cam Bedrosian", "Brad Brach", "J.A. Happ", "Yuli Gurriel", "Welington Castillo", "Blake Parker", "Tyler Chatwood", "Blake", "Yasmani Grandal", "Zach Britton*", "Marcus Semien", "Alex Claudio", "Dinelson Lamet", "Alex Reyes", "Sean Manaea", "Scott Kingery", "Jimmy Nelson", "Chris Devenski", "Brandon Belt", "Austin Hedges", "Amed Rosario", "Eduardo Rodriguez", "Miles Mikolas", "Mike Leake", "Lewis Brinson", "Lucas Duda", "Brad Ziegler", "Luke Gregerson", "Gleyber Torres", "Addison Reed", "Carl Edwards Jr.", "Steven Matz", "Josh Hader", "Matt Shoemaker", "Ryan McMahon", "Mike Foltynewicz", "Chris Owings", "Tommy Kahnle", "Matt Davidson", "German Marquez", "Michael Kopech", "Robinson Chirinos", "Willie Calhoun", "David Dahl", "Luiz Gohara", "Carlos Gomez", "Ivan Nova", "Mallex Smith", "Ryan Madson", "Nick Markakis", "Kolten Wong", "Sean Newcomb", "C.J. Cron", "Nate Jones", "Victor Robles", "Jeimer Candelario", "Reynaldo Lopez", "Russell Martin", "Jedd Gyorko", "Brandon Drury", "Joe Mauer", "Adam Wainwright", "Jesse Winker", "Walker Buehler", "Collin McHugh", "Jose Urena", "Travis d'Arnaud", "Jack Flaherty", "Cameron Maybin", "A.J. Minter"]

  var roundSize = 11;

  var adpToPrice = function(adpRank){
    if (adpRank === 0) { // not on list
      return 1;
    } else if (adpRank <= 1 * roundSize) {
      return 9;
    } else if (adpRank <= 2 * roundSize) {
      return 8;
    } else if (adpRank <= 3 * roundSize) {
      return 7;
    }else if (adpRank <= 4 * roundSize) {
      return 6;
    } else if (adpRank <= 5 * roundSize) {
      return 5;
    } else if (adpRank <= 9 * roundSize) {
      return 4;
    } else if (adpRank <= 14 * roundSize) {
      return 3;
    } else if (adpRank <= 19 * roundSize) {
      return 2;
    } else {
      return 1;
    }
  };

  var adpToRound = function(adpRank) {
    if (adpRank === 0) { // not on list
      return ">20";
    } else {
      return parseInt((adpRank - 1) / roundSize) + 1
    }
  };

  var playerTags = _.filter(jQuery(".playertablePlayerName a"), function(tag){
    return tag.text !== "";
  });

  var playerPrices = _.map(playerTags, function(tag){
    var name = tag.text,
      adpRank = _.indexOf(players, name) + 1;

    return {
      name: name,
      adpRank: adpRank,
      adpRound: adpToRound(adpRank),
      keeperPrice: adpToPrice(adpRank)
    }
  });

  playerPrices = _.sortBy(playerPrices, function(player){
    var nameParts = player.name.split(" "),
      nameCount = nameParts.length,
      lastName = nameParts[nameCount - 1];

    return lastName;
  });

  playerPrices = _.sortBy(playerPrices, function(player){
    var price = player.keeperPrice;

    return -player.keeperPrice;
  });

  playerPrices = _.sortBy(playerPrices, function(player){
    var rank = player.adpRank;
    return (rank === 0 ? players.length : player.adpRank);
  });

  var playerRows = _.map(playerPrices, function(player){
    var row = "<tr>\
              <td style='padding-left: 5px;'>" + player.name + "</td> \
              <td style='padding-left: 35px;'>" + (player.adpRank === 0 ? ">" + String(players.length) : String(player.adpRank) ) + "</td> \
              <td style='padding-left: 35px;'>" + String(player.adpRound) + "</td> \
              <td style='padding-left: 35px;'>" + "$" + String(player.keeperPrice) + "</td> \
          </tr>";
    return row;
  });

  var outputHtml =
    "<style>" +
    "table {border-collapse: collapse; margin-left:auto; margin-right:auto; margin-top: 20px;}" +
    "table.center {}" +
    "table, th, td {border: 1px solid black;}" +
    "</style>" +
    "<table>" +
    "<tr>" +
    "<th style='min-width: 200px;'>Player</th>" +
    "<th style='width: 90px'>ADP Rank</th>" +
    "<th style='width: 90px'>ADP Round</th>" +
    "<th style='width: 90px'>Price</th>" +
    "</tr>" +
    playerRows.join("\n") +
    "</table>"

  jQuery("body").replaceWith(outputHtml)

})();
