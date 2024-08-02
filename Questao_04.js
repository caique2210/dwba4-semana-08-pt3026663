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
    new Aluno("Lucas", "Pereira", 9, 9.5),
    new Aluno("Carlos", "Eduardo", 8, 9),
    new Aluno("Caique", "Salmaso", 7, 9),
    new Aluno("Gabriel", "Reis", 9, 8.5)
];

function mostrarResultados() {
    alunos.forEach(aluno => {
        alert(`Nome: ${aluno.nomeCompleto()}\nMédia: ${aluno.media().toFixed(2)}\nSituação: ${aluno.situacao()}`);
    });
}

mostrarResultados();
