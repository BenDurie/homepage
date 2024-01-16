// Object.keys(), Object.values(), Object.entries()
const user = {
  name: 'John',
  age: 29  
};

const ageExists = Object.keys(user).includes('age');
console.log(ageExists);