const fs = require('fs')



const argv = require('yargs')
    .command('crearEstudiante', 'Para crear un estudiante')
    .argv;

module.exports = {
    argv
}