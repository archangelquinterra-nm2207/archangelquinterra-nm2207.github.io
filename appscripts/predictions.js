
//declare function to be executed once the button is clicked
function recapPredictions() {

    //obtain guest's name from the form
        var guestName = document.getElementById("name").value;
    //create a dialog box greeting using the guest's name obtained from the form
      var guestGreeting = "Thanks for submitting your recap, " + guestName + "! Please save the following page to keep your predictions! :)";
   		window.alert(guestGreeting);
    //create a sentence using the guest's name on the HTML document, last sentence in the HTML document
      document.getElementById("greeting").innerHTML = "May your predictions come true, " + guestName + "!"
      
    //console.log(document.getElementById("name").value);

    //create a sentence using the guest's name on the HTML document
    document.getElementById("recapTitle").innerHTML = guestName + "'s Formula 1 2023 Season Predictions"

    //const element = document.getElementById("constructorsChampionImage");

    //Drivers' Champion predictions
    var driversChampion = document.getElementById("drivers").value; //get the user's prediction for driver's champion
    document.getElementById("driversChampionResult").innerHTML = "I predict that " + driversChampion + " will win the 2023 Drivers' Champion!" //use the predictions obtained to create a statement  
    console.log(driversChampion); //an internal test to see whether the users' drivers' champion choice is correctly extracted
      var driversChampionImage = document.getElementById("driversChampionImage"); //places the image of the user's drivers' champion choice on the corresponding container
   //if else statement that will show an image according to the user's choice
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
    //standardizing the image's width and height
    driversChampionImage.setAttribute("width", "500px"); 
    driversChampionImage.setAttribute("height", "300px");
 
    //Constructors' Champion predictions
    var constructorsChampion = document.getElementById("constructors").value; //get the user's prediction for constructors's champion
    document.getElementById("constructorsChampionResult").innerHTML = constructorsChampion + " will win the 2023 Constructors' Champion!" //use the predictions obtained to create a statement 
    console.log(constructorsChampion); //an internal test to see whether the users' constructors' champion choice is correctly extracted
      var constructorsChampionImage = document.getElementById("constructorsChampionImage"); //places the image of the user's constructors' champion choice on the corresponding container
    //if else statement that will show an image according to the user's choice
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
    } else if (constructorsChampion == "AlphaTauri") {
      constructorsChampionImage.setAttribute("src", "resources/AlphaTauri.jpg");
    } else {
      constructorsChampionImage.setAttribute("src", "resources/Williams.jpg");
    }
    //standardizing the image's width and height
    constructorsChampionImage.setAttribute("width", "500px");
    constructorsChampionImage.setAttribute("height", "300px");

    //Pleasant surprise predictions
    var teamSurprise = document.getElementById("surprise").value; //get the user's prediction for pleasant surprise
    document.getElementById("teamSurpriseResult").innerHTML = teamSurprise + " will be a pleasant surprise this season!" //use the predictions obtained to create a statement 
    console.log(teamSurprise); //an internal test to see whether the users' team choice is correctly extracted
      var teamSurpriseImage = document.getElementById("teamSurpriseImage"); //places the image of the user's team choice on the corresponding container
    //if else statement that will show an image according to the user's choice
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
    } else if (teamSurprise == "AlphaTauri") {
      teamSurpriseImage.setAttribute("src", "resources/AlphaTauri.jpg");
    } else {
      teamSurpriseImage.setAttribute("src", "resources/Williams.jpg");
    }
    //standardizing the image's width and height
    teamSurpriseImage.setAttribute("width", "500px");
    teamSurpriseImage.setAttribute("height", "300px");

    //Rookie Of The Year choice
  	var rookieOfTheYear = document.getElementById("rookieOfTheYear").value; //get the user's prediction for rookie of the year
    document.getElementById("rookieResult").innerHTML = "Rookie of the year 2023 award will go to: " + rookieOfTheYear + "!"; //use the predictions obtained to create a statement 
    console.log(rookieOfTheYear); //an internal test to see whether the users' rookie choice is correctly extracted
      var rookieImage = document.getElementById("rookieImage"); //places the image of the user's rookie choice on the corresponding container
    //if else statement that will show an image according to the user's choice
    if (rookieOfTheYear == "Nyck de Vries") {
      rookieImage.setAttribute ("src", "resources/NyckdeVries.jpg");
    } else if (rookieOfTheYear == "Oscar Piastri") {
      rookieImage.setAttribute ("src", "resources/OscarPiastri.jpg");
    } else {
      rookieImage.setAttribute ("src", "resources/LoganSargeant.jpg");
    }
    //standardizing the image's width and height
    rookieImage.setAttribute("width", "500px");
    rookieImage.setAttribute("height", "300px");
}

//calls the function above when the recapButton is clicked
document.getElementById("recapButton").onclick = function() {
  recapPredictions();
}
