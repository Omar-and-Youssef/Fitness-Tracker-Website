var weight=-1;
var maintenanceCalories=-1;

var CalculateButton=document.getElementById("sub");
CalculateButton.addEventListener("click",calculateCalories)
function calculateCalories(){ 
  var maleRadio = document.getElementById("male");
  var femaleRadio = document.getElementById("female");
  if(maleRadio.checked){
    maintenanceCalories=2400;
  }else if(femaleRadio.checked){
    maintenanceCalories=2000;
  }
  else{ 
    //SHOW HIM ERROR
  }
  var age=document.getElementById("age").value;
  if(age>=18){
    maintenanceCalories*=(1+age/100);
  }
  var weight=document.getElementById("weight").value;

    var selectElement = document.getElementById("activity");
    var activityLevel = selectElement.options[selectElement.selectedIndex].id;
    switch(activityLevel){
      case "o1":maintenanceCalories-=100;break;
      case "o2":maintenanceCalories-=250;break;
      case "o3":maintenanceCalories-=500;break; 
    }
    maintenanceCalories=Math.floor(maintenanceCalories);
    localStorage.setItem("maintenance", maintenanceCalories);
    localStorage.setItem("weight", weight);
    window.location.href = "register.html";
    //IF AND ONLY IF ALL VALID THEN GO
    //MAKE HIM GO HOME PAGE
 }
