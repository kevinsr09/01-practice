const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://kevinsr09:1006124239a@cluster0.xqwcszw.mongodb.net/tecnicos?retryWrites=true&w=majority'
const { Schema, model } = mongoose

mongoose.connect(connectionString, {
  autoIndex: true
})
  .then(() => {
    console.log('connect')
  }).catch(error => {
    console.error(error)
  })

const tecnicoSchema = new Schema({

  nombreTaller: String,
  descripcion: String,
  categoria: String,
  img: String

})

const Tecnico = model('Tecnico', tecnicoSchema)

const tecnico = new Tecnico({
  nombreTaller: 'MegaTec',
  descripcion: 'lorem impsun',
  categoria: '0050',
  img: 'https://via.placeholder.com/200x200'

})

tecnico.save()
  .then(res => {
    console.log(res)
    mongoose.connection.close()
  })
  .catch(error => {
    console.error(error)
  })
