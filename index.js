// module.exports = () => {
//   // ...
// };



const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');


let ruta = 'test.md';
let absolutePath = path.resolve(ruta);

const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(absolutePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Error al leer el archivo'));
      } if (path.extname(absolutePath) === '.md'){
              console.log(data)
      } else {
        console.log('No es un archivo MD, ingresa una ruta válida')
      }
    });
  });
};



