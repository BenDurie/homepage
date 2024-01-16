// prototypical inheritance - each instantiated object (from constructor function) inherits from prototype

// every object has prototype

// console.log(new Object());
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

const student1 = new Student(1, 'Reed');

console.log(Object.getPrototypeOf(student1).constructor);