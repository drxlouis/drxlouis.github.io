const body = document.querySelector('body')

const Json = async () => {
    const url = await fetch("index.json")
    const data = await url.json()
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

// const body = document.querySelector('body');

// const getJson = async () => {
//     try {
//         const response = await fetch("index.json");

//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }

//         const data = await response.json();
//         return data;

//     } catch (error) {
//         console.error(`Error fetching data: ${error.message}`);
//         throw error; // Re-throw the error to be caught in the outer catch block if needed
//     }
// };

// getJson()
//     .then((data) => {
//         body.innerHTML = `
//             <h1>${data.title}</h1>
//             <h3>${data.info}</h3>
//             <p>${data.hobby}</p>
//         `;
//     })
//     .catch((error) => {
//         console.error(`Error in promise chain: ${error.message}`);
//     });

