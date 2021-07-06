process.env.EDGE_USE_CORECLR = 1;

const edge = require('electron-edge-js');

const helloWorld = edge.func(`
    async (input) => { 
        return ".NET Welcomes " + input.ToString(); 
    }
`);

function handler(error, result) {
    if (error) throw error;
    console.log(result);
    const pElement = document.createElement('p');
    pElement.innerText = result;
    document.body.append(pElement);
}

helloWorld('JavaScript', handler);

setTimeout(() => { helloWorld('Again', handler) }, 1000);

setTimeout(() => { helloWorld('And Again', handler) }, 2000);
