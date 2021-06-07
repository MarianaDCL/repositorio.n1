let listaDeCompras = ['arroz','feijão','batata','cenoura']
console.log(listaDeCompras);
listaDeCompras.pop();//retira um elemento do final da array
console.log(listaDeCompras);
listaDeCompras.push("brócolis");//para inserir elementos no final 
console.log(listaDeCompras);
listaDeCompras.shift();//para retirar elementos do inicio
console.log(listaDeCompras);
listaDeCompras.unshift('couve');//para colocar elementos no inicio
console.log(listaDeCompras);
listaDeCompras.indexOf('batata');//retorna o indici do elemento 
console.log(listaDeCompras.indexOf('batata'));
let join = listaDeCompras.join('-')//trasforma a variavel e uma string,podemos escolher a separação entre elas
console.log(join);
listaDeCompras.includes('couve');//retorna um retorna um booleano, retornar verdadeiro se encontrou o que estava procurando,falso se não
console.log(listaDeCompras.includes('couve'));
