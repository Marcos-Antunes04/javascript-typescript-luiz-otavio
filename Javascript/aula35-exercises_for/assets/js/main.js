const elements = [
    {tag: 'p', text: 'Phrase 1'},
    {tag: 'div', text: 'Phrase 2'},
    {tag: 'footer', text: 'Phrase 3'},
    {tag: 'section', text: 'Phrase 4'}
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i in elements) {
    const {tag, text} = elements[i];
    const createdTag = document.createElement(tag);
    createdTag.innerText = text;
    div.appendChild(createdTag)
}

container.appendChild(div)