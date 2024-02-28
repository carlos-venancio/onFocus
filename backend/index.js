import app from './controller/tarefas.controller.js'

// import db from '../backend/'
console.log('Iniciando main')

// let task = await app.post('tarefa 2','2024/02/28, 15:00','2:00','descrição');
let gettask = await app.getOne(32)
// let task = await app.delete(6)
// let task = await app.get()
// task = await app.cancelar(2)
console.log(gettask)