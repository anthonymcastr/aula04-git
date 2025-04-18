import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();

while(true){
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Aumentar marcha");
    console.log("4 - Reduzir marcha");
    console.log("5 - Estatísticas do veículo");
    console.log("0 - Finalizar");

    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;
    
            case 2:
                frear(carro);
                break;

            case 3:
                aumentarMarcha(carro);
                break;

            case 4:
                reduzirMarcha(carro);
                break;
            case 5:
                estatisticas(carro);    
                break;
            case 0:
                console.log("Saindo...");
        default:
            break;
    }
}

console.table(carro);

function acelerar(veiculo: Veiculo): void{
    if(veiculo.marchaAtual != 0){
    veiculo.velocidade += veiculo.potencia*0.1;
    console.log(veiculo.velocidade);
}}

function criaVeiculo(): Veiculo{
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}

function frear(veiculo: Veiculo): void{
    if(veiculo.marchaAtual != 0){
        veiculo.velocidade -= veiculo.potencia*0.1;
        console.log(veiculo.velocidade);
        
}}

function aumentarMarcha(veiculo: Veiculo): void{
    if(veiculo.marchaAtual < veiculo.numeroMarchas){
        veiculo.marchaAtual++;
        console.log(veiculo.marchaAtual);
    }else{
        console.log("Já está na marcha máxima!");
    }
}

function reduzirMarcha(veiculo: Veiculo): void{
    if(veiculo.marchaAtual > 0){
        veiculo.marchaAtual--;
        console.log(veiculo.marchaAtual);
    }else{
        console.log("Já está na marcha mínima!");
    }
}

function estatisticas(veiculo: Veiculo): void{
    console.log("Marca: " + veiculo.marca);
    console.log("Modelo: " + veiculo.modelo);
    console.log("Potência: " + veiculo.potencia);
    console.log("Número de marchas: " + veiculo.numeroMarchas); 
    console.log("Marcha atual: " + veiculo.marchaAtual);
    console.log("Velocidade: " + veiculo.velocidade);

}
