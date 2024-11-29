function aluno(nome, nota){
    this.nome = nome
    this.nota = nota

    console.log(nome)
    console.log(nota)
}

aluno("Italo", 10)

console.log("------------------------------------------------")

function aluno2(nome, nota) {
    this.nome = nome;
    this.nota = nota;
    
    this.dados_anonimo = function() {
        setTimeout(function() {
            this.nome = "x"
            this.nota = 5
            console.log(this.nome);
            console.log(this.nota);
        }, 2000);
    };

    console.log("------------------------------------------------")

    this.dados_arrow = function() {
        setTimeout(()=> {
            console.log(this.nome); // assim não buga o this
            console.log(this.nota); // assim não buga o this
        }, 2000);
    };
}

const all = new aluno2("Gabriel", 10)
all.dados_anonimo()
all.dados_arrow()
