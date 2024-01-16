// Challenge: 
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// Modify these four variables first

let chefsFishDishes = fishDishes.filter(fishdish => fishdish.startsWith('S'))
console.log("chefsFishDishes", chefsFishDishes);


let regularFishDishes = fishDishes.filter(fishdish => !fishdish.startsWith('S'))
console.log("regularFishDishes", regularFishDishes);

let chefsMeatDishes = meatDishes.filter(meatdish => meatdish.startsWith('S'))
console.log("chefsMeatDishes", chefsMeatDishes);

let regularMeatDishes = meatDishes.filter(meatdish => !meatdish.startsWith('S'))
console.log("regularMeatDishes", regularMeatDishes);

// Finally, use the spread operator to create these two arrays as well
let chefsDishes1 = chefsFishDishes.concat(chefsMeatDishes);
console.log("chefsDishes1", chefsDishes1);

let regularDishes1 = regularFishDishes.concat(regularMeatDishes);
console.log("regularDishes1", regularDishes1);

// Finally, use the spread operator to create these two arrays as well
let chefsDishes = [
    ...chefsFishDishes, 
    ...chefsMeatDishes
];

console.log("chefsDishes", chefsDishes);

let regularDishes = [
    ...regularFishDishes, 
    ...regularMeatDishes
];

console.log("regularDishes", regularDishes);


/* const finalMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken",
  "Glazed Salmon"
];

chesseburgerIndex = finalMenuItems.findIndex(idea1 => idea1 === 'American Cheeseburger');

const winner = [
    ...finalMenuItems.slice(0,chesseburgerIndex + 1)
];

console.log(winner)

const [winner1, ...losers] = finalMenuItems;

console.log({ winner1, losers });
 */
/* let [first, second] = finalMenuItems;
console.log('before', { first },{ second });
[second, first] = [first, second];
console.log('after', { first },{ second }); */

// let first = finalMenuItems[0];
// let second = finalMenuItems[1];
// let third = finalMenuItems[2];

// console.log(first, second, third);


/* const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];

const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');
const meatloafIndex = allMenuIdeas.findIndex(idea1 => idea1 === 'Meatloaf');

const finalMenuIdeas = [
  ...allMenuIdeas.slice(0, saladIndex),
  "Garden Salad",
  ...allMenuIdeas.slice(saladIndex + 1, meatloafIndex),
  ...allMenuIdeas.slice(meatloafIndex + 1)
];

console.log(finalMenuIdeas); */