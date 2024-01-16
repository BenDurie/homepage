
// constructor function
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;  
}

Student.prototype.addSubject = function(subject) {
  this.subjects = [...this.subjects, subject];   
}

const student1 = new Student(1, 'Reed');
const student2 = new Student(2, 'Doug');
const student3 = new Student(3, 'Ben');

student1.addSubject('Math');
student2.addSubject('Physics');
student3.addSubject('Home Ec');
student3.addSubject('Algebra');

console.log("Student1", student1);
console.log("Student2", student2);
console.log("Student3", student3);