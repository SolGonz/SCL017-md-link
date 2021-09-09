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

// función que extrae archivos MD del directorio
const readDir = () => {
  fs.readdir(absolutePath, (err, files) =>{
    if (err){
      throw err;
    }
   files.forEach(file => { 
     if (path.extname(file) === '.md'){
       console.log('Este es un archivo MD del directorio: ', file)
     }
    });
  });
}



