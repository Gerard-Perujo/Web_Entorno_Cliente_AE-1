window.addEventListener("load", function(){
    //Identificando elementos
    let inputNombre = document.getElementById("nombre");
    let inputDireccion = document.getElementById("direccion");
    let inputTelefono = document.getElementById("telefono");
    let inputEmail = document.getElementById("email");

    let clicando=document.getElementById("enviar");

    clicando.addEventListener("click", validacion);

    function validacion(){
        if(inputNombre.value.trim()==""){
            alert("[ERROR] El nombre es obligatorio");
            return false;
        }

        if(inputDireccion.value.trim()==""){
            alert("[ERROR] La dirección es obligatoria");
            return false;
        }

        if(inputTelefono.value.trim()==""){
            alert("[ERROR] El teléfono es obligatorio");
            return false;
        }

        if(inputEmail.value.trim()==""){
            alert("[ERROR] El correo electrónico es obligatorio");
            return false;
        }

        let tamano=document.getElementsByName("size");
        let seleccionado=false;
        let total =0;
            for(let i=0; i<tamano.length; i++){
                if(tamano[i].checked){
                    seleccionado=true;
                    total += parseInt(tamano[i].value);
                    break;
                } 
            }

        if(!seleccionado){
            alert("[ERROR] Debe escoger un tamaño de pizza");
            return false;
        }

        let cajitaFeliz = document.getElementsByName("ingredientes");
        let chosen = false;
        let total2 =0;
            
            for (let i = 0; i < cajitaFeliz.length; i++) {
                if (cajitaFeliz[i].checked) {
                    total2 += parseInt(cajitaFeliz[i].value);
                    chosen = true;
                    
                    continue;
                }
            }
            if (!chosen){ 
                alert("[ERROR] Debe seleccionar al menos un ingrediente.");  
                return false;
            }
        if (!(inputNombre.value.trim()=="") && !(inputDireccion.value.trim()=="") && !(inputTelefono.value.trim()=="")
            && !(inputEmail.value.trim()=="") && (seleccionado=true) && (chosen=true)){
                alert("🤌🏼¡Preparando su pedido!🤌🏼");
                alert('El coste de su pedido es ' + (total+total2)+"💶");
                return true; 
            }    
         
    }   
})



