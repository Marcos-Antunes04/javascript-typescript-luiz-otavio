function random(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

function waitHere(msg, time) {
  return new Promise((resolve,reject) => {
    if(typeof msg !== 'string') reject ('BAD VALUE'); //when the promise is rejected, it's treated in "catch"
    

    setTimeout(() => {
      resolve(msg);
    }, time)
  })
}

waitHere('Conection with DB', random(1,3))
  .then(response => {
    console.log(response);
    return waitHere('Fetching database data ', random(1, 3));
  })
  .then(response => {
    console.log(response);
    return waitHere('Processing the base data', random(1, 3));
  }).then(response => {
    console.log(response);
  }).then(() => {
    console.log('Displays on screen');
  })
  .catch(e => console.log(e)); //this "e" refers the "reject" of the Promise
  //when the promise is rejected, it's treated in "catch"