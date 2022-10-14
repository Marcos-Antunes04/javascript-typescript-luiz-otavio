function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitHere(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject(false);
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - passei na promise.')
    }, time)
  })
}


/* *** PROMISE.ALL() *** */
//resolve all promises and return an array in the same order. If one promise results in error, the Promisse.all() will return the error - reject
const promisesArray = [
  'First Value',
  waitHere('Promise All 1', 3000),
  waitHere('Promise All 2', 500),
  waitHere('Promise All 3', 1000),
  waitHere(1000, 1000),
  'Other value'
];

Promise.all(promisesArray)
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    console.log(err);
  })


/* *** PROMISE.RACE() *** */
//try to resolve them all at once, the first resolved is returned
const promisesArray2 = [
  waitHere('Promise Race 1', rand(1, 5)),
  waitHere('Promise Race 2', rand(1, 5)),
  waitHere('Promise Race 3', rand(1, 5)),
];

Promise.race(promisesArray2)
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    console.log(err);
  })


/* *** PROMISE.RESOLVE() *** */
function downloadPage() {
  const inCache = true;
  if(inCache) {
    return Promise.resolve('Page in cache'); //if "resolve", then it will fall into "then", else will fall into "catch"
  } else {
    return waitHere('Download the page', 3000)
  }
}

downloadPage()
  .then(pageData => {
    console.log(pageData);
  })
  .catch(e => console.log(e));


/* *** PROMISE.REJECT() *** */
function downloadPage2() {
  const inCache = true;

  if(inCache) {
    return Promise.reject('Page in cache'); //if "resolve", then it will fall into "then", else will fall into "catch" 
  } else {
    return waitHere('Download the page', 3000)
  }
}

downloadPage2()
  .then(pageData => {
    console.log('resolve ->', pageData);
  })
  .catch(e => console.log('reject ->', e));
