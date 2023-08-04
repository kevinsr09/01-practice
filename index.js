require('dotenv').config()
require('./mongo')

const Tecnico = require('./models/Tecnico')
const express = require('express')
const cors = require('cors')
const notFount = require('./request/middleware/notFount')
const handleErrors = require('./request/middleware/handleErrors')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>hello word</h1>')
})

app.get('/api/tecnicos', (request, response) => {
  Tecnico.find({})
    .then(result => {
      response.json(result)
    })
})

app.get('/api/tecnicos/:id', (request, response, next) => {
  const { id } = request.params

  Tecnico.findById(id)
    .then(tecnicoById => {
      if (tecnicoById) {
        response.json(tecnicoById)
      } else {
        response.status(404).json({
          error: 'not fount'
        })
      }
    })
    .catch(err => {
      next(err)
    })
})

app.delete('/api/tecnicos/:id', (request, response, next) => {
  const { id } = request.params

  Tecnico.findByIdAndRemove(id)
    .then(result => response.status(204).end())
    .catch(error => next(error))
})

app.post('/api/tecnicos', (request, response) => {
  const tecnico = request.body

  if (!tecnico.nombreTaller) {
    return response.status(404).json({
      error: 'Debes ingresar el nombre del taller'
    })
  }

  const newTecnico = new Tecnico({
    nombreTaller: tecnico.nombreTaller,
    descripcion: tecnico.descripcion,
    categoria: tecnico.categoria,
    img: tecnico.img

  })

  newTecnico.save()
    .then(tecnicoSaved => {
      response.json(tecnicoSaved)
    })
})

app.put('/api/tecnicos/:id', (request, response, next) => {
  const { id } = request.params
  const tecnico = request.body

  const newTecnicoInfo = {
    nombreTaller: tecnico.nombreTaller,
    categoria: tecnico.categoria
  }

  Tecnico.findByIdAndUpdate(id, newTecnicoInfo, { new: true })
    .then(result => response.json(result))
    .catch(error => {
      next(error)
    })
})

app.use(handleErrors)

app.use(notFount)

const PORT = process.env.PORT || 3001

const server = app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`)
})

module.exports = { app, server }
