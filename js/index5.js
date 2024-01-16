// Check if the person is elegible for a birthday card from the King! (100)

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

let yourAge = document.getElementById("yourAge").textContent


function ageCheck() {
	
	if (yourAge < "100") {
		ageCheck.textContent = document.getElementById("ageCheck").textContent = "Not elegible"
		console.log(yourAge)
	} else if (yourAge === "100") {
		ageCheck.textContent = document.getElementById("ageCheck").textContent = "Here is your birthday card from the King!"
		console.log(yourAge)
	} else {
		ageCheck.textContent = document.getElementById("ageCheck").textContent = "Not elegible, you have already gotten one"
		console.log(yourAge)
	}
}

