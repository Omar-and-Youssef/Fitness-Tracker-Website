var numberOfFoodBoxes=0;
function Food(name,calories,protein,fats,carbs){
  this.name = name;
  this.calories = calories;
  this.protein = protein;
  this.fats = fats;
  this.carbs=carbs;
}

function updateFoodList(food){
 const foodList= document.querySelector(".foodList");
 const foodBox=foodBoxCreator(food);
 foodList.append(foodBox);
}
function foodBoxCreator(food){
  const foodBox=document.createElement("div");
  foodBox.classList.add("foodBox");
  foodBox.id=("foodBoxNo."+numberOfFoodBoxes++);
  const headingOfFoodBox=document.createElement("div");// HEADING DIV
  headingOfFoodBox.classList.add("headings");
  var headingNames=["Calories","Protein","Fats","Carbs"];
  for(var i=0;i<headingNames.length;i++){
    const theDiv=document.createElement("div");
    theDiv.classList.add("ListTitle");
    theDiv.innerHTML=headingNames[i];
    headingOfFoodBox.append(theDiv);
  }
  foodBox.append(headingOfFoodBox);
  const foodListContent=document.createElement("div");
  foodListContent.classList.add("foodListContent");//foodListContent Div
  var inputFoodValues=[food.calories.value,food.protein.value,food.fats.value,food.carbs.value];
  const foodName=document.createElement("div");
  foodName.classList.add("ListName");
  foodName.innerHTML=food.name.value;
  foodListContent.append(foodName);
  for(var i=0;i<inputFoodValues.length;i++){
    var theDiv=document.createElement("div");
    theDiv.classList.add("Value");
    theDiv.classList.add(foodListContent[i]);
    theDiv.innerHTML=inputFoodValues[i];
    foodListContent.append(theDiv);
  }
  foodBox.append(foodListContent);
  return foodBox;
}


var displaylogButton = document.querySelector(".display.foodL");
displaylogButton.addEventListener("click", function() {
  document.querySelector(".foodLog").style.display="block";
});
var closeLogButton =document.getElementsByClassName("close")[0];
closeLogButton.addEventListener("click", function() {
  document.querySelector(".foodLog").style.display="none";
});

var addFoodButton =document.querySelector(".add.food");
  addFoodButton.addEventListener("click", function(){
  var getInput=document.getElementsByClassName("test");

  for(var i=0;i<getInput.length;i++)
    getInput[i]=getInput[i].value;

  document.querySelector(".foodLog").style.display="none";

  var myfood=new Food(getInput[0],getInput[1],getInput[2],getInput[3],getInput[4]);
  console.log(myfood.name.value+" "+myfood.calories.value+" "+myfood.carbs.value+" "+myfood.protein.value+" "+myfood.fats.value);

  updateFoodList(myfood);
})
