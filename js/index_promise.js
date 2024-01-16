// callbacks -> promises

// States of a promise:
// pending
// fulfilled
// rejected
const promise = new Promise((resolve, reject) => {
   navigator.geolocation.getCurrentPosition(position => {
    resolve(position); 
  }, error => {
     reject(error);
  }); 
});

promise
  .then(position => console.log(position))
  .catch(error => console.error(error))
  .finally(() => console.log('done'));