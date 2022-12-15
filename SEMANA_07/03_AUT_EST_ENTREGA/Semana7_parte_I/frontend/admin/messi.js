function calcMdc(){
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    let divisor, dividendo, resto;
    console.log(`${n1} - ${n2}`);
    if(n1>n2){
        dividendo = n1;
        divisor = n2;
    }
    else{
        dividendo = n2;
        divisor = n1;
    }
    resto = dividendo % divisor;
    while(resto !=0){
        dividendo = divisor;
        divisor = resto;
        resto = dividendo % divisor;
        console.log(`${dividendo} - ${divisor} - ${resto}`);
    }
    document.getElementById('resultado').value = divisor;
}