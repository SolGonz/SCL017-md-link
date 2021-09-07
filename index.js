// // module.exports = () => {
// //   // ...
// // };



const fs = require('fs');
const path = require('path');


let filePath = 'README.md';
let absolutePath = path.resolve(filePath);

const fileOrDir = () => {
  return new Promise((resolve, reject) => {
    fs.stat(absolutePath, (error, stats) => {
      if (error) {
        reject(error);
      }
      if (stats.isDirectory()) {
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
     if (file.includes('.md')){
       console.log(file)
     }
    })
  })
}




const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(absolutePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Error al leer el archivo'));
      } else {
        resolve(data);
        console.log(data)
      }
    });
  });
};

fileOrDir();











