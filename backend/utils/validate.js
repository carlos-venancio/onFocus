export const validateTask = (tarefa, error) => {

    // formatação esperada da data
    const dateFormat = /^\d{4}([-/])\d{2}\1\d{2}$/;
    // formatação esperada da hora
    const timeFormat = /^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/;;

    // divide em data e hora para facilitar a validação
    const timer = tarefa.dataInicio.toLocaleString().split(', ');

    // garante que o titulo da tarefa tenha menos de 25 caracteres para economizar espaço
    if (tarefa.tituloTarefa.length > 25) error('Informe uma tarefa com menos de 25 caractres')

    // garante que a descrição tenha menos de 50 caracteres para economizar espaço
    else if (tarefa.descricao.length > 50) error('A descrição deve conter menos de 50 caractres')

    // testa a data de inicio
    else if (!dateFormat.test(timer[0])) error('Informe uma data de inicio num formato válido yyyy-mm-dd')

    // testa a hora de inicio
    else if (!timeFormat.test(timer[1])) error('Informe uma hora de inicio num formato válido: hh-mm e dentro das 24(23:59-00:00) horas do dia')

    // testa a duração
    else if (!timeFormat.test(tarefa.duracao)) error('Informe a duração num formato válido: hh-mm e dentro das 24(23:59-00:00) horas do dia')

    // adiciona um status dependenco da data 
    tarefa.status = addState(timer[0]);

    // retorna a tarefa validada com status
    return tarefa
}

// adiciona um status padrão
const addState = (dataInicio) => new Date(dataInicio).valueOf() < Date.now() ? 'pendente' : 'em breve'