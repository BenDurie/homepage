async function getBlogPost() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('blog post'), 1000);
  });
  
  const result = await promise;
  console.log(result);
  console.log('done');
    // .then(value => console.log(value))
    // .finally(() => console.log('done'));
}

getBlogPost()
