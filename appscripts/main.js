//declare variables as arrays to be used as data for the chart
//declare labels for the horizontal axis
var race = ["BRN", "KSA", "AUS", "ITA(Imola)", "USA(Miami)", "ESP", "MON", "AZE", "CAN", "GBR", "AUT", "FRA", "HUN", "BEL", "NED", "ITA(Monza)","SGP","JPN","USA","MEX","BRA","UAE"];

//declare data points for each constructor
var redBull = [0,37,55,113,151,195,235,279,304,328,359,396,431,475,511,545,576,619,656,696,719,759];
var ferrari = [44,78,104,124,157,169,199,199,228,265,303,314,334,357,376,406,439,454,469,487,524,554];
var mercedes = [27,38,65,77,95,120,134,161,188,204,237,270,304,316,346,371,393,387,416,447,505,515];
var alpine = [8,16,22,22,26,34,40,47,57,67,81,93,99,115,125,125,125,143,149,153,167,173];
var mcLaren = [0,6,24,46,46,50,59,65,65,73,81,89,95,95,101,107,129,130,138,146,148,159];
var alfaRomeo = [9,9,13,25,31,39,41,41,51,51,51,51,51,51,51,52,52,52,52,53,55,55];
var astonMartin = [0,0,0,5,6,6,7,15,16,18,18,19,20,24,25,25,37,45,49,49,50,55];
var haas = [10,12,12,15,15,15,15,15,15,20,34,34,34,34,34,34,34,34,36,36,37,37];
var alphaTauri = [4,8,10,16,16,17,17,27,27,27,27,27,27,29,29,33,34,34,35,35,35,35];
var williams = [0,0,1,1,3,3,3,3,3,3,3,3,3,4,4,6,6,8,8,8,8,8];

//create a new chart that contains data declared above
new Chart("f1Chart", {
    type: 'line', //sets the chart type as line graph
    options: {
        title: { //configures the chart title
            text: ['Formula 1 2022 Season','Constructors Championship Points'],
            display: true,
            fontFamily: "arial",
            fontSize: 15,
            fontColor: 'black',
            },
        legend: { //configures legends presented on the chart
            display: true,
            position: 'right'
            },
        },
    data: { //configures how each dataset is presented in the line chart
        labels: race, //references the array of labels defined above
        datasets: [
            {
                label: "Red Bull", //constructor name
                data: redBull, //references the array of data values defined above
                fill: false,
                borderColor: "#1D19AC", //the borderColor for each constructor resembles the official team color
            },
            {
                label: "Ferrari",
                data: ferrari,
                fill: false,
                borderColor: "#FF2800"          
            },
            {
                label: "Mercedes",
                data: mercedes,
                fill: false,
                borderColor: "#A9A9A9"
                              
            },           
            {
                label: "Alpine",
                data: alpine,
                fill: false,
                borderColor: "#005BA9"                
            },           
            {
                label: "mcLaren",
                data: mcLaren,
                fill: false,
                borderColor: "#FF8000"
            },           
            {
                label: "Alfa Romeo",
                data: alfaRomeo,
                fill: false,
                borderColor: "#981E32"
            },    
            {
                label: "Aston Martin",
                data: astonMartin,
                fill: false,
                borderColor: "#00352F"       
            },    
            {
                label: "Haas",
                data: haas,
                fill: false,
                borderColor: "#F9F2F2"
            },   
            {
                label: "AlphaTauri",
                data: alphaTauri,
                fill: false,
                borderColor: "#00293F"         
            },
            {
                label: "Williams",
                data: williams,
                fill: false,
                borderColor: "#00A0DE" 
            },
        ]

    }
});

//declare to execute function when clicked
var clickButton = document.getElementById("clickButton");
clickButton.addEventListener("click", buttonFunction);

//declare what the button does when clicked. When the button is clicked, 2 things happen:
function buttonFunction() {
    window.alert("Let's go make some bold predictions!"); //first, opens an alert box
    window.open("predictions.html"); //second, upon clicking "ok", opens a new page called predictions.html
};







