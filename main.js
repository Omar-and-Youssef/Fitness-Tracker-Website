function Food(name,calories,protein,fats,carbs){
  this.name = name;
  this.calories = calories;
  this.protein = protein;
  this.fats = fats;
  this.carbs=carbs;
}

function updateFoodList(Food){

  const foodListContentDiv = document.querySelector(".foodListContent");

  const nameDiv = document.createElement("div");
  nameDiv.classList.add("ListName");
  nameDiv.textContent= Food.name.value;

  const caloriesDiv = document.createElement("div");
  caloriesDiv.classList.add("Value","Calories");
  caloriesDiv.textContent= Food.calories.value;

  const proteinDiv = document.createElement("div");
  proteinDiv.classList.add("Value","Protein");
  proteinDiv.textContent= Food.protein.value;

  const fatsDiv = document.createElement("div");
  fatsDiv.classList.add("Value","Fats");
  fatsDiv.textContent= Food.fats.value;

  const carbsDiv = document.createElement("div");
  carbsDiv.classList.add("Value","Carbs");
  carbsDiv.textContent= Food.carbs.value;

    foodListContentDiv.appendChild(nameDiv);
    foodListContentDiv.appendChild(caloriesDiv);
    foodListContentDiv.appendChild(proteinDiv);
    foodListContentDiv.appendChild(fatsDiv);
    foodListContentDiv.appendChild(carbsDiv);

    
  const foodBoxDiv=document.querySelector(".foodBox");
  foodBoxDiv.appendChild(foodListContentDiv);
  const foodListContainer =document.querySelector(".foodList");
  foodListContainer.appendChild(foodBoxDiv);

  // // and give it some content
  // const newContent = document.createTextNode("Hi there and greetings!");

  // // add the text node to the newly created div
  // newDiv.appendChild(newContent);

  // // add the newly created element and its content into the DOM
  // const currentDiv = document.getElementById("foodList");
  // document.body.insertBefore(newDiv, currentDiv);
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
