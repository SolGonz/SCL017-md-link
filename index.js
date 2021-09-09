// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');


let ruta = 'README.md';
let absolutePath = path.resolve(ruta);

const fileOrDir = () => {
  return new Promise((resolve, reject) => {
    fs.stat(absolutePath, (error, stats) => {
      if (error) {
        reject(error);
        }
        else if (stats.isDirectory()) {
        resolve(readDir(absolutePath));
      } else if (stats.isFile()) {
        readFile(absolutePath)
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


const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(absolutePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Error al leer el archivo'));
      } if (path.extname(absolutePath) === '.md'){
        links = markdownLinkExtractor(data);
        links = links.filter(link => ~link.indexOf("http"));
              resolve(links);
              console.log(links)
      } else {
        console.log('No es un archivo MD, ingresa una ruta válida')
      }
    });
  });
};

fileOrDir();