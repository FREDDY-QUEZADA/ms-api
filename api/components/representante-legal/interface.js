const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const route = express.Router()

route.get('/', function(req, res) {
    const filtro_representantelegal = req.query.ruc || null
    controller.get_representante_legal( filtro_representantelegal )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

route.post('/', function(req, res) {
    controller.add_representantelegal( req.body )
        .then( (data) => response.success(req, res, data, 201) )
        .catch( (error) => response.error(req, res, error, 500) )
})

*route.post('/:ruc/empresa', function(req, res) {
    controller.add_empresa_to_representantelegal(req.params.ruc, req.body.empresa)
        .then((data) => response.success(req, res, data, 201))
        .catch((error) => response.error(req, res, error, 500));
});

route.delete('/:ruc/empresa/:empresaId', function(req, res) {
    controller.delete_empresa_from_representantelegal(req.params.ruc, req.params.empresaId)
        .then((data) => response.success(req, res, data, 200))
        .catch((error) => response.error(req, res, error, 500));
});

route.patch('/', function(req, res) {
    controller.update_representantelegal( req.body )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

/*route.put('/', function(req, res) {
    const updatedData = { ...req.body, ruc: req.params.ruc };
    controller.update_representantelegal( updatedData )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})*/



/*route.delete('/', function(req, res) {
    controller.delete_representantelegal( req.body.ruc )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})*/
route.delete('/:ruc', function(req, res) {
    controller.delete_representantelegal( req.params.ruc )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
});



module.exports = route