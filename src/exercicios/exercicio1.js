function calculaTotal(quantidade){
    if(quantidade <= 10)
        return quantidade * 1.1;
    if(quantidade <= 20)
        return 11 + (quantidade - 10);
    if(quantidade > 20)
        return 21 + ((quantidade - 20) * 0.9);
}

console.log(calculaTotal(5));
console.log(calculaTotal(15));
console.log(calculaTotal(25));