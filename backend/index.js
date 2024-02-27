import app from './controller/tarefas.controller.js'

// import db from '../backend/'
console.log('Iniciando main')

// let task = await app.post('tarefa 2','20/02/2024','28/02/2024','descrição');
// let task = await app.delete(6)
let task = await app.get()
// task = await app.cancelar(2)
console.log(task)