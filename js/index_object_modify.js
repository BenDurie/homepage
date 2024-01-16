/*
	primative types
  undefined, null, boolean, number, string, symbol
  primitive - passed by value
*/

// const num = 'hello world';
// const anotherNum = 'hello world';
// console.log(num === anotherNum);

// object - passed by reference



const color = 'green';
const hexCode = '#0f0';

const colors = {
  blue: "#00f",
  orange: "#f60",
  [color] : hexCode
};


colors.red = '#f00';

function getColor(key) {
	return colors[key]
	
	}

console.log(getColor('blue'))
