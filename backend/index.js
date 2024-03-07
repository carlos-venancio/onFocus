import controller from './controller/tarefas.controller.js'
import express from 'express'
import cors from 'cors'

const app = express()

// configurações no servidor
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rotas 
app.get('/', controller.getAll)
app.get('/:id', controller.getOne)
app.post('/', controller.post)
app.delete('/:id', controller.delete)
app.patch('/:id/concluir', controller.concluir)
app.patch('/:id/cancelar', controller.cancelar)
app.put('/:id', controller.alterar)

app.listen(process.env.PORT || 5000, () => console.log('Servidor rodando'))