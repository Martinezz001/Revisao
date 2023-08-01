let pessoa = {nome: 'Matheus',
idade: 17,
gênero: 'masculino'}

console.log(pessoa.nome, pessoa.idade)

let livro = {título: 'Messi: o Gênio Completo',
autor: 'Ariel Senosiain',
ano: 2022}

console.log(livro)

let aluno = {nome: 'Matheus',
nota1: 10,
nota2: 9}

aluno.media= (aluno.nota1 + aluno.nota2) /2

console.log(aluno.media)



function soma (n1,n2){
    return n1+n2
}
console.log(soma(10,10))

function ImprimeMensagem(mensagem){
    return mensagem
}

console.log(ImprimeMensagem('olá 2° Info, noa tarde'));

function media(nota1,nota2,nota3){
    return (nota1+nota2+nota3) /3
}
console.log(`A média de cristina é: ${media(10,9,5)}`);
console.log(`A média de Matheus é: ${media(10,10,10)}`);