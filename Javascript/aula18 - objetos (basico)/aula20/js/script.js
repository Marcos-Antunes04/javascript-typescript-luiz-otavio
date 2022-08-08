function myScope() {
    const form = document.querySelector('.form');
    /*
    form.onsubmit = function(event) {
        event.preventDefault()
    };
    */
    function receiveEventForm(event) {
        event.preventDefault();
    };

    form.addEventListener('submit', receiveEventForm);

    let people = [];

    function add() {
        let firstName = document.querySelector('#firstName').value;
        let lastName = document.querySelector('#lastName').value;
        let weight = document.querySelector('#weight').value;
        let height = document.querySelector('#height').value;

        let newPerson = {firstName, lastName, weight, height}

        people.push(newPerson)
        console.log(people)
    };
};



