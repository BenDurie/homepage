// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start


function countDown(startNumber, step) {
  let startingNumber = startNumber
  
  return function countingDown(){
	  startingNumber -= step
	  return startingNumber;
  }
  
  countingDown()
}

const countingDown = countDown(20,2);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());

