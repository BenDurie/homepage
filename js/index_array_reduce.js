const numbers = [1, 2, 3, 4, 5, 6];


const numbersOverThree = numbers.reduce((acc, num) => {
	if (num > 3) {
		acc.push(num);		
	}	
	return acc;
}, []);

console.log("numbersOverThree", numbersOverThree)

// same as above but with filter

const greaterNumbers = numbers.filter(num => num > 3);
console.log("greaterNumbers", greaterNumbers);

const newNumbers = numbers.map((num) => num * 2)

console.log("doubled Numbers", newNumbers);
console.log('numbers', numbers);

const numbers1 = [1, 2, 3, 4, 5, 6];

// same as below but using reduce

const doubledNumbers1 = numbers1.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []);
console.log('doubled numbers', doubledNumbers1);
console.log('numbers', numbers1);


const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },  
];

const totalWeight = cars.reduce((accumulator, car) => {
    if (car.isElectric) {
        return accumulator + car.weight;
    } else {
        return accumulator;
    }
}, 0)

console.log(totalWeight);

const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 }
];

const total = menuItems.reduce((accumulator, menuItem) => {
  console.log(`
    accumulator: ${accumulator},
    menu item price: ${menuItem.price}
  `);
  return accumulator + menuItem.price;  
}, 0);
console.log(total);