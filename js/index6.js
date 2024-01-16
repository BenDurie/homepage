// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
// 1. Create a variable called isAlive and assign it to true

// 2. Flip its value to false in the appropriate code block 

let card1 = 11
let card2 = 1
let hasBlackJack = false
let sum = card1 + card2 +12
let isAlive = true

function answer() {
	
if (sum <= 20) {
    sumEl.innerText = "Do you want to draw a new card?"
} else if (sum === 21) {
    sumEl.innerText = "You have Blackjack"
	hasBlackJack = true
} else {
    sumEl.innerText = "You Lost"
	isAlive = false
}	
console.log(isAlive)
}	



