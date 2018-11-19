var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var count = 0;
while(count < ingredients.length){
  console.log(ingredients[count]);
  count++;
}

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
var last = ingredients.length - 1;
var first = 0;
while(last >= first) {
  console.log(ingredients[last]);
  last--;
}