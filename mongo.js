const mongoose = require('mongoose')
const connectionString = process.env.MONGO_DB_URI

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
