const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(respuesta => console.log(`Listado de la tabla ${args.base} hasta un limite de ${args.limite}`.green)).catch(err => console.log("Error al listar los datos:".red, err.red));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`.green)).catch(err => { console.log("Error al crear archivo:".red, err.red) });
        break;
    default:
        console.log('comando no reconocido.');
        break;
}
//console.log(argv);
//let argv2 = process.argv;
//console.log(argv.limite);
//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(base);

//crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(err => { console.log("Error al crear archivo:", err) });