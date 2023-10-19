/*const model = require('./model');

function get_representantelegal(filtro_representantelegal) {
  return new Promise((resolve, reject) => {
    let filtro = {};
    if (filtro_representantelegal) {
      filtro = { ruc: filtro_representantelegal };
    }

    model
      .find(filtro)
      .populate({
        path: 'empresa_detalle',
        populate: {
          path: 'empresa',
          model: 'empresa',
        },
      })
      .exec()
      .then((data) => {
        const lista = data.map((elemento) => {
          const objeto = {
            id: elemento._id,
            cedula: elemento.cedula,
            nombre: elemento.nombre,
            apellido: elemento.apellido,
            email: elemento.email,
            domicilio: elemento.domicilio,
            telefono: elemento.telefono,
          };
          objeto.empresas = elemento.empresa_detalle.map((detalle) => {
            return {
              empresa: detalle.empresa.nombre,
              domicilio: detalle.empresa.domicilio,
            };
          });
          return objeto;
        });

        resolve(lista);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function add_representantelegal( representantelegal ) {
    representantelegal.fecha_creaccion = new Date()

    const objeto = new model( representantelegal )
    objeto.save()
}

/*async function update_representantelegal( representantelegal ) {
    const objeto = await model.findOne( {ruc: representantelegal.ruc} )

    if ( objeto ) {
        objeto.estado = false
        return resultado = await objeto.save()
    } else {
        return null
    }
}*/
/*async function update_representantelegal(representantelegal) {
  const objeto = await model.findOne({ ruc: representantelegal.ruc });

  if (objeto) {
      // Copiar todos los campos del objeto `representantelegal` al objeto encontrado
      for (let key in representantelegal) {
          objeto[key] = representantelegal[key];
      }

      // Guardar los cambios
      return await objeto.save();
  } else {
      return null;
  }
}


async function delete_representantelegal( ruc ) {
    return await model.deleteOne({ruc: ruc})
}

module.exports = {
    add: add_representantelegal,
    get: get_representantelegal,
    update: update_representantelegal,
    delete: delete_representantelegal
}*/

const model = require('./model');

function get_representantelegal(filtro_representantelegal) {
    return new Promise((resolve, reject) => {
        let filtro = {};
        if (filtro_representantelegal) {
            filtro = { ruc: filtro_representantelegal };
        }

        model
            .find(filtro)
            .populate({
                path: 'empresa_detalle',
                populate: {
                    path: 'empresa',
                    model: 'empresa',
                },
            })
            .exec()
            .then((data) => {
                // Transformando la data para que sea más legible y entendible
                const lista = data.map((elemento) => {
                    let objeto = {
                        id: elemento._id,
                        cedula: elemento.cedula,
                        nombre: elemento.nombre,
                        apellido: elemento.apellido,
                        email: elemento.email,
                        domicilio: elemento.domicilio,
                        telefono: elemento.telefono,
                        empresas: elemento.empresa_detalle.map((detalle) => ({
                            empresa: detalle.empresa.nombre,
                            domicilio: detalle.empresa.domicilio
                        }))
                    };
                    return objeto;
                });

                resolve(lista);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function add_representantelegal(representantelegal) {
    representantelegal.fecha_creaccion = new Date();

    const objeto = new model(representantelegal);
    return objeto.save();
}

async function update_representantelegal(representantelegal) {
    const objeto = await model.findOne({ ruc: representantelegal.ruc });

    if (objeto) {
        // Actualizando campos del representante legal encontrado
        for (let key in representantelegal) {
            objeto[key] = representantelegal[key];
        }
        return await objeto.save();
    } else {
        return null;
    }
}

function delete_representantelegal(ruc) {
    return model.deleteOne({ ruc: ruc });
}

module.exports = {
    add: add_representantelegal,
    get: get_representantelegal,
    update: update_representantelegal,
    delete: delete_representantelegal
};

