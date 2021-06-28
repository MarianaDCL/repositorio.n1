
    function pipoca(n){
        let pipoca=n
        if ( pipoca==10){console.log("Prato pronto, bom apetite!!!");}
        else if( pipoca <10){console.log("tempo insuficiente");}
        else if( pipoca >=30){console.log('“kabumm”');} 
        else if( pipoca>10){console.log( 'a comida queimou');}
    }
   
    function macarrao(n){
        let macarrao= n
        if (macarrao==8){console.log("Prato pronto, bom apetite!!!");}
        else if(macarrao <8){console.log("tempo insuficiente");}
        else if(macarrao >=24){console.log('“kabumm”');}
        else if(macarrao>8){console.log( 'a comida queimou');}
    }

    function carne(n){
        let carne = n
        if(carne ==15){console.log("Prato pronto, bom apetite!!!");}
        else if(carne <15){console.log("tempo insuficiente");}
        else if(carne >=45){console.log('“kabumm”');}
        else if(carne >15){console.log('a comida queimou');}
    }

    function feijao(n){
        let feijao= n
        if(feijao ==12){console.log("Prato pronto, bom apetite!!!");}
        else if(feijao <12){console.log("tempo insuficiente");}
        else if(feijao >35){console.log('kabumm');}
        else if(feijao >12){console.log('a comida queimou');}
    }

    function brigadeiro (n){
        let brigadeiro = n
        if (brigadeiro==8){console.log("Prato pronto, bom apetite!!!");}
        else if(brigadeiro <8){console.log("tempo insuficiente");}
        else if(brigadeiro >23){console.log('“kabumm”');}
        else if(brigadeiro>8){console.log( 'a comida queimou');}
    }

console.log(pipoca(27));
console.log(brigadeiro(8));
console.log(carne(10));


