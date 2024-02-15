const body = document.querySelector('body')

const json = async () => {
    const url = await fetch("index.json")
    const data = await url.json()
    return data
}

json()
.then((data) => {
    body.innerHTML = `
    <div class="card">
        <h1>${data.title}</h1>
        <img src="${data.img}">
        <h3>${data.info}</h3>
        <p>${data.tchn}</p>
    </div>
    `
});
