// Challenge: 
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

const favouritePlace = {
    music: "jazz",
    name: "Paris House"
};


const favouritePlaceMap = new Map([
	["music:","jazz"],
	["name:","Paris House"],
	["visited",false],
	["averageBill",20]
])

const getaverageBill = favouritePlaceMap.get("averageBill")

console.log(getaverageBill)


/* const nums = {
  1: 1,
  true: true
};

const map1 = new Map([
  [1, 1],
  [true, true]  
]);

map1.set('key', 'value');

map1.forEach((value, key) => {
  console.log(key, value);  
});

console.log([...map1.keys()])

const user1 = { name: "john" }
const user2 = { name: "mary" }

const secretKey1 = "asldjfalskdjf";
const secretKey2 = "alksdjfakjsdf";

const secretKeyMap = new Map([
  [user1, secretKey1],
  [user2, secretKey2]  
]);

const getSecretKey = secretKeyMap.get(user1);

const user = {
  name: "john",
  verified: true  
};

const userMap = new Map([
	[ "name", user.name ],
	[ "verified", user.verified ]
])

console.log(userMap.size);

console.log(getSecretKey)
 */