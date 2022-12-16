// prompt the user to input their first name, last name, address, and age
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var address = prompt("Please enter your address:");
var age = parseInt(prompt("Please enter your age:"));

// define the age ranges and corresponding category names
var categories = {
  "Infant": [0, 1],
  "Toddler": [2, 4],
  "Child": [5, 12],
  "Teen": [13, 19],
  "Adult": [20, 39],
  "Middle Age Adult": [40, 59],
  "Senior Adult": [60, Infinity]
};

// iterate through the categories object to find the appropriate category name range
for (var category in categories) {
  if (age >= categories[category][0] && age <= categories[category][1]) {
    console.log("Age category: " + category);
    break;
  }
}