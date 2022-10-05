const product = {name: 'mug', price: 5.00};
const otherThing = product; // point to the same address in memory
product.color = 'Black'; // the change affect both variables

console.log(product);
console.log(otherThing);

// *********************

// COPY OBJECTS (to not make a change and affect both variables)
// Spread Operator
const brand = {name: 'Coca-Cola', genre: 'drinks'};
const copyBrand = {
  ...brand,
  origin: 'Atlanta, Georgia, U.S.',
};
brand.introduced = 1886;

console.log(brand);
console.log(copyBrand);

//Object.assign()
const cellphone = {name: 'iPhone X', brand: 'Apple'}
const copyCellphone = Object.assign({}, cellphone, {origin: 'Korea'})
copyCellphone.name = 'S20';
copyCellphone.brand = 'Samsung'

console.log(cellphone);
console.log(copyCellphone);


// *********************

// GET OWN PROPERTY DESCRIPTOR
const manga = {name: 'Monster', creator: 'Naoki Urasawa'};
Object.defineProperty(manga, 'name', {
  writable: false,
})
console.log(Object.getOwnPropertyDescriptor(manga, 'name')); //show property descriptor
manga.name = 'Pluto';
console.log(manga); //didn't change the manga.name, because "writable" was set to "false" 


// *********************

// SHOW OBJECT'S KEYS
const anime = {name: 'One Piece', creator: 'Eiichiro Oda'};
console.log('.keys()', Object.keys(anime));


// *********************

// SHOW OBJECT'S VALUES
console.log('.values()', Object.values(anime));


// *********************

// ENTRIES (returns an array with property and its value)
const betterManga = {name: 'One Piece', magazine: 'Weekly Shonen Jump', volumes: 103}

for (let entry of Object.entries(betterManga)) {
  console.log(entry);
}

// destructuring
for (let [key, value] of Object.entries(betterManga)) {
  console.log('The key: ' + key, '. The value: ' + value);
}