
const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: "",
  verified: ""  
};

const newUser = {
  username: "ReedBarger",
  email: "reed@gmail.com",
  password: "mypassword"  
};

console.log(Object.assign(user, newUser));

const createdUser = { ...user, ...newUser, verified: false };
console.log(createdUser);

/* const user = {
  name: "Reed",
  username: "Reedbarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer"  
  }  
}; */

// const { title } = user.details
// const { name, details: { title} } = user;

/* function displayUserBio({ name, details: { title} }) {
  console.log(`${name} is a ${title}`); 
}

displayUserBio(user); */

// const { username, email } = user;

// function displayUser() {
//   console.log(`username: ${username}, email: ${email}`);  
// }

// displayUser())