const breakfastMenuIdeas = ["Buckwheat Pancakes"];
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

console.log(finalMenuIdeas);