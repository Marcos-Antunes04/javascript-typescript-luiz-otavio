// **** DEFINE PROPERTY ****
function Product(name, price, storage) {
  this.name = name;
  this.price = price;

  Object.defineProperty(this, 'storage', {
    enumerable: true, // causes the variable to be displayed (show the key)
    value: storage, // value of the parameter passed when creating the object (show the value of key)
    writable: false, // makes it possible to edit the variable or not (change the value of property)
    configurable: true, // allows properties to be reconfigurable (delete property)
  })
}

const p1 = new Product('T-shirt', 50, 10);
console.log(p1.name); //public variable (is shown)
console.log(p1);

// if enumerable is false, it's not displayed here
console.log(Object.keys(p1)); 

for(let key in p1) { 
  console.log(key);
}



// **** DEFINE PROPERTIES *****

function Brand(name, ceo, genre, headquarters) {
  this.name = name;
  this.ceo = ceo;

  Object.defineProperties(this, {
    genre: {
      enumerable: true, // causes the variable to be displayed (show the key)
      value: genre, // value of the parameter passed when creating the object (show the value of key)
      writable: false, // makes it possible to edit the variable or not (change the value of property)
      configurable: true, // allows properties to be reconfigurable (delete property)
    },
    headquarters: {
      enumerable: false, // causes the variable to be displayed (show the key)
      value: headquarters, // value of the parameter passed when creating the object (show the value of key)
      writable: false, // makes it possible to edit the variable or not (change the value of property)
      configurable: false, // allows properties to be reconfigurable (delete property)
    }
  })
}

const mcDonalds = new Brand('McDonalds', ['Richard McDonalds', 'Maurice McDonalds', 'Ray Croc'], 'Fast Food Restaurant', 'Chicago, Illinois - U.S.');
console.log(mcDonalds);

// if enumerable is false, it's not displayed here
console.log(Object.keys(mcDonalds)); 

for(let key in mcDonalds) { 
  console.log(mcDonalds[key]);
}