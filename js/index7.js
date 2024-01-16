// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
// 1. Create a variable called isAlive and assign it to true

// 2. Flip its value to false in the appropriate code block 

let card1 = 11
let card2 = 5
let hasBlackJack = false
let isAlive = true
let message = ""
let newcard = 2
let sum = card1 + card2
let mycards = [card1, card2]

function startGame() {
	sumEs.textContent = "Sum: " + sum
	cards.textContent = "Cards: " + mycards[0] + ", " + mycards[1]
if (sum <= 20) {
    sumEl.textContent = "Do you want to draw a new card?"	
	message = "Do you want to draw a new card?"
} else if (sum === 21) {
    sumEl.textContent = "You have Blackjack"
	message = "You have Blackjack"
	isAlive = false
} else {
    sumEl.textContent = "You Lost"
	message = "You Lost"
	isAlive = false
}	
console.log(sum)
}	

function newCard() {
	newCard.textContent = "Drawing a new card from the deck!"
	cards.textContent = "Cards: " + mycards[  0] + ", " + mycards[1]	+ ", " + newcard
	sum = sum + newcard
	sumEs.textContent = "Sum: " + sum
	if (sum <= 20) {
		sumEl.textContent = "Do you want to draw a new card?"	
		message = "Do you want to draw a new card?"
	} else if (sum === 21) {
		sumEl.textContent = "You have Blackjack"
		message = "You have Blackjack"
		isAlive = false
	} else {
		sumEl.textContent = "You Lost"
		message = "You Lost"
		isAlive = false
	}	
}	

