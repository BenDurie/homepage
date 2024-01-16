import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-9ad90-default-rtdb.firebaseio.com/"
}

const inputFieldEl = document.getElementById("input-field")
const publishButtonEl = document.getElementById("publish-button")
const endorsementsListEl = document.getElementById("endorsements-List")
const inputFieldFromEl = document.getElementById("input-field-from")
const inputFieldToEl = document.getElementById("input-field-to")
const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementsListInDB = ref(database, "endorsements-List")


publishButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    let inputFrom = inputFieldFromEl.value
	let inputTo = inputFieldToEl.value
	
    
    push(endorsementsListInDB, inputFrom)
	push(endorsementsListInDB, inputValue)
	push(endorsementsListInDB, inputTo)
	
    clearInputFieldEl()
	clearInputFromEl()
	clearInputToEl()
	
})


onValue(endorsementsListInDB, function(snapshot) {

	if (snapshot.exists())
	{

		let itemsArray = Object.values(snapshot.val())
				
		itemsArray.reverse()
		
		clearEndorsementsListEl()
		clearInputFromEl()
		clearInputToEl()

		for (let i = 0; i < itemsArray.length; i+=3) {

			let j = i + 1
			let k = i + 2
			let currentFromItem = itemsArray[k]
			let currentItemValue = itemsArray[j]
			let currentToItem = itemsArray[i]
			
			appendItemToEndorsementsListEl(currentItemValue, currentFromItem, currentToItem)
		}
		
			
	} else {	
		endorsementsListEl.innerHTML = "No items here... yet"
	}
})	

function clearEndorsementsListEl() {
    endorsementsListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function clearInputFromEl() {
    inputFieldFromEl.value = ""
}

function clearInputToEl() {
    inputFieldToEl.value = ""
}

function appendItemToEndorsementsListEl(item, currentFromItem, currentToItem) {
	
    let itemValue = item
    let newEl = document.createElement("li")
	
    newEl.innerHTML =  `<b>From: ${currentFromItem}</b> <br><br> ${itemValue} <br><br> <b>To: ${currentToItem}</b>`
	    
    endorsementsListEl.append(newEl)
}


