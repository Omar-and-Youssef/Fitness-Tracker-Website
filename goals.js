var theMaintenance = localStorage.getItem("maintenance");//this is the calories
var theweight=localStorage.getItem("weight");//<< this is the weight
//  localStorage.setItem("maintenance", maintenanceCalories); << to save in localstorage
//    localStorage.setItem("weight", weight);
var maintenanceProtein=parseInt((theMaintenance*0.3)/4);
var maintenanceCarbs=parseInt((theMaintenance*0.5)/4);
var maintenanceFats=parseInt((theMaintenance*0.2)/8); //this calcs macros ingrams 

document.getElementById("calorieGoal").innerHTML=theMaintenance+" kcal";
document.getElementById("carbsPercentage").innerHTML=maintenanceCarbs+" g";
document.getElementById("fatsPercentage").innerHTML=maintenanceFats+" g";
document.getElementById("proteinPercentage").innerHTML=maintenanceProtein+" g";


function MaxValues(maxCalories,maxProtein,maxFats,maxCarbs){
    this.maxCalories=maxCalories;
    this.maxCarbs=maxCarbs;
    this.maxProtein=maxProtein;
    this.maxFats=maxFats;
  }var myMaxValues=new MaxValues(theMaintenance,maintenanceProtein,maintenanceFats,maintenanceCarbs);

      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Nutrition', 'Intake Percentage'],
          ['Protien',    myMaxValues.maxProtein],
          ['Carbohydrates',      myMaxValues.maxCarbs],
          ['Fat',  myMaxValues.maxFats]
        ]);
  
        var options = {
    colors: ["orange", "#6495ED", "#E3735E"],
      width: 300,
      height: 300,
      pieSliceText:'none',
      titlePosition: 'out',
      titleTextStyle: {
        color: "white", 
        fontSize: 20
      },
      pieSliceTextStyle:{
        fontName: 'Arial',
        fontSize: 12,
        bold: true,
        color: 'white',
        opacity: 1,
        alignment: 'center'
      },
      pieHole: 0.4,
      backgroundColor: "black",
      pieSliceTextPosition: 'inside',
      chartArea: {  
        left: '0%',
        top: '10%',
        width:'70%',
        height:'80%',
    },
    legend:"none",
  };
        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }