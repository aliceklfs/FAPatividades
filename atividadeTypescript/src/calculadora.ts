let valorVisor: string= '';

function adicionarNumero(numero: string): void{
    valorVisor += numero;
    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = valorVisor;
}


function adicionarOperador(operador: string): void {
    valorVisor += operador;

    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = valorVisor;
}

function calcularOperacao(): void {
    try {valorVisor = eval(valorVisor).toString();

    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = valorVisor;
    } catch (e) {
        const visor = document.getElementById('visor') as HTMLInputElement;
        visor.value = 'Erro';
        valorVisor = '';
    }
}

function limparVisor(): void {
    valorVisor = '';
    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = '';
}

function apagarUltimoCaractere() {
    valorVisor = valorVisor.slice(0, -1);
    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = valorVisor;
}

function calcularPorcentagem() {
    valorVisor ='';
    const visor = parseFloat((document.getElementById('visor') as HTMLInputElement).value);
    const porcentagem = parseFloat((document.getElementById('porcentagem') as HTMLInputElement).value);
    
    return(valorVisor * percentual) / 100;

}