const prompt = require('prompt-sync')();

let pessoas = [];

let contador = prompt('Digite qtd vezes: ');

let nome = "";
let idade = 0;
let telefone = "";
let cidade = "";



for (i = 0; i < contador; i++) {
    nome = prompt("Digite o nome: ");
    idade = Number(prompt("Digite a idade (18 a 24): "));
    telefone = prompt("Digite o telefone: ");
    cidade = prompt("Digite a cidade: ");
    // Adiciona no array
    let pessoa = {
    nome: nome,
    idade: idade,
    telefone: telefone,
    cidade: cidade
};
    pessoas.push(pessoa);
}

for (let i = 0; i < pessoas.length; i++) {

    console.log("\nCadastro " + (i + 1));
    console.log("Nome: " + pessoas[i].nome);
    console.log("Idade: " + pessoas[i].idade);
    console.log("Telefone: " + pessoas[i].telefone);
    console.log("Cidade: " + pessoas[i].cidade);
}

