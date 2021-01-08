//requires
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero.');
            return;
        }
        let data = '';
        for (let i = 1; i <= `${limite}`; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`archivos/tabla-${base}`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        //let limit = `${limite}`;
        console.log(`=================`.green);
        console.log("=================");
        console.log("=================".red);
        for (let i = 1; i <= `${limite}`; i++) {
            console.log(`${base} * ${i}=${base*i}`.green);
        }
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}