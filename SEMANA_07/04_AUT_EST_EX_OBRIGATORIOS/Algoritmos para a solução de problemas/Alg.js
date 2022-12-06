function Multable(){
    let mn = parseFloat($('#mn').val());
    let fn = parseFloat($('#fn').val());
    let tn = parseFloat($('#tn').val());
    let res = '';

    for(let v=fn; v<=tn; v++){
        res += mn +"x" +v+"="+
        mn*v+"<br/>";
    }
    document.getElementById('exit').innerHTML = res;
};


function palindrome(){
    let pali = $('#pali').val();
    //let pali = 123;
    let num = pali.split("").reverse().join("");
    console.log(num);
    var exit1;
    /*var paliStr=pali.toString();
    var paliStr2=paliStr.reverse();
    var exit1 = document.getElementById('exit1');*/

    if(pali == num){
        document.getElementById('exit1').innerHTML = "It's a palindrome! :)";
    }else{
        document.getElementById('exit1').innerHTML = "It's not a palindrome! :(";
    }

    /*var originalpal = pal;
    var reversedpal = 0;
    var remainder;
    var exit1 = document.getElementById('exit1');

    while (originalpal != 0){
        remainder = originalpal % 10;
        reversedpal = reversedpal * 10 + remainder;
        originalpal /= 10;
    }

    if(pal == reversedpal){
        exit1.innerHTML = "It's a palindrome! :)"
    }
    else{
        exit1.innerHTML = "It's not a palindrome! :("
    }*/
}

function PI(){
    var n1 = parseInt($('#n1').val());
    //var exit2 = document.getElementById('exit2');
    let res = '';

    for(let v=1; v<=n1; v++){
        if(v%3 == 0){
            res += v + ', PI, '
        }else{
            res += v + ', '
        }
        $("#exit2").text(res);
    }
    
}

function Tile(){
    let height = $('#height').val();
    let width = $('#width').val();
    let tile = $('#tile').val();
    let tileh = (height)/tile;
    let tilew = (width)/tile;
    let wh = (tileh)*(tilew);
    let res = ((wh)*0.05)+(wh);
    Math.ceil(res);

    $("#exit3").text(res);
}

$(document).ready(function () {
    
    $(exit1).click(function (e) { 
        e.preventDefault();
        palindrome()
    });
    $(exit2).click(function (e) { 
        e.preventDefault();
        PI()
    });
    $(exit3).click(function (e) { 
        e.preventDefault();
        Tile()
    });
});