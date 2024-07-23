//01
// let valorconvertido;
// let cotacaoAtual = Number(prompt("Informe o valor da cotação do Dólar: "));

// let carteira = Number(prompt("Informe o valor que você tem em reais R$: "));

// let opcao = Number(prompt("Informe o tipo da conversão \n1 -REAL -> DÓLAR \n2 - DÓLAR -> REAL"));

// if (opcao = 2){
//     valorconvertido = cotacaoAtual + carteira;
// } else {
//     valorconvertido = carteira / cotacaoAtual
// }
// alert(valorconvertido);

// 02
// let numero = Number(prompt('Digite um número: '));

// if (numero % 2 == 0) {
//      alert('O número é Par')
    
// } else {
//      alert('O número é Ímpar')
//      }

//03
// let numero1 = Number(prompt('Digite um número: '));
// let numero2 = Number(prompt('Digite outro número: '));

// if (numero1>numero2) {
//     alert('O Primeiro Número é Maior');
// } else {
//     alert('O Segundo Número é maior');
// }

// 04
// let nota1 = Number(prompt(`Digite a primeira nota: `));
// let nota2 = Number(prompt(`Digite a segunda nota: `));


// if (nota1 >= 6) {
//     alert(`Aluno Aprovado na primeira prova `);
// } else {
//     alert(`Aluno Reprovado na primeira prova `);
//     }

// if (nota2>= 6 ) {
//     alert(`Aluno Aprovado na segunda prova `);
// } else {
//     alert(`Aluno Reprovado na segunda prova `);
// }

//05
// let ingvip = 'VIP' 
// let standard = 'Standard'
// let ingresso = Number(prompt(`Deseja comprar o Ingresso VIP ou o Ingresso Standart? Pressione: \n1 Ingresso ${ingvip} \n2 Ingresso ${standard} `));
// let opcao1 = 'Com Pipoca'
// let opcao2 = 'Sem Pipoca'

// if (ingresso !== 1 && ingresso !== 2) {
//     confirm (`Opção inválida`);

// } else if (ingresso == 1) {
//     let pipoca;
//     pipoca = Number(prompt(`Deseja comprar um combo com Pipoca + refrigerante? Pressione: \n1 ${opcao1} \n2 ${opcao2}`));
//         if (pipoca == 1){
//         alert("Ingresso VIP Com Pipoca");
//     }   else if (pipoca == 2) {
//         alert("Ingresso VIP Sem Pipoca");
//     }
   
// } else if (ingresso == 2) {
//     let pipoca;
//     pipoca = Number(prompt(`Deseja comprar um combo com Pipoca + refrigerante? Pressione: \n1 ${opcao1} \n2 ${opcao2}`));
//         if ( pipoca == 1) {
//         alert("Ingresso Standard Com Pipoca");
//         } else {
//         alert("Ingresso Standar Sem Pipoca");
//         }
// } else {
//     alert("Compra Finalizada");
// }

//06
let nome = prompt("Digite seu Nome: ");
let menu1;
let menu2;
let menu3;
let senha = "Esqueci Minha Senha";
let att = "Atualizar Dados";
let assinatura = "Cancelar Assinatura"
let cancelar = "Cancelar operação"

menu1 = Number.parseInt(prompt(`Olá ${nome}, Escolha uma das Opçôes Abaixo: \n1 ${senha} \n2 ${att} \n3 ${assinatura} \n4 ${cancelar}`));
if ( 0 == menu1 <5 ){
    alert("Opção Inválida");
} else if (menu1 == 1) {
    confirm(`${nome}, para confirmar que é você estaremos fazendo a pergunta de seguraça. `);
    alert(prompt(`Digite o nome do seu primeiro animal de estimação`)); 
    alert(Number(prompt(`${nome}, estaremos enviando o código de acesso para o seu e-mail. \n O códico expira em 10 minutos.`)));
    alert("Operação Finalizada");

} else if (menu1 === 2 ){
    let menu2;
    let email = "Informe Seu Novo Email: "
    let tel = "Informe Seu Novo Telefone: ";
    let emailenum = "Informe Seu Novo Email e Telefone: ";
    
    menu2 = Number.parseInt(prompt(`Escolha uma das Opções Abaixo: \n1 ${email} \n2 ${tel} \n3 ${emailenum}`));
        if (menu2 === 1) {
            alert(prompt(`${email}`));
            alert("Seu Email Foi Atualizado \n Operação Finalizada");
        } else if (menu2 === 2) {
            alert(prompt(`${tel}`));
            alert("Seu Número Foi Atualizado \n Operação Finalizada")    
        } else if (menu2 === 3) {
            alert(prompt(`${emailenum}`));
            alert("Seus Dados Foram Atualizados \n Operação Finalizada");
        } else {
            alert("Opção Inválida");
        }

} else if (menu1 == 3) {
    let menu3
    let sim = "Sim"
    let nao = "Não"

    menu3 = Number.parseInt(prompt(`Deseja Realmente Cancelar a Assinatura? \n1 ${sim} \n2 ${nao} `));
        if (menu3 == 1) {
            alert(prompt("Qual o motivo?"));
            alert("Assinatura Cancelada \n Operação Finalizada");       
        } else {
            alert("Operação Finalizada");
        }
} else {
    alert("Atendimento cancelado");
}

//07
// let salario = Number(prompt`Informe seu Salário mensal:`);
// let htrabalhadas = Number(prompt(`Informe suas Horas trabalhadas no mês: `));
// let vhorareg = salario / htrabalhadas
// let vhoraext = vhorareg * 1.5
// let recebe = salario + vhoraext

// if (htrabalhadas > 160){
//     alert(`Sua remuneração foi de: \n${recebe}`);
// } else {
//     alert(`Seu salário é: \n${salario}`);
// }

