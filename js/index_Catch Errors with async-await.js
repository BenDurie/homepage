// async function runAsync() {
//   return await Promise.reject(Error('Oops')); 
// }

// runAsync().catch(error => console.error(error));

async function getGithubUser() {
  try {    
    const response = await fetch('https://api.github.com/users/laksjdflasjfdlkjadfjk');
    if (!response.ok) {
      throw new Error(response.status);  
    }
  } catch (error) {
    console.error(error);  
  } 
}
getGithubUser();
