/*const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true,
}

const empresa_schema = new Schema({
    empresa: {
        type: Schema.ObjectId,
        ref: 'empresa',
    }
}, {
    timestamps: true,
})

const representantelegal_schema = new Schema({
    ruc: req_string,
    cedula: req_string,
    nombre: req_string,
    apellido: req_string,
    email: req_string,
    domicilio: req_string,
    telefono: req_string,
    empresa_detalle:[empresa_schema],
}, {
    timestamps: true,
})

const model = mongoose.model('representante-legal', representantelegal_schema)
module.exports = model
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const req_string = {
    type: String,
    required: true,
};

const EmpresaDetalleSchema = new Schema({
    empresa: {
        type: Schema.Types.ObjectId,
        ref: 'empresa', // Referencia al modelo de empresa que acabas de mostrarme.
    }
}, {
    timestamps: true,
});

const RepresentanteLegalSchema = new Schema({
    ruc: req_string,
    cedula: req_string,
    nombre: req_string,
    apellido: req_string,
    email: req_string,
    domicilio: req_string,
    telefono: req_string,
    empresa_detalle: [EmpresaDetalleSchema], // Aquí el representante legal puede tener múltiples empresas.
}, {
    timestamps: true,
});

const RepresentanteLegal = mongoose.model('representante-legal', RepresentanteLegalSchema);

module.exports = RepresentanteLegal;

