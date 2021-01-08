 const opts = {
     base: {
         demand: true,
         alias: 'b'
     },
     limite: {
         alias: 'l',
         default: 5
     }
 }

 const argv = require('yargs')
     .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
     .command('crear', 'Crea un archivo con la tabla de multiplicar hasta un limite especificado. Por defecto se crea hasta un limite de 10.', opts)
     .help()
     .argv;


 module.exports = {
     argv
 }