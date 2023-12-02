function maior(){
    let v1 = document.getElementById("valor1").value
    let v2 = document.getElementById("valor2").value

    let resultado = ""
    console.log(v1,v2)
    if ((v1=="" || v1== null || v1==NaN) || (v2=="" || v2== null || v2==NaN) ){
        alert ("Há campos vazios")
    }else {
        if (v1>v2){
            resultado = "verdade"
        }    
        else{
            resultado ="falso"
        }
       
    }
   
    document.getElementById("resultado").value = resultado

}

function menor(){
    let v1 = document.getElementById("valor1").value
    let v2 = document.getElementById("valor2").value

    let resultado = ""
    if (v1<v2){
        resultado = "verdade"
    }    
    else{
        resultado ="falso"
    }
    document.getElementById("resultado").value = resultado

}

function igual(){
    let v1 = document.getElementById("valor1").value
    let v2 = document.getElementById("valor2").value

    let resultado = ""
    if (v1==v2){
        resultado = "verdade"
    }    
    else{
        resultado ="falso"
    }
    document.getElementById("resultado").value = resultado

}

function diferente(){
    let v1 = document.getElementById("valor1").value
    let v2 = document.getElementById("valor2").value

    let resultado = ""
    if (v1!=v2){
        resultado = "verdade"
    }    
    else{
        resultado ="falso"
    }
    document.getElementById("resultado").value = resultado

}


document.getElementById("btn_maior").addEventListener('click',function(event){
    maior()
})
