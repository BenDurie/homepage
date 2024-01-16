password1 = []
password2 = []
myPassword1 = []
myPassword2 = []


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


function generatePassword() {
	
	for (let i = 0; i < 15 ; i++) {
		let randomNumber = Math.floor( Math.random()*characters.length )		
		password1.push(randomNumber)
	}
	
	for (let i = 0; i < 15 ; i++) {
		let randomNumber = Math.floor( Math.random()*characters.length )		
		password2.push(randomNumber)
	}	
	
	for (let i = 0; i < 15 ; i++){	
			myPassword1[i] = characters[password1[i]]
		}

	for (let i = 0; i < 15 ; i++){	
			myPassword2[i] = characters[password2[i]]
		}	
		
	password1.textContent = myPassword1
	console.log(myPassword1)
	console.log(myPassword2)		

}

