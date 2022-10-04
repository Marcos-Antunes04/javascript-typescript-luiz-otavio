// ***** .CONCAT() *****
// concat doesn't change the original arrays
const carBrands = ['BMW', 'Volkswagem', 'Jeep'];
const technologyBrands = ['Nvidia', 'JBL', 'Samsung'];
const brands = carBrands.concat(technologyBrands);
console.log(brands);


// ***** SPREAD *****
const rockBands = ['Nirvana', 'Guns and Roses', 'Red Hot Chilli Peppers'];
const jRockBands = ['One Ok Rock', 'The Gazette', 'Mucc ']; 
const bands = [...rockBands, ...jRockBands, ...['Led Zeppelin', 'The Rolling Stones', 'Pink Floyd']]
//spreads (...) the values of arrays
console.log(bands)