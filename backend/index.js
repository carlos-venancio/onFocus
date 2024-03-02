import app from './controller/tarefas.controller.js'

// import db from '../backend/'
console.log('Iniciando main')

// let task = await app.post('tarefa 2','2024/02/28, 15:00','2:00','descrição');
// let task = await app.delete(31)
let task = await app.get()
// task = await app.cancelar(2)
// let alterarTask = await app.alterar(32,'tarefa hard','2024/02/30, 16:00','3:00','desc')
// console.log(alterarTask)
console.log(task)

// await app.concluir(32)

// let gettask = await app.getOne(32)
// console.log(gettask)