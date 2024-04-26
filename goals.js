var theMaintenance = localStorage.getItem("maintenance");//this is the calories
var theweight=localStorage.getItem("weight");//<< this is the weight
//  localStorage.setItem("maintenance", maintenanceCalories); << to save in localstorage
//    localStorage.setItem("weight", weight);
switch(activityLevel){
  case "o1":maintenanceCalories-=100;break;
  case "o2":maintenanceCalories-=250;break;
  case "o3":maintenanceCalories-=500;break; 
}



function MaxValues(maxCalories,maxProtein,maxFats,maxCarbs){
    this.maxCalories=maxCalories;
    this.maxCarbs=maxCarbs;
    this.maxProtein=maxProtein;
    this.maxFats=maxFats;
  }var myMaxValues=new MaxValues(1700,140,80,200);

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