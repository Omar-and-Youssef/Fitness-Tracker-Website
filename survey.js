document.getElementById("sub").addEventListener("click", function () {
    var ageValue = parseFloat(document.getElementById("age").value);
    var weightValue = parseFloat(document.getElementById("weight").value); // Added closing parenthesis
    var heightValue = parseFloat(document.getElementById("height").value); // Added closing parenthesis
    var radioValue = document.getElementById("male").checked;
    var calories, bmr;
  
    if (radioValue) {
      bmr = 10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5;
    } else {
      bmr = 10 * weightValue + 6.25 * heightValue - 5 * ageValue - 161;
    }
  
    calories = parseFloat(document.getElementById("activity").value) * bmr; // Fixed variable name
  
    console.log(ageValue);
    console.log(weightValue);
    console.log(heightValue);
    console.log(radioValue);
    console.log(bmr);
    console.log(calories);
  });