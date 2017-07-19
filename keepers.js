(function() {
  var players = ["Mike Trout", "Jose Altuve", "Mookie Betts", "Nolan Arenado", "Kris Bryant", "Clayton Kershaw", "Manny Machado", "Paul Goldschmidt", "Josh Donaldson", "Bryce Harper", "Madison Bumgarner", "Anthony Rizzo", "Miguel Cabrera", "Max Scherzer", "Charlie Blackmon", "Carlos Correa", "Chris Sale", "Trea Turner", "Corey Seager", "Noah Syndergaard", "Corey Kluber", "Francisco Lindor", "Joey Votto", "Edwin Encarnacion", "Freddie Freeman", "Jake Arrieta", "Daniel Murphy", "Xander Bogaerts", "Starling Marte", "Robinson Cano", "Justin Verlander", "Brian Dozier", "Jon Lester", "Carlos Gonzalez", "Yoenis Cespedes", "Jonathan Villar", "Trevor Story", "Johnny Cueto", "Giancarlo Stanton", "Ryan Braun", "George Springer", "Nelson Cruz", "Kyle Seager", "Buster Posey", "Christian Yelich", "Jose Abreu", "Chris Archer", "Andrew McCutchen", "Yu Darvish", "Matt Carpenter", "Rougned Odor", "Kenley Jansen", "Adrian Beltre", "Gregory Polanco", "Aroldis Chapman", "Wil Myers", "Carlos Martinez", "A.J. Pollock", "Zach Britton", "Ian Kinsler", "Carlos Carrasco", "Billy Hamilton", "Stephen Strasburg", "Dee Gordon", "Jacob deGrom", "J.D. Martinez", "Jose Bautista", "Adam Jones", "Kyle Hendricks", "Masahiro Tanaka", "Justin Upton", "Mark Trumbo", "Gary Sanchez", "Jean Segura", "Todd Frazier", "Hanley Ramirez", "Carlos Santana", "Mark Melancon", "DJ LeMahieu", "Kyle Schwarber", "Seung Hwan Oh", "Chris Davis", "Rick Porcello", "Alex Bregman", "Eric Hosmer", "Jose Quintana", "Jonathan Lucroy", "Wade Davis", "Dustin Pedroia", "Danny Duffy", "Roberto Osuna", "Evan Longoria", "Gerrit Cole", "Edwin Diaz", "Matt Kemp", "Stephen Piscotty", "Khris Davis", "Marcus Stroman", "Jackie Bradley Jr.", "Jose Ramirez", "Cole Hamels", "Kelvin Herrera", "Craig Kimbrel", "Julio Teheran", "Anthony Rendon", "Zack Greinke", "Kevin Gausman", "Adam Eaton", "Andrew Benintendi", "Jason Kipnis", "Justin Turner", "Aaron Sanchez", "Kenta Maeda", "Ken Giles", "Addison Russell", "Andrew Miller", "David Price", "Lorenzo Cain", "Danny Salazar", "Albert Pujols", "Miguel Sano", "Troy Tulowitzki", "Marcell Ozuna", "Jeurys Familia", "Cody Allen", "Willson Contreras", "Rich Hill", "Brandon Belt", "Ben Zobrist", "Alex Colome", "John Lackey", "Elvis Andrus", "Michael Fulmer", "Michael Brantley", "Adam Duvall", "Felix Hernandez", "Odubel Herrera", "Brad Miller", "Kendrys Morales", "Javier Baez", "Drew Smyly", "Kole Calhoun", "Adrian Gonzalez", "Eduardo Nunez", "David Robertson", "Dallas Keuchel", "Carlos Gomez", "Ian Desmond", "Aledmys Diaz", "Jay Bruce", "Dexter Fowler", "Maikel Franco", "J.T. Realmuto", "Tanner Roark", "Matt Shoemaker", "Jake Odorizzi", "Dellin Betances", "Jake Lamb", "A.J. Ramos", "Yasmani Grandal", "Jeff Samardzija", "Steven Matz", "Evan Gattis", "Melky Cabrera", "Lance McCullers", "Jose Peraza", "Victor Martinez", "Marco Estrada", "Randal Grichuk", "Tony Watson", "Joc Pederson", "Francisco Rodriguez", "Salvador Perez", "Matt Harvey", "Raisel Iglesias", "Mike Napoli", "Curtis Granderson", "Michael Pineda", "Jonathan Schoop", "Dansby Swanson", "Yadier Molina", "Nick Castellanos", "Jon Gray", "Byron Buxton", "Carlos Beltran", "J.A. Happ", "Starlin Castro", "Brandon Crawford", "Ender Inciarte", "Adam Wainwright", "James Paxton", "Jacoby Ellsbury", "Aaron Nola", "Mike Moustakas", "Greg Bird", "Jameson Taillon", "Sean Manaea", "Jim Johnson", "Russell Martin", "Carlos Rodon", "Keon Broxton", "Logan Forsythe", "Sam Dyson", "Matt Moore", "Nick Markakis", "Yasmany Tomas", "Kevin Kiermaier", "Kevin Pillar", "Eric Thames", "Shawn Kelley", "Joe Panik", "Yangervis Solarte", "Robbie Ray", "Cam Bedrosian", "Chris Carter", "Yasiel Puig", "Drew Pomeranz", "Hector Neris", "Rajai Davis", "Brian McCann", "Hunter Pence", "Jarrod Dyson", "Jason Heyward", "Greg Holland", "Max Kepler", "Vince Velasquez", "Pablo Sandoval", "Jordan Zimmermann", "Taijuan Walker", "Matt Holliday", "Aaron Judge", "Asdrubal Cabrera", "Denard Span", "Sonny Gray", "Mitch Moreland", "Jose Reyes", "Yoan Moncada", "Stephen Vogt", "Neil Walker", "Jason Hammel", "Michael Wacha", "Brett Gardner", "Hunter Renfroe", "Ryan Madson", "Jedd Gyorko", "Neftali Feliz", "Garrett Richards", "Tim Anderson", "Trevor Bauer", "Hisashi Iwakuma", "Dylan Bundy", "Michael Conforto", "Martin Prado", "Nate Jones", "Yulieski Gurriel", "Ervin Santana", "Brandon Maurer", "Hernan Perez", "C.J. Cron", "Julio Urias", "Addison Reed", "Fernando Rodney", "Francisco Liriano", "Brandon Phillips", "Brandon Drury", "Nomar Mazara", "Zach Davies", "David Dahl", "Ian Kennedy", "Marcus Semien", "Brandon Kintzler", "Tommy Joseph", "Collin McHugh", "Gio Gonzalez", "Ryon Healy", "Josh Harrison", "Koda Glover", "Jeremy Hellickson", "Matt Wieters", "David Peralta", "Jerad Eickhoff", "Ivan Nova", "Corey Dickerson", "Jharel Cotton", "Justin Bour", "Adam Ottavino", "Didi Gregorius", "Joe Ross", "Anthony DeSclafani", "Manuel Margot", "Devon Travis", "Eduardo Rodriguez", "Eugenio Suarez", "Welington Castillo", "Jung Ho Kang", "Domingo Santana", "Steven Wright", "Blake Snell", "Chris Tillman", "Josh Bell", "Wilson Ramos", "Mitch Haniger", "Lance Lynn", "Mike Foltynewicz", "Junior Guerra", "Tyler Glasnow", "Alcides Escobar", "Alex Cobb", "Jeanmar Gomez", "Josh Reddick", "Cesar Hernandez", "Jorge Soler", "Robert Gsellman", "Kyle Barraclough", "Dan Straily", "Bartolo Colon", "Brandon Moss", "Joe Musgrove", "Orlando Arcia", "Brad Brach", "Francisco Cervelli", "Tom Murphy", "Alex Gordon", "Luis Severino", "Daniel Norris", "Lucas Duda", "Mike Zunino", "Joe Mauer", "Travis d'Arnaud", "Mike Montgomery", "Travis Shaw", "Michael Lorenzen", "Danny Valencia", "Santiago Casilla", "Howie Kendrick", "Tyler Anderson", "Brandon Finnegan", "Travis Jankowski", "Shin-Soo Choo", "Cameron Rupp", "Matt Bush", "Carter Capps", "Ben Revere", "Jayson Werth", "Kolten Wong", "Trevor Rosenthal", "Steve Pearce", "Lucas Giolito", "Blake Treinen", "Cameron Maybin"];

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
