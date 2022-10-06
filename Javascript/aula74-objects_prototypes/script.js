//new Object -> Object.prototype
const objA = {
  keyA: 'A',
// __proto__: Object.prototype
}

const objB = {
  keyB: 'B',
// __proto__: objA
}

const objC = {
  keyC: 'C',
// __proto__: objA
}

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
// console.log(objC);


// ****************************
function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.discount = function(percentage) {
  this.price = this.price - (this.price * (percentage / 100));
}

const p1 = new Product('T-shirt', 70);
p1.discount(100)
console.log('p1', p1)

const p2 = {
  name: 'Mug',
  price: 20,
}

console.log('p2', p2); //here p2 doesn't have access to the "discount" discount, as 
// not created as "new Product" (does not have its properties)
Object.setPrototypeOf(p2, Product.prototype); //after ".setPrototype()" the properties of Product are passed to p2 as well, giving access to p2.
p2.discount(10);
console.log('p2', p2); 

const p3 = Object.create(Product.prototype, {
  price: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 75,
  },
  size: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 43,
  }
})
p3.discount(10);
console.log('p3', p3);