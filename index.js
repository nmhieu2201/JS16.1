//Bài 1:
var total = 0;
for (var i = 0 ; i < 10000 ; i++){
    total += i;
    if (total > 10000){
        var num = i;
        break;
    }
}
document.getElementById("result1").innerHTML = num;
//Bài 2:

function calcBT2 (){
    var getX = +document.getElementById("getX").value;
    var getN = +document.getElementById("getN").value;
    var Sum = 0;
    var T = 1;
    var index = 0;
    if (getN === 0 && getX === 0){
        Sum = 0;
    }
    else
    if (getX ===0){
        Sum = getN - 1;
    }
    else
    if(getN ===0){
        Sum = 1;
    }
    else{
        while (index < getN){
            T *= getX;
            Sum += T;
            index++;
        }
    }
    document.getElementById("result2").innerHTML = Sum;
}
function calcBT3() {
    var getNumber = +document.getElementById("getNumber").value;
    var result = 1;
    if (getNumber === 0){
        result = 1;
    }
    else {
        for (var index1 = 1; index1<=getNumber; index1++) {
            result = result * index1;
        }
    }
    
    document.getElementById("result3").innerHTML = result;
}
function changeBackground(){
    getDivs = document.getElementsByClassName("change-color");
    for (var j = 0; j < getDivs.length; j++) {
        if ((j + 1) % 2 == 0){
            getDivs[j].style.background = "red";
        }
        else { 
            getDivs[j].style.background = "blue";
        }
    }
}