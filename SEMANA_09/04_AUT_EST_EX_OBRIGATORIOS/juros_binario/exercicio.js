function valor_presente(){
    let PVF = document.getElementById("PVF").value;
    let i1 = document.getElementById('i').value;
    let i = (i1/100)+1.00;
    let n = document.getElementById('n').value;

    document.getElementById('exit1').innerHTML = PVF/(Math.pow(i,n));
    console.log(Math.pow(i,n));
    console.log(i);
    console.log(i1);
    console.log(n);
}

function valor_futuro(){
    let PVF = document.getElementById("PVF").value;
    let i1 = document.getElementById('i').value;
    let i = (i1/100)+1.00;
    let n = document.getElementById('n').value;

    document.getElementById('exit1').innerHTML = PVF*(Math.pow(i,n));
}

function juros_simples(){
    let M = document.getElementById("M");
    let P = document.getElementById('P').value;
    let i = document.getElementById('i1').value;
    let n = document.getElementById('n1').value;

    document.getElementById('exit2').innerHTML = P*(1+(i*n));
    document.getElementById('exit3').innerHTML = P*i*n;
}