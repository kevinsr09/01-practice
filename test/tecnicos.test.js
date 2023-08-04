const supertest = require('supertest')
const { app, server } = require('../index')
const { default: mongoose } = require('mongoose')
const Tecnico = require('../models/Tecnico')

const api = supertest(app)

const initialTecnicos = [
  {
    nombreTaller: 'reparaciones JL 1',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident accusantium temporibus numquam voluptatibus libero qui est, molestias ab suscipit rerum.',
    categoria: '0010',
    img: 'https://via.placeholder.com/200x200'
  },
  {
    nombreTaller: 'reparaciones JL 2',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident accusantium temporibus numquam voluptatibus libero qui est, molestias ab suscipit rerum.',
    categoria: '0020',
    img: 'https://via.placeholder.com/200x200'
  }
]

beforeEach(async () => {
  await Tecnico.deleteMany({})

  const tecnico1 = new Tecnico(initialTecnicos[0])
  tecnico1.save()

  const tecnico2 = new Tecnico(initialTecnicos[1])
  tecnico2.save()
})

test('tecnicos are returned as json', async () => {
  await api
    .get('/api/tecnicos')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there are two tecnicos', async () => {
  const response = await api.get('/api/tecnicos')
  expect(response.body).toHaveLength(initialTecnicos.length)
})

test('there are two tecnicos', async () => {
  const response = await api.get('/api/tecnicos')
  expect(response.body[0].nombreTaller).toBe('reparaciones JL 1')
})

test('there are two tecnicos', async () => {
  const response = await api.get('/api/tecnicos')

  const tecnicos = response.body.map(tec => tec.nombreTaller)

  expect(tecnicos).toContain('reparaciones JL 1')
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})
