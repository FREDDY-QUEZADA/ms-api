/*const storage = require('./storage')

function get_representante_legal( filtro_representante_legal ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( filtro_representante_legal ) )
    })
}

function add_representantelegal( representante_legal ) {
    return new Promise((resolve, reject) => {
        if (!representante_legal.ruc) {
            return reject('No existe datos')
        }
        storage.add( representante_legal )
        resolve( representante_legal )        
    })
}

function update_representantelegal( representante_legal ) {
    return new Promise((resolve, reject) => {
        let resultado = storage.update( representante_legal )
        if (resultado) {
            return resolve( representante_legal )
        } else {
            return reject('No existe el representante legal')
        }
    })
}

function delete_representantelegal( ruc ) {
    return new Promise((resolve, reject) => {
        storage.delete( ruc )
        resolve( ruc )
    })
}

module.exports = {
    get_representante_legal,
    add_representantelegal,
    update_representantelegal,
    delete_representantelegal,
}*/
const storage = require('./storage')

function get_representante_legal(filtro_representante_legal) {
    return storage.get(filtro_representante_legal);
}

function add_representantelegal(representante_legal) {
    if (!representante_legal.ruc) {
        return Promise.reject('Faltan datos requeridos');
    }
    return storage.add(representante_legal);
}

function update_representantelegal(representante_legal) {
    return storage.update(representante_legal)
        .then(resultado => {
            if (resultado) {
                return representante_legal;
            } else {
                throw new Error('No existe el representante legal');
            }
        });
}

function delete_representantelegal(ruc) {
    return storage.delete(ruc);
}

function add_empresa_to_representantelegal(ruc, empresaId) {
    return storage.addEmpresa(ruc, empresaId);
}

function get_empresas_from_representantelegal(ruc) {
    return storage.getEmpresas(ruc);
}

function delete_empresa_from_representantelegal(ruc, empresaId) {
    return storage.deleteEmpresa(ruc, empresaId);
}

module.exports = {
    get_representante_legal,
    add_representantelegal,
    update_representantelegal,
    delete_representantelegal,
    add_empresa_to_representantelegal,
    get_empresas_from_representantelegal,
    delete_empresa_from_representantelegal
}
