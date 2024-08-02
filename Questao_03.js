function mostrarNotas() {
    const alunos = [
        { nome: "João da Silva", nota1: 7, nota2: 8.5 },
        { nome: "Lucas Pereira", nota1: 9, nota2: 9.5 },
        { nome: "Carlos Eduardo", nota1: 8, nota2: 9 }
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
