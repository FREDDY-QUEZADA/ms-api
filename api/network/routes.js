
const usuario = require('../components/usuario/interface')
const representantelegal = require('../components/representante-legal/interface')
const empresa = require('../components/empresa/interface')

const routes = function( server ){
    server.use('/usuario',usuario)
    server.use('/representante-legal',representantelegal)
    server.use('/empresa',empresa)
}
module.exports = routes