//const age = 24
//const name = 'Hadassa'
//const isDeveloper = true

//console.log(age);
//console.log(name);
//console.log(isDeveloper);

//calcule o imc de um indivíduo utilizando a formula
//imc = peso/altura*

//variável
//const peso = 65;
//const altura = 1.62;
//const imc = peso/(altura*altura)
//console.log()

//var prompt = require("prompt-sync")();

// const name = prompt('digite seu nome');
// console.log(name);

// const name = prompt('digite seu nome:');
// const weight = prompt(`olá ${name}, digite seu peso:`);
// console.log(`${name}, o seu peso é ${weight}`);

// function showData() {
//   const name = prompt("digite seu nome: ");
//   const weight = prompt(`olá ${name}, digite seu peso:`);
//   console.log(`${name} , o seu peso é ${weight}`);
// }

//showData(){


//estruturas de controle

//function verifyCnh(){
    //const name = prompt('digite seu nome:');
    //const age = prompt(`´olá ${name}, digite sua idade:`);

    //if(age >=18){
        //console.log(`´olá ${name}, você pode tirar a habilitação!`);
    //} else { 
       // console.log(`´olá ${name}, você  não pode tirar a habilitação!`);
    
//}
//}
//verifyCnh()


//atividade js dia 25/06/24
//implementar em JavaScript um programa que, a partir da cotação do dólar e do valor em reais, calcula o valor equivalente em dólares.

//preciso incluir um input para a entrada da info
let valorConvertido;
let cotacaoAtual = Number(prompt('Informe a cotação do dolar:'));
let carteira = Number(prompt('informe o valor que você tem:'));

let opcao = (
    Number(prompt('informe o tipo da conversão: \n1 - REAL -> DOLAR -> \n2 - REAL ->'));
)
if (opcao == 2) {
    valorConvertido = cotacaoAtual * carteira;
} else {
    valorConvertido = carteira / cotacaoAtual;

alert(valorConvertido); 
}


//Faça o programa que leia duas notas
let nota1 = Number(prompt('informe uma nota:'));
let nota2 = Number(prompt('informe a segunda nota:'));

function calculaNota(nota1, nota2) {
    if(nota >= 6) {
        alert('Aluno aprovado na primeira prova!');
    } else {
        alert('Aluno reprovado na primeira prova!');
    
    }
    if (nota2 <=6) {
        alert('aluno aprovado na primeira prova!');
    }
}


1 - Implementar em JavaScript um programa que, a partir da cotação do dólar e do valor em reais, calcula o valor equivalente em dólares.
No console
Como um alerta
E no documento do HTML


2 - Faça um programa em JS que leia um número inteiro informado pelo usuário e diga se esse número é par ou ímpar.
Sugestão: Use o % (resto da divisão inteira).

3 - Faça um programa que leia dois números e informe qual é o maior.

Ex. 
numero1 = 20
numero2 = 30

resposta = ‘O número2 é o maior’ 


4 - Faça um programa que leia as notas de duas provas e informe se o aluno foi aprovado (nota maior ou igual a 6) ou reprovado (nota menor que 6) em cada uma das provas.

5 - Um cinema oferece aos seus clientes dois tipos de ingressos: o ingresso VIP (com uma poltrona) e um ingresso standard (cadeira comum). É possível optar também por um combo promocional de pipoca e refrigerante ou não. Faça um programa que solicite ao usuário o tipo de ingresso que ele deseja (digitando 1 para VIP e 2 para standard), bem como se ele deseja o combo de pipoca (opção 1) ou não (opção 2). O programa deverá imprimir uma mensagem para o usuário de acordo com as seguintes regras:
Ingresso VIP sem pipoca: “Valor: 80 reais”;
Ingresso VIP com pipoca: : “Valor: 110 reais”;
Ingresso standard sem pipoca: “Valor: 40 reais”;
Ingresso standard com pipoca: “Valor: 70 reais”;


6 - Escreva um código que simula um Chat. Nesse código, o usuário criará um menu interativo com 3 opções de resposta. Em cada resposta terá que haver outras formas de interação final. Antes de terminar, o código deve informar que irá ser encerrado.

7 - A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.

Escreva um programa que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, 
caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). 


8 - Elabore uma calculadora simples, levando em consideração dois números de entrada pelo usuário e uma opção de operação.
Pode ser utilizado o conceito do switch/case, IF/ELSE… e laço se já souber! 



