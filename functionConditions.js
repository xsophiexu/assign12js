// 04-functionConditions.js
// Create a function that takes in one argument that is passed through a conditional statement.
// (For example, something like our haunted house door() function.) Print some resulting text to
// the console. Test all of your conditions to make sure you can receive all of your results back.

function cook(food){
  if (food == "carrots"){
    return "Stir-Fry";
  } else if (food == "zucchinis"){
    return "Couscous";
  } else if (food == "tomatoes"){
    return "Spaghetti";
  } else if (food == "peppers"){
    return "Stuffed-Peppers";
  } else if (food == "mushrooms"){
    return "Risotto";
  } else {
      return "Food not in fridge!";
  }
}

console.log(cook("carrots"));
console.log(cook("zucchinis"));
console.log(cook("tomatoes"));
console.log(cook("peppers"));
console.log(cook("mushrooms"));
console.log(cook("broccoli"));
