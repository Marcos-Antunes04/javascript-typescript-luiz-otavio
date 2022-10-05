// **** GETTER AND SETTER - CONSTRUCTOR FUNCTION ****
function Product(name, price, storage) {
  this.name = name;
  this.price = price;

  let privateStorage;

  Object.defineProperty(this, 'storage', {
    enumerable: true, // causes the variable to be displayed (show the key)
    configurable: true, // allows properties to be reconfigurable (delete property)
    get: function() { // used to display the value
      return privateStorage;
    },
    set: function(value) {
      if(typeof value !== 'number') { //validation
        throw new TypeError('Only numbers are allowed')
      }
      privateStorage = value;
    }
  })
}

const p1 = new Product('T-shirt', 50, 10);
console.log(p1.name); //public variable (is shown)
p1.storage = 600;
console.log(p1.storage);



// **** GETTER AND SETTER - FACTORY FUNCTION ****
function createProduct(name) {  
  return {
    get name() {
      return name;
    },

    set name(value) {
      value = value.replace('here', '');
      name = value;
    }
  }
}

const p2 = createProduct('T-shirt');
p2.name = 'Anything here' // getter and setter intercepts this allocation
console.log('p2', p2.name);