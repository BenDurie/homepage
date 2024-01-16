const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

const allMenuIdeas = lunchMenuIdeas.concat('Club Sandwich');

// allMenuIdeas.push('Club Sandwich');

console.log(lunchMenuIdeas);
console.log(allMenuIdeas);

// spread function does the same as above

const lunchMenuIdeas1 = ['Harvest Salad', 'Southern Fried Chicken'];

const allMenuIdeas1 = [...lunchMenuIdeas1];

allMenuIdeas1.push('Club Sandwich');
console.log(lunchMenuIdeas1);
console.log(allMenuIdeas1);