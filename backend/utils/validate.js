export const validateTask = (tarefa, error) => {

    const dateFormat = /^\d{4}([-/])\d{2}\1\d{2}$/;
    const timeFormat = /^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/;;

    const timer = tarefa.dataInicio.toLocaleString().split(', ');

    if (tarefa.tituloTarefa < 10) error('Informe uma tarefa com pelo menos 10 caractres')

    else if (tarefa.descricao < 50) error('A descrição deve conter menos de 50 caractres')

    else if (!dateFormat.test(timer[0])) error('Informe uma data de inicio num formato válido yyyy-mm-dd')

    else if (!timeFormat.test(timer[1])) error('Informe uma hora de inicio num formato válido: hh-mm e dentro das 24(23:59-00:00) horas do dia')

    else if (!timeFormat.test(timer[1])) error('Informe a duração num formato válido: hh-mm e dentro das 24(23:59-00:00) horas do dia')

    tarefa.status = addState(timer[0]);

    return tarefa
}

// adiciona um status padrão
const addState = (dataInicio) => new Date(dataInicio).valueOf() < Date.now() ? 'pendente' : 'em breve'