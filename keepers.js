(function() {
  var players = ["Mike Trout", "Mookie Betts", "Max Scherzer", "Jose Ramirez", "J.D. Martinez", "Nolan Arenado", "Chris Sale", "Christian Yelich", "Jacob deGrom", "Jose Altuve", "Trea Turner", "Francisco Lindor", "Alex Bregman", "Manny Machado", "Bryce Harper", "Ronald Acuna Jr.", "Giancarlo Stanton", "Justin Verlander", "Corey Kluber", "Javier Baez", "Aaron Judge", "Freddie Freeman", "Paul Goldschmidt", "Aaron Nola", "Gerrit Cole", "Charlie Blackmon", "Trevor Story", "Kris Bryant", "Blake Snell", "Anthony Rizzo", "Trevor Bauer", "Juan Soto", "Noah Syndergaard", "Andrew Benintendi", "Starling Marte", "Whit Merrifield", "Carlos Carrasco", "Cody Bellinger", "Anthony Rendon", "Xander Bogaerts", "Walker Buehler", "Rhys Hoskins", "Khris Davis", "Patrick Corbin", "Carlos Correa", "Joey Votto", "Ozzie Albies", "George Springer", "James Paxton", "J.T. Realmuto", "Edwin Diaz", "Gleyber Torres", "Nicholas Castellanos", "Zack Greinke", "Lorenzo Cain", "Kenley Jansen", "Eugenio Suarez", "Stephen Strasburg", "Matt Carpenter", "Mitch Haniger", "Daniel Murphy", "Clayton Kershaw", "Blake Treinen", "Jean Segura", "Vladimir Guerrero Jr.", "Aroldis Chapman", "Mike Clevinger", "Luis Severino", "Jameson Taillon", "Marcell Ozuna", "Eddie Rosario", "Tommy Pham", "Jack Flaherty", "Corey Seager", "Gary Sanchez", "Jose Abreu", "Michael Conforto", "Miguel Andujar", "Jose Berrios", "Nelson Cruz", "Roberto Osuna", "David Price", "Justin Turner", "Jesus Aguilar", "Yasiel Puig", "Justin Upton", "Brad Hand", "Robinson Cano", "Felipe Vazquez", "Madison Bumgarner", "Craig Kimbrel", "Matt Chapman", "Dee Gordon", "A.J. Pollock", "Joey Gallo", "Mike Foltynewicz", "Jonathan Villar", "Andrew McCutchen", "Zack Wheeler", "Willson Contreras", "David Dahl", "Scooter Gennett", "Edwin Encarnacion", "Aaron Hicks", "Masahiro Tanaka", "Mike Moustakas", "Travis Shaw", "Miles Mikolas", "Michael Brantley", "Kirby Yates", "David Peralta", "Josh Hader", "Adalberto Mondesi", "Josh Donaldson", "Jose Peraza", "German Marquez", "Buster Posey", "Wil Myers", "Yasmani Grandal", "Charlie Morton", "Mallex Smith", "Yadier Molina", "Brian Dozier", "Chris Archer", "David Robertson", "Rougned Odor", "Ender Inciarte", "Raisel Iglesias", "Sean Doolittle", "Victor Robles", "Luis Castillo", "J.A. Happ", "Stephen Piscotty", "Robbie Ray", "Eloy Jimenez", "Cole Hamels", "Carlos Santana", "Eric Hosmer", "Ian Desmond", "Rick Porcello", "Kyle Hendricks", "Matt Olson", "Jose Leclerc", "Amed Rosario", "Eduardo Rodriguez", "Jurickson Profar", "Yu Darvish", "Max Muncy", "Tim Anderson", "Ken Giles", "Wade Davis", "Wilson Ramos", "Rafael Devers", "Miguel Cabrera", "Nomar Mazara", "Corey Dickerson", "Yoan Moncada", "Elvis Andrus", "Shane Bieber", "Brandon Nimmo", "Billy Hamilton", "Andrelton Simmons", "Eduardo Escobar", "Kyle Schwarber", "Jose Quintana", "Shohei Ohtani", "Dallas Keuchel", "Adam Eaton", "Andrew Heaney", "Nick Pivetta", "Nathan Eovaldi", "Corey Knebel", "Yusei Kikuchi", "Jon Lester", "Jose Alvarado", "Jake Arrieta", "Paul DeJong", "Kenta Maeda", "Rich Hill", "Yuli Gurriel", "Asdrubal Cabrera", "Byron Buxton", "Ryan Braun", "Harrison Bader", "Cody Allen", "Cesar Hernandez", "Will Smith", "Jesse Winker", "Jonathan Schoop", "Jackie Bradley Jr.", "Justin Smoak", "Max Kepler", "Andrew Miller", "Jose Martinez", "Hunter Renfroe", "Kevin Gausman", "Collin McHugh", "Odubel Herrera", "Kyle Freeland", "Marwin Gonzalez", "Jon Gray", "Chris Taylor", "Jorge Polanco", "Marcus Semien", "Ross Stripling", "Tyler Glasnow", "Arodys Vizcaino", "Marco Gonzales", "Mike Zunino", "Tyler Skaggs", "DJ LeMahieu", "Joey Lucchesi", "Matt Barnes", "Josh Bell", "Joe Musgrove", "Danny Jansen", "Austin Meadows", "Hyun-Jin Ryu", "Nick Markakis", "Ketel Marte", "Jake Bauers", "Brian Anderson", "Luke Voit", "Lourdes Gurriel Jr.", "Archie Bradley", "Jordan Hicks", "C.J. Cron", "Nick Senzel", "Sean Newcomb", "Francisco Cervelli", "Trey Mancini", "Hunter Strickland", "Kyle SeagerIL10", "Adam Frazier", "Julio Teheran", "Alex Wood", "Kevin Pillar", "Jay Bruce", "Wilmer Flores", "Jake Lamb", "Shin-Soo Choo", "Jhoulys Chacin", "Randal Grichuk", "Dellin Betances", "Joc Pederson", "Jed Lowrie", "Carlos MartinezIL10", "Ben Zobrist", "Evan Longoria", "Domingo Santana"]
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
      return "-";
    } else {
      return parseInt((adpRank - 1) / roundSize) + 1
    }
  };

  var playerTags = [].slice.call(document.getElementsByClassName('player-column__athlete'))

  var playerNames = playerTags.map((tag) => tag.textContent.replace(/DTD$/, ""))

  const comperator = (valueFunc) => (a, b) => {
    const aVal = valueFunc(a);
    const bVal = valueFunc(b);

    if (aVal > bVal) return 1;
    if (bVal > aVal) return -1;
  
    return 0;
  }

  var playerPrices = playerNames.map(function(name){
    adpRank = players.indexOf(name) + 1;

    return {
      name: name,
      adpRank: adpRank,
      adpRound: adpToRound(adpRank),
      keeperPrice: adpToPrice(adpRank)
    }
  });

  playerPrices.sort(
    comperator(
      (player) => {
        var nameParts = player.name.split(" "),
          nameCount = nameParts.length,
          lastName = nameParts[nameCount - 1];

        return lastName.toLowerCase();
      }
    )
  ).sort(
    comperator(
      (player) => {
        return -player.keeperPrice;
      }
    )
  ).sort(
    comperator(
      (player) => {
        var rank = player.adpRank;
        return (rank === 0 ? players.length : player.adpRank);      }
    )
  );

  var playerRows = playerPrices.map(function(player){
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
    "</table>";

    document.getElementsByTagName('body')[0].innerHTML = outputHtml;
})();
