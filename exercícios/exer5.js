//ex 1
function Restaurante(nome,cardapio){
    this.restaurante = nome;
    this.menu = cardapio;        
    return console.log('Boas-Vindas, ');
};
let BoasVindas= new Restaurante('italia',['macarrão','macarrão','macarrão']);
console.log(BoasVindas);

//ex 2
let numeroPrimos = [1, 3, 5, 11];
let numeros = [...numeroPrimos, 13, 41, 89];
console.log(numeros);
//ex 3
function maiorNumero(...nambers){
return  Math.min(...nambers);
}
console.log(maiorNumero(10,2,3,4,5,6,7,8,9));