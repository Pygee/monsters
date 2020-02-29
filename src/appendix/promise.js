const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("i have resolved");
    }, 1000);
  } else {
    reject("i have rejected");
  }
});

myPromise
  .then(value => console.log(value))
  .catch(rejected => console.log(rejected));
