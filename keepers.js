(function() {
    var players = ["Mike Trout", "Paul Goldschmidt", "Bryce Harper", "Clayton Kershaw", "Josh Donaldson", "Jose Altuve", "Andrew McCutchen", "Giancarlo Stanton", "Nolan Arenado", "Carlos Correa", "Manny Machado", "Jose Bautista", "Max Scherzer", "Edwin Encarnacion", "Miguel Cabrera", "Dee Gordon", "Kris Bryant", "Anthony Rizzo", "Jose Abreu", "A.J. Pollock", "Jake Arrieta", "Chris Sale", "Chris Davis", "Madison Bumgarner", "Mookie Betts", "David Price", "Todd Frazier", "Buster Posey", "Joey Votto", "J.D. Martinez", "Matt Harvey", "Starling Marte", "Robinson Cano", "Charlie Blackmon", "Jacob deGrom", "Carlos Gomez", "Gerrit Cole", "Matt Carpenter", "Miguel Sano", "Corey Kluber", "Yoenis Cespedes", "George Springer", "Nelson Cruz", "Troy Tulowitzki", "Dallas Keuchel", "Zack Greinke", "Adrian Gonzalez", "Brian Dozier", "Kyle Seager", "Carlos Gonzalez", "David Ortiz", "Lorenzo Cain", "Kenley Jansen", "Chris Archer", "Justin Upton", "Xander Bogaerts", "Jose Fernandez", "Kyle Schwarber", "Carlos Carrasco", "Adam Jones", "Adrian Beltre", "Wade Davis", "Stephen Strasburg", "Craig Kimbrel", "Prince Fielder", "Noah Syndergaard", "Felix Hernandez", "Jason Heyward", "Ian Kinsler", "Corey Seager", "Sonny Gray", "Freddie Freeman", "Francisco Lindor", "Albert Pujols", "Ryan Braun", "Eric Hosmer", "Jon Lester", "Johnny Cueto", "Cody Allen", "Hunter Pence", "Trevor Rosenthal", "David Peralta", "Jonathan Lucroy", "Jacoby Ellsbury", "Adam Eaton", "Ken Giles", "Michael Brantley", "Adam Wainwright", "Rougned Odor", "Yasiel Puig", "Ben Revere", "Brandon Belt", "Brian McCann", "Jason Kipnis", "Gregory Polanco", "Matt Kemp", "Carlos Martinez", "Aroldis Chapman", "Marcus Stroman", "Mark Melancon", "Danny Salazar", "Christian Yelich", "Maikel Franco", "DJ LeMahieu", "Zach Britton", "Kole Calhoun", "Jeurys Familia", "Kolten Wong", "Cole Hamels", "Garrett Richards", "Corey Dickerson", "Tyson Ross", "Hanley Ramirez", "Evan Longoria", "David Robertson", "Jeff Samardzija", "Elvis Andrus", "Billy Hamilton", "Salvador Perez", "Daniel Murphy", "Ben Zobrist", "Randal Grichuk", "Hector Rondon", "Jordan Zimmermann", "Evan Gattis", "Shin-Soo Choo", "Neil Walker", "Drew Smyly", "Justin Verlander", "Francisco Rodriguez", "Russell Martin", "Anthony Rendon", "A.J. Ramos", "Michael Wacha", "Francisco Liriano", "Jay Bruce", "Masahiro Tanaka", "Byung Ho Park", "Ender Inciarte", "Ian Desmond", "Brandon Crawford", "Jonathan Papelbon", "Brad Ziegler", "Jose Quintana", "Kendrys Morales", "Brett Gardner", "Michael Pineda", "Shawn Tolleson", "Addison Russell", "Dellin Betances", "Kevin Pillar", "Curtis Granderson", "Brett Lawrie", "Billy Burns", "Huston Street", "Scott Kazmir", "Lucas Duda", "Josh Harrison", "Mark Teixeira", "Justin Turner", "Hisashi Iwakuma", "Raisel Iglesias", "Jung Ho Kang", "Jake McGee", "John Lackey", "Steven Matz", "Wei-Yin Chen", "Travis d'Arnaud", "Jaime Garcia", "Dustin Pedroia", "Matt Duffy", "Mike Fiers", "Mike Moustakas", "Sean Doolittle", "Yadier Molina", "Mark Trumbo", "Julio Teheran", "Delino DeShields", "Melky Cabrera", "Andrew Miller", "Yordano Ventura", "Carlos Santana", "Gio Gonzalez", "Drew Storen", "Shelby Miller", "Brad Boxberger", "Joc Pederson", "Starlin Castro", "Logan Forsythe", "Yu Darvish", "Kyle Hendricks", "Kenta Maeda", "Denard Span", "Brandon Phillips", "Andrelton Simmons", "Stephen Vogt", "Devin Mesoraco", "Anibal Sanchez", "Mike Leake", "Pablo Sandoval"];

    var adpToPrice = function(adpRank){
       if (adpRank === 0) { // not on list
           return 1;
       } else if (adpRank <= 10) {
           return 9;
       } else if (adpRank <= 20) {
           return 8;
       } else if (adpRank <= 30) {
           return 7;
        }else if (adpRank <= 40) {
           return 6;
       } else if (adpRank <= 50) {
           return 5;
       } else if (adpRank <= 90) {
           return 4;
       } else if (adpRank <= 140) {
           return 3;
       } else if (adpRank <= 190) {
           return 2;
       } else {
           return 1;
       }
    };

    var adpToRound = function(adpRank) {
        if (adpRank === 0) { // not on list
            return ">20";
        } else {
            return parseInt((adpRank - 1) / 10) + 1
        }
    };

    var playerTags = _.select(jQuery(".playertablePlayerName a"), function(tag){
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
        return (rank === 0 ? 201 : player.adpRank);
    });


    var playerRows = _.map(playerPrices, function(player){
        var row = "<tr>\
              <td style='padding-left: 5px;'>" + player.name + "</td> \
              <td style='padding-left: 35px;'>" + (player.adpRank === 0 ? ">200" : String(player.adpRank) ) + "</td> \
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

})()