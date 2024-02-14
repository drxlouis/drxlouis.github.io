const body = document.querySelector('body')

const getJson = async () => {
    const url = await fetch("index.json")
    const data = await url.json
    return data
}

getJson()
.then((data) => {
    body.innerHTML = `
        <h1>${data.title}</h1>
        <h3>${data.info}</h3>
        <p>${data.hobby}</p>
    `
});

