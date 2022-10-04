// REVIEW 
// Create array
const names = ['Walter', 'Toshio', 'Yasunaka'];
// Change specific array item
names[1] = 'Thoxio'
// Delete a specific item, without changing the others indexes
delete names[2];
console.log(names)

// *******************

// Create array by constructor
const fruits = new Array('Melon', 'Apple', 'Orange', 'Banana')
console.log(fruits);

// *******************

// Value by REFERENCE (point to the same location in memory)
const animes = ['One Piece', 'Bleach', 'Spy x Family'];
const mangas = animes;
// all changes made to the "animes" will change "mangas", and all changes made to the "mangas" will change "animes";
animes.pop();
console.log(mangas)

// *******************

// to Copy arrays by spread
const musics = ['Just the Way You Are', 'Numb', 'Firework'];
const newMusicGroup = [...musics];
musics.push('Wherever you are');
// here, "newMusicGroup" was a copy of musics, so when we added a new song in "musics" it didn't affect "newMusicGroup"
console.log(newMusicGroup);

// *******************

// remove and return an item
const brands = ['Nike', 'Adidas', 'Puma', 'Diadora'];
const lastBrand = brands.pop();
const firstBrand = brands.shift(); //the method shift move all indexes in array
console.log(brands, lastBrand, firstBrand)

// insert item in array
const restaurants = ['Seu Barnabé', 'Tatoes', 'Meu Chef'];
restaurants.unshift('Smash Burger'); //at the beginning 
restaurants.push('Street Burger'); //at the end
console.log(restaurants);

// *******************

// SLICE
const books = ['Rich dad poor dad', 'Secrets of the millionaire mind', 'Shoe Dog', 'The Mamba Mentality', 'Mindset'];
const biographyBooks = books.slice(2,4); //the slice method creates a new array, doesn't change the original array
console.log('all books', books);
console.log('biography books', biographyBooks);

// *******************

// Convert string in array
const fullname = 'Walter Toshio Yasunaka';
const separatedNames = fullname.split(' ');
console.log(separatedNames);

// Convert array in string
const separatedNames2 = ['Walter', 'Toshio', 'Yasunaka'];
const names2 = separatedNames.join(' ');
console.log(names2);
