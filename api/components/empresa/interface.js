const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const routes = express.Router()

routes.get('/', function(req, res) {
    const filtro_empresa = req.query.ruc || null
    controller.get_empresa( filtro_empresa )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

routes.post('/', function(req, res) {
    controller.add_empresa( req.body )
        .then( (data) => response.success(req, res, data, 201) )
        .catch( (error) => response.error(req, res, error, 500) )
})

routes.put('/', function(req, res) {
    controller.update_empresa( req.body )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

routes.delete('/', function(req, res) {
    controller.delete_empresa( req.body.ruc )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 500) )
})

module.exports = routes