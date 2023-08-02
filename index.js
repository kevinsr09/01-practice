const express = require('express')
const cors = require('cors')
const app = express()

let data = [
  {
    id: 1,
    nombreTaller: 'reparaciones JL',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident accusantium temporibus numquam voluptatibus libero qui est, molestias ab suscipit rerum.',
    empleados:[
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'reparaciones',
      },
      {
        nombre: 'stiven',
        cargo: 'assesor',
        area: 'oficina',
      }
    ],
    categoria: '0020',
    img: 'https://via.placeholder.com/200x200',
  },

  {
    id: 2,
    nombreTaller: 'telsoft',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident accusantium temporibus numquam voluptatibus libero qui est, molestias ab suscipit rerum.',
    empleados:[
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      },
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      }
    ],
    categoria: '0040',
    img: 'https://via.placeholder.com/200x200',
  },

  {
    id: 3,
    nombreTaller: 'displays del tolima',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident accusantium temporibus numquam voluptatibus libero qui est, molestias ab suscipit rerum.',
    empleados:[
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      },
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      }
    ],
    categoria: '0070',
    img: 'https://via.placeholder.com/200x200',
  },

  {
    id: 4,
    nombreTaller: 'La Casa Del Telefono',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident accusantium temporibus numquam voluptatibus libero qui est, molestias ab suscipit rerum.',
    empleados:[
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      },
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      }
    ],
    categoria: '0020',
    img: 'https://via.placeholder.com/200x200',
  },

  {
    id: 5,
    nombreTaller: 'RepCompu',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident accusantium temporibus numquam voluptatibus libero qui est, molestias ab suscipit rerum.',
    empleados:[
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      },
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      }
    ],
    categoria: '0010',
    img: 'https://via.placeholder.com/200x200',
  },

  {
    id: 6,
    nombreTaller: 'Multi tablet',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident accusantium temporibus numquam voluptatibus libero qui est, molestias ab suscipit rerum.',
    empleados:[
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      },
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      }
    ],
    categoria: '0030',
    img: 'https://via.placeholder.com/200x200',
  },

  {
    id: 7,
    nombreTaller: 'Expertos del software',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident accusantium temporibus numquam voluptatibus libero qui est, molestias ab suscipit rerum.',
    empleados:[
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      },
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      }
    ],
    categoria: '0050',
    img: 'https://via.placeholder.com/200x200',
  },

  {
    id: 8,
    nombreTaller: 'new Tecnology',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident accusantium temporibus numquam voluptatibus libero qui est, molestias ab suscipit rerum.',
    empleados:[
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      },
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      }
    ],
    categoria: '0050',
    img: 'https://via.placeholder.com/200x200',
  },

  {
    id: 9,
    nombreTaller: 'ElectriMaster',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident accusantium temporibus numquam voluptatibus libero qui est, molestias ab suscipit rerum.',
    empleados:[
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      },
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      }
    ],
    categoria: '0010',
    img: 'https://via.placeholder.com/200x200',
  },

  {
    id: 10,
    nombreTaller: 'virus tel',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident accusantium temporibus numquam voluptatibus libero qui est, molestias ab suscipit rerum.',
    empleados:[
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      },
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'Oficina',
      }
    ],
    categoria: '0040',
    img: 'https://via.placeholder.com/200x200',
  },

]

app.use(cors())
app.use(express.json())

app.get('/', (request, response)=>{
  response.send('<h1>hello word</h1>')
})

app.get('/api/tecnicos', (request, response)=>{
  response.json(data)
})

app.get('/api/tecnicos/:id', (request, response)=>{
  const id = Number(request.params.id)
  const tecnico = data.find(tec => tec.id === id)

  if (tecnico){
    response.json(tecnico)
  }else{

    response.status(404).end()
  }
})

app.delete('/api/tecnicos/:id',(request, response)=>{
  const id = Number(request.params.id)
  data = data.filter(tec => tec.id !== id)

  response.status(204).end()
})

app.post('/api/tecnicos', (req, res) =>{
  const tecnico = req.body
  console.log(tecnico)
  
  const ids = data.map(id => id.id)
  const maxId = Math.max(...ids)
  
  const newTecnico = {
    id: maxId + 1,
    nombreTaller: tecnico.nombreTaller,
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident accusantium temporibus numquam voluptatibus libero qui est, molestias ab suscipit rerum.',
    empleados:[
      {
        nombre: 'kevin',
        cargo: 'tecnico',
        area: 'reparaciones',
      },
      {
        nombre: 'stiven',
        cargo: 'assesor',
        area: 'oficina',
      }
    ],
    categoria: tecnico.categoria,
    img: 'https://via.placeholder.com/200x200',

  }
  
  data = [...data, newTecnico]
  res.json(newTecnico)
})




const PORT = 3001
app.listen(PORT, ()=>{
  console.log(`server runing on port ${PORT}`)
})
