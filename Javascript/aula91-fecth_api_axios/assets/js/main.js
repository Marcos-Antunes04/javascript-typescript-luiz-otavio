// fetch('pessoas.json')
//     .then(response => response.json())
//     .then(json => loadElementsInPage(json));
// or
axios('pessoas.json')
    .then(response => loadElementsInPage(response.data));

function loadElementsInPage(json) {
    const table = document.createElement('table');
    const resultDiv = document.querySelector('.result');

    const thName = document.createElement('th');
    thName.innerText = 'Name';
    table.appendChild(thName);

    const thAge = document.createElement('th');
    thAge.innerText = 'Age';
    table.appendChild(thAge);

    const thSalary = document.createElement('th');
    thSalary.innerText = 'Salary';
    table.appendChild(thSalary);

    for(let person of json) {
        const tr = document.createElement('tr');
        
        const tdName = document.createElement('td');
        tdName.innerHTML = person.nome;
        tr.appendChild(tdName);

        const tdAge = document.createElement('td');
        tdAge.innerHTML = person.idade;
        tr.appendChild(tdAge);

        const tdSalary = document.createElement('td');
        tdSalary.innerHTML = person.salario;
        tr.appendChild(tdSalary);

        table.appendChild(tr);
    }
    resultDiv.appendChild(table);
}