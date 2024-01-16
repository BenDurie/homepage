// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let yourAge = document.getElementById("yourAge").textContent

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

function ageCheck() {
	
	if (yourAge < 21) {
		ageCheck.textContent = document.getElementById("ageCheck").textContent = "You can not enter the club!"
		console.log(yourAge)
	} else {
		ageCheck.textContent = document.getElementById("ageCheck").textContent = "Welcome!"
		console.log(yourAge)
	}
}

