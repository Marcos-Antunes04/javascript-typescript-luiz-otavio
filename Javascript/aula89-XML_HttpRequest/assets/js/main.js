const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText)
            }
        });
    })
};

document.addEventListener('click', el => {
    const element = el.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        el.preventDefault();
        loadPage(element);
    }
})

async function loadPage(element) {
    const href = element.getAttribute('href');
    
    try {
        const response = await request({
            method: 'GET',
            url: href
        });
        loadResult(response);
    } catch(e) {
        console.log(e);
    }

}

function loadResult(response) {
    const result = document.querySelector('.result');
    result.innerHTML = response;
}