function updateFoodList(){
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("foodList");
  document.body.insertBefore(newDiv, currentDiv);
}


var displaylogButton = document.querySelector(".display.foodL");
displaylogButton.addEventListener("click", function() {
  document.querySelector(".foodLog").style.display="block";
});
var closeLogButton =document.getElementsByClassName("close")[0];
closeLogButton.addEventListener("click", function() {
  document.querySelector(".foodLog").style.display="none";
});
