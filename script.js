function Calc(){
    var num1 = document.getElementById("val1").value;
    var num2 = document.getElementById("val2").value;
    var opt = document.getElementById("opt").value;
    
    var ans = eval(num1 + opt + num2);
    document.getElementById("ans").value = ans;
}

function clearScreen(){
    document.getElementById("ans").value=''
}