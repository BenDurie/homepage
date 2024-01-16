/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let convertDataBtn = document.getElementById("convertdata-btn")


convertDataBtn.addEventListener("click", function(){
	let inputEl = document.getElementById("input-el").value
	
	let feet = inputEl * 3.281
	let gallons = inputEl * .264
	let pounds = inputEl * 2.204
	let meters = inputEl * .308
	let liters = inputEl * 3.778
	let kilograms = inputEl * .454
	
	lengthEl.innerHTML = "Length (Meter|Feet)" + "<BR>" + inputEl + " Meters are " + feet.toFixed(3) + " Feet" + " | " + inputEl + " Feet are " + meters.toFixed(3) + " Meters"
	
	volumeEl.innerHTML = "Volume (Liters|Gallons)" + "<BR>" + inputEl + " Liters are " + gallons.toFixed(3) + " Gallons" + " | " + inputEl + " Gallons are " + liters.toFixed(3) + " Liters"
	
	massEl.innerHTML = "Mass (Kilograms|Pounds)" + "<BR>" + inputEl + " Kilograms are " + pounds.toFixed(3) + " Pounds" + " | " + inputEl + " Pounds are " + kilograms.toFixed(3) + " Kilograms"
	
})