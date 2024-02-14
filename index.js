const body = document.querySelector('body')

const Json = async () => {
    const url = await fetch("index.json")
    const data = await url.json
    return data
}

Json()
.then((data) => {
    body.innerHTML = `
        <h1>${data.title}</h1>
        <h3>${data.info}</h3>
        <p>${data.hobby}</p>
    `
});

