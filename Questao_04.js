class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

const alunos = [
    new Aluno("João", "da Silva", 7, 8.5),
    new Aluno("Maria", "Oliveira", 9, 6),
    new Aluno("Carlos", "Pereira", 5, 7),
    new Aluno("Ana", "Santos", 10, 9),
    new Aluno("Lucas", "Melo", 4, 5)
];

function mostrarResultados() {
    alunos.forEach(aluno => {
        alert(`Nome: ${aluno.nomeCompleto()}\nMédia: ${aluno.media().toFixed(2)}\nSituação: ${aluno.situacao()}`);
    });
}

mostrarResultados();
