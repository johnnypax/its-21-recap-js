function convertiEuroDollaro(valEuro){
    return valEuro * 1.2;
}

// console.log( convertiEuroDollaro(50) );
// console.log( convertiEuroDollaro(60) );
// console.log( convertiEuroDollaro(70) );

let valore = 50;
console.log(`EUR: ${valore} - USD: ${convertiEuroDollaro(valore)}`);