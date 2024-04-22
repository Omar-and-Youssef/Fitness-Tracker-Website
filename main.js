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
   //add created food Box div to our list
}
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

  for(var i=0;i<inputFoodValues.length;i++){
    var theDiv=document.createElement("div");
    theDiv.classList.add("Value");
    theDiv.classList.add(foodListContent[i]);
    theDiv.innerHTML=inputFoodValues[i];
    foodListContent.append(theDiv); //add values to content
  }

  foodBox.append(foodListContent);//add content to box
  return foodBox;
}


var displaylogButton = document.querySelector(".foodLogButtons.display");
displaylogButton.addEventListener("click", function() {
  document.querySelector(".foodLog").style.display="block";
});
var closeLogButton =document.querySelector(".foodLogButtons.close");
closeLogButton.addEventListener("click", function() {
  document.querySelector(".foodLog").style.display="none";
});

var addFoodButton =document.querySelector(".foodLogButtons.add");
  addFoodButton.addEventListener("click", function(){//add food item button
var getInput=document.getElementsByClassName("foodInput");
  for(var i=0;i<getInput.length;i++)
    getInput[i]=getInput[i].value;
  
  document.querySelector(".foodLog").style.display="none";

  var myfood=new Food(getInput[0],getInput[1],getInput[2],getInput[3],getInput[4]);
  console.log(myfood.name.value+" "+myfood.calories.value+" "+myfood.carbs.value+" "
  +myfood.protein.value+" "+myfood.fats.value);//console test
  
  updateFoodList(myfood);
})
    

