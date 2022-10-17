function rand(min=1, max=3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('fall into error');
        return;
      }

      resolve(msg.toUpperCase() + ' - passed in promise.')
      return;
    }, time)
  })
}

// **** THEN ****
// wait('Phase 1', rand(0, 3))
//   .then(value => {
//     console.log(value);
//     return wait('Phase 2', rand());
//   })
//   .then(value2 => {
//     console.log(value2);
//     return wait('Phase 3', rand());
//   })
//   .then(value3 => {
//     console.log(value3);
//     return value3;
//   })
//   .then(phase => {
//     console.log('We finished in: ', phase)
//   })
//   .catch(e => console.log(e));

// **** ASYNC / AWAIT ****
async function execute() {
  try {
    const phase1 = await wait('Phase 1', rand());
    console.log(phase1);
  
    const phase2 = await wait('Phase 2', rand());
    console.log(phase2);
  
    const phase3 = await wait('Phase 3', rand());
    console.log(phase3);
  
    console.log('We finished in: ', phase3);
  } catch(e) {
    console.log(e);
  }
}

execute()