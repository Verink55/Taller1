function calcular(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let num3=parseInt(document.getElementById("num3").value);
    
    if(num1 == num2 && num1 == num3){
        alert(`Es un rectangulo equilatero`);

    }else if(num1== num2 || num1== num3 || num2== num3 ){
        alert(`Es un rectangulo Isosceles`);

    }else{
        alert(`Es un rectangulo Escaleno`);
    }
    
}