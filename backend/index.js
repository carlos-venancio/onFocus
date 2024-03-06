import app from './controller/tarefas.controller.js'

// import db from '../backend/'
console.log('Iniciando main')

app.post('tarefa 2','2024/04/28, 15:00','02:00','descrição').then(async () => console.log(await app.getAll()));
// let task = await app.delete(31)
// task = await app.cancelar(2)
// let alterarTask = await app.alterar(32,'tarefa hard','2024/02/30, 16:00','3:00','desc')
// console.log(alterarTask)


// await app.concluir(32)

// let gettask = await app.getOne(32)
// console.log(gettask)