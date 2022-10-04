const animals = ['dog', 'cat', 'bird', 'lion', 'mouse'];
// animals.splice(index, qnt delete, el1, el2, el3)

// ***** REMOVE ELEMENT: POSITIVE INDEX *****
const removedAnimals = animals.splice(3, 2);
console.log('allAnimals', animals);
console.log('removedAnimals', removedAnimals);


// ***** REMOVE ELEMENT: NEGATIVE INDEX *****
// it's possible to use negative numbers to represent inverted count of index
const burgerBrands = ['McDonalds', 'Burger King', 'Bobs', 'Subway', 'KFC'];
const removedBurgerBrands = burgerBrands.splice(3, 1);
console.log('allBurgerBrands', burgerBrands);
console.log('removedBurgerBrands', removedBurgerBrands);


// ***** ADD ELEMENT *****
// array.splice(index, qnt_delete, el_to_add, el_to_add2, el_to_add3)
const pizzaBrands = ['Pizza Hut', 'Dominos', 'Parada da Pizza', 'Flavios'];
pizzaBrands.splice(1, 0, 'Margherita')
console.log(pizzaBrands)


// ***** SIMULATE: .POP() *****
const carBrands = ['Nissan', 'Mitsubishi', 'Hyundai', 'BMW', 'Tesla'];
const removedCarBrands = carBrands.splice(-1, 1);
console.log('all', carBrands);
console.log('removed', removedCarBrands);


// ***** SIMULATE: .()SHIFT *****
const drinkBrands = ['Coca-Cola', 'PepsiCo', 'Budweiser', 'Gatorade', 'Sprite'];
const removedDrinkBrands = drinkBrands.splice(0, 1);
console.log('all', drinkBrands);
console.log('removed', removedDrinkBrands);


// ***** SIMULATE: .()PUSH *****
const bands = ['The Beatles', 'Linkin Park', 'Green Day', 'Nirvana'];
bands.splice(bands.length, 0, 'Aerosmith')
console.log(bands)


// ***** SIMULATE: .()UNSHIFT *****
const japaneseSinger = ['Aimer', 'Nishino Kana', 'Amuro Namie', 'LiSA'];
japaneseSinger.splice(0, 0, 'Utada Hikaru')
console.log(japaneseSinger)