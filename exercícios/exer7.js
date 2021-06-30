//ex 1
let numerosPares = [2,4,6,8,10];
let imapares = numerosPares.map(function(n){
    return n-1                                  
});
console.log(imapares);
//ex 2
let nomesM = ['Maria','Mariana','Marcelo','Marcela','Maria'];
let nome = nomesM.filter(function(nomesM){
  return nomesM == 'Maria'
});
console.log(nome);
//ex 3
let numeros = [0,1,2,3,4,5,6,7,8,9];
let string = numeros.reduce(function(acumulador, numero){
    return acumulador+'-'+numero
});
console.log(string);
//ex 4
let animais = ['cachorro','cavalo','gato','coruja','peixe'];
let nomeAnimais = animais.forEach(function(animais){
    console.log('O animal é '+animais);
})
console.log(nomeAnimais);