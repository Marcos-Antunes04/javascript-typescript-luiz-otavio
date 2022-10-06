// Product -> increase, discount;
// T-shirt -> color;
// Mug -> material;


// **** PRODUCT ****
function Product(name, price) {
  this.name = name,
  this.price = price
}

Product.prototype.increase = function(percentage) {
  this.price = this.price + this.price * (percentage / 100);
}

Product.prototype.discount = function(percentage) {
  this.price = this.price - this.price * (percentage / 100);
}

const prod = new Product('Any product', 300);


// **** T-SHIRT ****
function TShirt(name, price, color) {
  Product.call(this, name, price); // by heritage, the properties of Product were passed to Tshirt;
  this.color = color; ///In addition to the property add "color";
}

// to add "increase" and "discount" in TShirt we pass the prototypes from Product to TShirt
TShirt.prototype = Object.create(Product.prototype); // as the prototype of "products" were allocated, TShirt lost its prototype.constructor
TShirt.prototype.constructor = TShirt; // so here we just put the constructor back

TShirt.prototype.increase = function(increaseValue) { //here we changed prototype method "increase"
  this.price += increaseValue;
}

const t1 = new TShirt('tshirt1', 200, 'black');
t1.increase(50);



// **** MUG ****
function Mug(name, price, material, storage) {
  Product.call(this, name, price),
  this.material = material;
  
  Object.defineProperty(this, 'storage', {
    enumerable: true,
    configurable: false,

    get: function() {
      return storage;
    },

    set: function(value) {
      if(typeof value !== 'number') return;
      storage = value;
    }
  })
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

const mug1 = new Mug('One Piece Mug', 20, 'porcelain', 300);
mug1.discount(50);
mug1.storage = 100;


console.log(prod);
console.log(t1);
console.log(mug1)