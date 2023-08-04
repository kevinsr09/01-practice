const mongoose = require('mongoose')
const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env

const connectionString = (NODE_ENV === 'production')
  ? MONGO_DB_URI
  : MONGO_DB_URI_TEST

mongoose.connect(connectionString, {
  autoIndex: true
})
  .then(() => {
    console.log('connect')
  }).catch(error => {
    console.error(error)
  })

// const tecnico = new Tecnico({
//   nombreTaller: 'MegaTec',
//   descripcion: 'lorem impsun',
//   categoria: '0050',
//   img: 'https://via.placeholder.com/200x200'

// })

// tecnico.save()
//   .then(res => {
//     console.log(res)
//     mongoose.connection.close()
//   })
//   .catch(error => {
//     console.error(error)
//   })
