function mostrarNotas() {
    const alunos = [
        { nome: "João da Silva", nota1: 7, nota2: 8.5 },
        { nome: "Maria Oliveira", nota1: 9, nota2: 6 },
        { nome: "Carlos Pereira", nota1: 5, nota2: 7 }
    ];

    alunos.forEach(aluno => {
        const nota1Ponderada = aluno.nota1 * 0.6;
        const nota2Ponderada = aluno.nota2 * 0.4;
        const notaTotal = nota1Ponderada + nota2Ponderada;

        alert(`Nome: ${aluno.nome}\nNota 1: ${aluno.nota1}\nNota 2: ${aluno.nota2}`);
        alert(`Nota total de ${aluno.nome}: ${notaTotal}`);
    });
}

mostrarNotas();
