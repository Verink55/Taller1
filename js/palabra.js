    const btn=document.getElementById("btn-calcular");
    btn.addEventListener('click',(e)=>{

        e.preventDefault();
        let op=parseInt(document.getElementById("operacion").value);
        let pal=document.getElementById("palabra").value;
        if(op==1){
            alert(`la longitud de la palabra es ${pal.length}  `);
            
        }else if(op==2){
            alert(`la palabra en mayusculas es ${pal.toUpperCase()}  `);
            
        }else if(op==3){
            alert(`la palabra en minusculas es ${pal.toLowerCase()}  `);
            
        }else if(op==4){
            alert(`El primer caracter es ${pal.charAt(0)}  `);
        }
    });
