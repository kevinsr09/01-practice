const express = require('express')
const cors = require('cors')
let data = require('./data/data.json')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>hello word</h1>')
})

app.get('/api/tecnicos', (request, response) => {
  response.json(data)
})

app.get('/api/tecnicos/:id', (request, response) => {
  const id = Number(request.params.id)
  const tecnico = data.find(tec => tec.id === id)

  if (tecnico) {
    response.json(tecnico)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/tecnicos/:id', (request, response) => {
  const id = Number(request.params.id)
  data = data.filter(tec => tec.id !== id)

  response.status(204).end()
})

app.post('/api/tecnicos', (req, res) => {
  const tecnico = req.body
  console.log(tecnico)

  const ids = data.map(id => id.id)
  const maxId = Math.max(...ids)

  const newTecnico = {
    id: maxId + 1,
    nombreTaller: tecnico.nombreTaller,
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident accusantium temporibus numquam voluptatibus libero qui est, molestias ab suscipit rerum.',
    categoria: tecnico.categoria,
    img: 'https://via.placeholder.com/200x200'

  }

  data = [...data, newTecnico]
  res.json(newTecnico)
})

app.use((req, res) => {
  res.send('<h1>404: Bad request</h1>')
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`)
})
