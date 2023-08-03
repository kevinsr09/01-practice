const { Schema, model } = require('mongoose')

const tecnicoSchema = new Schema({

  nombreTaller: String,
  descripcion: String,
  categoria: String,
  img: String

})

tecnicoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Tecnico = model('Tecnico', tecnicoSchema)

module.exports = Tecnico
