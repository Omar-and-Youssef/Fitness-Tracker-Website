var numberOfFoodBoxes=0;
function TotalValues(totalCalories,totalProtein,totalFats,totalCarbs){
this.totalCalories=totalCalories;
this.totalCarbs=totalCarbs;
this.totalProtein=totalProtein;
this.totalFats=totalFats;
}
var myTotalValues=new TotalValues(0,0,0,0);

// =============================================================================

var ringtotalCalories=document.querySelector(".ringCalValue");
ringtotalCalories.innerHTML=0; //start
//test max values(will be calculated using tdee)
function MaxValues(maxCalories,maxProtein,maxFats,maxCarbs){
  this.maxCalories=maxCalories;
  this.maxCarbs=maxCarbs;
  this.maxProtein=maxProtein;
  this.maxFats=maxFats;
}
var myMaxValues=new MaxValues(1700,140,80,200);

// =============================================================================

function Food(name,calories,protein,fats,carbs){
  this.name = name;
  this.calories = calories;
  this.protein = protein;
  this.fats = fats;
  this.carbs=carbs;
}
var myFood=new Food(0,0,0,0,0);

// =============================================================================

function foodBoxCreator(food){
  const foodBox=document.createElement("div");
  foodBox.classList.add("foodBox");
  foodBox.id=("foodBoxNo."+numberOfFoodBoxes++); 
  //create an id for each div
  const headingOfFoodBox=document.createElement("div");// HEADING DIV
  headingOfFoodBox.classList.add("headings");
  const deleteIcon=document.createElement("i");
  deleteIcon.classList.add("fa","fa-trash-o","foodDeleteIcon");
  headingOfFoodBox.append(deleteIcon);

  deleteIcon.addEventListener("click", function(event) {
    const foodBox = event.target.closest(".foodBox");
     //finds the parent food box of the clicked delete icon
    if (foodBox) {
      foodBox.remove();
      updateTotalVariables();
    }
  });

  var headingNames=["Calories","Protein (g)","Fats (g)","Carbs (g)"];
  for(var i=0;i<headingNames.length;i++){
    const theDiv=document.createElement("div");
    theDiv.classList.add("headingLabels"); 
    theDiv.innerHTML=headingNames[i];
    headingOfFoodBox.append(theDiv);
  }//add label names to headings box
  foodBox.append(headingOfFoodBox);

  const foodListContent=document.createElement("div");
  foodListContent.classList.add("foodListContent");//foodListContent Div

  var inputFoodValues=[food.calories.value,food.protein.value,food.fats.value,food.carbs.value];
  const foodName=document.createElement("div");
  foodName.classList.add("ListName");
  foodName.innerHTML=food.name.value;//add name and values from log

  foodListContent.append(foodName);//add names to content

  var calDiv=document.createElement("div");
  calDiv.classList.add("Value","caloricValue");//to access each element alone
  calDiv.classList.add(foodListContent[0]);
  calDiv.innerHTML=inputFoodValues[0];
  foodListContent.append(calDiv); //add values to content

  var protDiv=document.createElement("div");
  protDiv.classList.add("Value","proteinValue");
  protDiv.classList.add(foodListContent[1]);
  protDiv.innerHTML=inputFoodValues[1]; 
  foodListContent.append(protDiv);

  var fatsDiv=document.createElement("div");
  fatsDiv.classList.add("Value","fatsValue");
  fatsDiv.classList.add(foodListContent[2]);
  fatsDiv.innerHTML=inputFoodValues[2];
  foodListContent.append(fatsDiv);

  var carbsDiv=document.createElement("div");
  carbsDiv.classList.add("Value","carbsValue");
  carbsDiv.classList.add(foodListContent[3]);
  carbsDiv.innerHTML=inputFoodValues[3];
  foodListContent.append(carbsDiv);

  foodBox.append(foodListContent);//add content to box
  return foodBox;
}

 // =============================================================================

function updateFoodList(food){
  const foodList= document.querySelector(".foodList");
  const foodBox=foodBoxCreator(food);
  foodList.append(foodBox);
    //add created food Box div to our list
 } 
// =============================================================================

function updateTotalVariables(){
  var calories=document.getElementsByClassName("caloricValue");
  var protein=document.getElementsByClassName("proteinValue");
  var fats=document.getElementsByClassName("fatsValue");
  var carbs=document.getElementsByClassName("carbsValue");
  myTotalValues= new TotalValues(0,0,0,0);
  console.log(calories);
  for(var i=0;i<calories.length;i++){
    myTotalValues.totalCalories += parseInt(calories[i].innerHTML);
    myTotalValues.totalProtein += parseInt(protein[i].innerHTML);
    myTotalValues.totalFats += parseInt(fats[i].innerHTML);
    myTotalValues.totalCarbs += parseInt(carbs[i].innerHTML);
}

  updateCaloriesRing(myTotalValues);
}
// =============================================================================
function  updateCaloriesRing(total){
  ringtotalCalories.innerHTML=total.totalCalories;

  var ratio=total.totalCalories/myMaxValues.maxCalories; 
  var ring=document.querySelector(".ring");

  var dashOffset=0;
  if(ratio<1)dashOffset=628-(ratio*628);
  ring.style.strokeDashoffset = dashOffset;

  if(ratio>1.0)
    ring.style.stroke="red";
  else if(ratio>=0.9) 
    ring.style.stroke="green";
  else if(ratio>=0.7) 
    ring.style.stroke="#0096FF";
  else if(ratio>=0.3) 
    ring.style.stroke="#E1d90d";
  else  ring.style.stroke="orange";
}

//Display/Close FoodLog Menu Buttons
var displaylogButton = document.querySelector(".foodLogButtons.display");
displaylogButton.addEventListener("click", function() {
  document.querySelector(".foodLog").style.display="block";
});
var closeLogButton =document.querySelector(".foodLogButtons.close");
closeLogButton.addEventListener("click", function() {
  document.querySelector(".foodLog").style.display="none";
});

//Add Food Button
var addFoodButton =document.querySelector(".foodLogButtons.add");
  addFoodButton.addEventListener("click", function(){//add food item button
var getInput=document.getElementsByClassName("foodInput");
  //Get Input
  for(var i=0;i<getInput.length;i++)
    getInput[i]=getInput[i].value;
    var isValidInput = true;
    for (var i = 0;i<getInput.length;i++) {
        if (getInput[i].value === "" ||(i!=0&&isNaN(parseFloat(getInput[i].value)))){
          var fieldName="";
          switch(i){
            case 0:fieldName="Name";break;
            case 1:fieldName="Calories";break;
            case 2:fieldName="Protein";break;
            case 3:fieldName="Fat";break;
            case 4:fieldName="Carbs";break;
          }
            alert("Please enter a valid value for the "+fieldName+" field");
            isValidInput = false;
            break;
        }
    }

if (isValidInput) {
  document.querySelector(".foodLog").style.display="none";

  var myfood=new Food(getInput[0],getInput[1],getInput[2],getInput[3],getInput[4]);

  

  console.log(myfood.name.value+" "+myfood.calories.value+" "+myfood.carbs.value+" "
  +myfood.protein.value+" "+myfood.fats.value+" "+myTotalValues.totalCalories+" ");//console test
  
  updateFoodList(myfood);
  updateTotalVariables();
}

})

// =============================================================================



