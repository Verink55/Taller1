    const ops=document.getElementById("ops");
    
    ops.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.id);
        
        const resp = document.getElementById("respuesta")
        let num1=parseInt(document.getElementById("num1").value);
        let num2=parseInt(document.getElementById("num2").value);
            
        if (e.target.id=="suma") {
                console.log("sumando")
                let texto = `<p>  <i class="fa-solid fa-circle-check"></i>  </p>`;
                let res=num1+num2;
                alert(`El primer numero es ${num1} y el segundo numero ${num2} la suma es ${res}`);
                resp.innerHTML = texto;
                //resp.style.setProperty();
            }

            if (e.target.id=="resta") {
                let texto = `<p> <i class="fa-solid fa-circle-xmark"></i>  </p>`;
                let res=num1-num2;
                alert(`El primer numero es ${num1} y el segundo numero ${num2} la resta es ${res}`);
                resp.innerHTML = texto;
                //resp.style.setProperty();
            }
        
            let op=document.getElementById("operacion").value;
            if(op==1){
                let res=num1+num2;
                alert(`El primer numero es ${num1} y el segundo numero ${num2} la suma es ${res}`);
        
            }else if(op==2){
                let res=num1-num2;
                alert(`El primer numero es ${num1} y el segundo numero ${num2} la resta es ${res}`);
        
            }
        
    })

    

    const btn=document.getElementById("btn-calcular");
    btn.addEventListener('click',function calcular(){

        let num1=parseInt(document.getElementById("num1").value);
        let num2=parseInt(document.getElementById("num2").value);
        let op=document.getElementById("operacion").value;
        if(op==1){
            let res=num1+num2;
            alert(`El primer numero es ${num1} y el segundo numero ${num2} la suma es ${res}`);
    
        }else if(op==2){
            let res=num1-num2;
            alert(`El primer numero es ${num1} y el segundo numero ${num2} la resta es ${res}`);
    
        }else if(op==3){
            let res=num1*num2;
            alert(`El primer numero es ${num1} y el segundo numero ${num2} la multiplicacion es ${res}`);
    
        }else if(op==4){
            let res=num1/num2;
            alert(`El primer numero es ${num1} y el segundo numero ${num2} la division es ${res}`);
        }
    });
