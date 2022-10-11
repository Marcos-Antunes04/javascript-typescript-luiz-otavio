const people = [
  {id: 3, name: 'Luiz'},
  {id: 2, name: 'Maria'},
  {id: 1, name: 'Helena'}
];

// const newPeople = {};

// for (const {id, name} of people) {
//   newPeople[id] = {id, name};
// }

const newPeople = new Map();
for (const person of people) {
  const {id} = person;
  newPeople.set(id, {...person});
}

console.log(newPeople)