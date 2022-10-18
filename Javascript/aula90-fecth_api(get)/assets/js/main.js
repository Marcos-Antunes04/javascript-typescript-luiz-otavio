// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();
    
//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText)
//             }
//         });
//     })
// };

document.addEventListener('click', el => {
    const element = el.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        el.preventDefault();
        loadPage(element);
    }
})

async function loadPage(element) {
    try {
        const href = element.getAttribute('href');
        const response = await fetch(href);
    
        if(response.status !== 200) throw new Error ('Error 404!');
    
        const html = await response.text();
        loadResult(html);
    } catch(e) {
        console.log(e);
    }

}

function loadResult(response) {
    const result = document.querySelector('.result');
    result.innerHTML = response;
}