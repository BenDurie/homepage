// Challenge: 
// The JSON Placeholder API has /users endpoint, 
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work. 

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3

fetch("https://jsonplaceholder.typicode.com/users/3")
.then(data => {
	  if (!data.ok) {
        throw new Error(data.status);  
      }
   return data.json();
})
 .catch(error => console.error(error))
.then(person => {
    console.log(`${person.name} works for ${person.company.name}`);
});
