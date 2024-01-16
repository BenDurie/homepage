const finalMenuItems = [
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