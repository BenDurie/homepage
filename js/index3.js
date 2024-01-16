// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards


let card1 = 2
let card2 = 10

let sum = card1 + card2 + 10

function answer() {
	
if (sum <= 20) {
    sumEl.innerText = "Do you want to draw a new card?"
} else if (sum === 21) {
    sumEl.innerText = "You have Blackjack"
} else {
    sumEl.innerText = "You Lost"
}	

}	