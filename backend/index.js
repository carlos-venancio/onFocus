import app from './controller/tarefas.controller.js'

// import db from '../backend/'
console.log('Iniciando main')

const task = await app.post('tarefa 2','20/02/2024','28/02/2024','descrição');
console.log(task)