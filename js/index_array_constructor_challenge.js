

// constructor function
// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:

function Book(id, title, author, themes = []) {
	this.id = id;
	this.title = title;
	this.author = author; 
	this.themes = themes;
}

const book1 = new Book(1, "Black Sheep", "Pappy")
const book2 = new Book(2, "Widow Maker", "Lartr")
console.log(book2)

Book.prototype.addTheme = function(theme) {
  this.themes = [...this.themes, theme];   
}

book1.addTheme('War Movie');
book2.addTheme('Drama');
book2.addTheme('Action'); 

//console.log("Book1", book1);

// constructor function
/* function Student(id, name, subjects = []) {
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
console.log("Student3", student3); */