

function recapPredictions() {

    	var guestName = document.getElementById("name").value;
      var guestGreeting = "Thanks for submitting your recap, " + guestName + "! Please save the following page to keep your predictions! :)";
   		window.alert(guestGreeting);
      document.getElementById("greeting").innerHTML = "May your predictions come true, " + guestName + "!"
      
    //console.log(document.getElementById("name").value);

    document.getElementById("recapTitle").innerHTML = guestName + "'s Formula 1 2023 Season Predictions"

    //const element = document.getElementById("constructorsChampionImage");

    var driversChampion = document.getElementById("drivers").value;
    document.getElementById("driversChampionResult").innerHTML = "I predict that " + driversChampion + " will win the 2023 Drivers' Champion!"   
    console.log(driversChampion);
      var driversChampionImage = document.getElementById("driversChampionImage");
    if (driversChampion == "Max Verstappen") {
      driversChampionImage.setAttribute("src", "resources/MaxVerstappen.jpg");
    } else if (driversChampion == "Charles Leclerc") {
      driversChampionImage.setAttribute("src", "resources/CharlesLeclerc.jpg");
    } else if (driversChampion == "Sergio Perez") {
      driversChampionImage.setAttribute("src", "resources/SergioPerez.jpg");
    } else if (driversChampion == "George Russell") {
      driversChampionImage.setAttribute("src", "resources/GeorgeRussell.jpg");
    } else if (driversChampion == "Carlos Sainz") {
      driversChampionImage.setAttribute("src", "resources/CarlosSainz.jpg");
    } else if (driversChampion == "Lewis Hamilton") {
      driversChampionImage.setAttribute("src", "resources/LewisHamilton.jpg");
    } else if (driversChampion == "Lando Norris") {
      driversChampionImage.setAttribute("src","resources/LandoNorris.jpg");
    } else if (driversChampion == "Fernando Alonso") {
      driversChampionImage.setAttribute("src", "resources/FernandoAlonso.jpg");
    } else {
      driversChampionImage.setAttribute("src", "resources/Others.jpg");
    }
    driversChampionImage.setAttribute("width", "500px");
    driversChampionImage.setAttribute("height", "300px");
 
    var constructorsChampion = document.getElementById("constructors").value;
    document.getElementById("constructorsChampionResult").innerHTML = constructorsChampion + " will win the 2023 Constructors' Champion!"
    console.log(constructorsChampion);
      var constructorsChampionImage = document.getElementById("constructorsChampionImage");
    if (constructorsChampion == "Red Bull") {
      constructorsChampionImage.setAttribute("src", "resources/RedBull.jpg");
    } else if (constructorsChampion == "Ferrari") {
      constructorsChampionImage.setAttribute("src", "resources/Ferrari.jpg");
    } else if (constructorsChampion == "Mercedes") {
      constructorsChampionImage.setAttribute("src", "resources/Mercedes.jpg");
    } else if (constructorsChampion == "Alpine") {
      constructorsChampionImage.setAttribute("src", "resources/Alpine.jpg");
    } else if (constructorsChampion == "McLaren") {
      constructorsChampionImage.setAttribute("src", "resources/McLaren.jpg");
    } else if (constructorsChampion == "Alfa Romeo") {
      constructorsChampionImage.setAttribute("src", "resources/AlfaRomeo.jpg");
    } else if (constructorsChampion == "Aston Martin") {
      constructorsChampionImage.setAttribute("src", "resources/AstonMartin.jpg");
    } else if (constructorsChampion == "Haas") {
      constructorsChampionImage.setAttribute("src", "resources/Haas.jpg");
    } else if (constructorsChampion == "Alpha Tauri") {
      constructorsChampionImage.setAttribute("src", "resources/AlphaTauri.jpg");
    } else {
      constructorsChampionImage.setAttribute("src", "resources/Williams.jpg");
    }
    constructorsChampionImage.setAttribute("width", "500px");
    constructorsChampionImage.setAttribute("height", "300px");

    var teamSurprise = document.getElementById("surprise").value;
    document.getElementById("teamSurpriseResult").innerHTML = teamSurprise + " will be a pleasant surprise this season!"
    console.log(teamSurprise);
      var teamSurpriseImage = document.getElementById("teamSurpriseImage");
    if (teamSurprise == "Red Bull") {
      teamSurpriseImage.setAttribute("src", "resources/RedBull.jpg");
    } else if (teamSurprise == "Ferrari") {
      teamSurpriseImage.setAttribute("src", "resources/Ferrari.jpg");
    } else if (teamSurprise == "Mercedes") {
      teamSurpriseImage.setAttribute("src", "resources/Mercedes.jpg");
    } else if (teamSurprise == "Alpine") {
      teamSurpriseImage.setAttribute("src", "resources/Alpine.jpg");
    } else if (teamSurprise == "McLaren") {
      teamSurpriseImage.setAttribute("src", "resources/McLaren.jpg");
    } else if (teamSurprise == "Alfa Romeo") {
      teamSurpriseImage.setAttribute("src", "resources/AlfaRomeo.jpg");
    } else if (teamSurprise == "Aston Martin") {
      teamSurpriseImage.setAttribute("src", "resources/AstonMartin.jpg");
    } else if (teamSurprise == "Haas") {
      teamSurpriseImage.setAttribute("src", "resources/Haas.jpg");
    } else if (teamSurprise == "Alpha Tauri") {
      teamSurpriseImage.setAttribute("src", "resources/AlphaTauri.jpg");
    } else {
      teamSurpriseImage.setAttribute("src", "resources/Williams.jpg");
    }
    teamSurpriseImage.setAttribute("width", "500px");
    teamSurpriseImage.setAttribute("height", "300px");

  	var rookieOfTheYear = document.getElementById("rookieOfTheYear").value;
    document.getElementById("rookieResult").innerHTML = "Rookie of the year 2023 award will go to: " + rookieOfTheYear + "!";
    console.log(rookieOfTheYear);
      var rookieImage = document.getElementById("rookieImage");
    if (rookieOfTheYear == "Nyck de Vries") {
      rookieImage.setAttribute ("src", "resources/NyckdeVries.jpg");
    } else if (rookieOfTheYear == "Oscar Piastri") {
      rookieImage.setAttribute ("src", "resources/OscarPiastri.jpg");
    } else {
      rookieImage.setAttribute ("src", "resources/LoganSargeant.jpg");
    }
    rookieImage.setAttribute("width", "500px");
    rookieImages.setAttribute("height", "300px");
}

document.getElementById("recapButton").onclick = function() {
  recapPredictions();
}
