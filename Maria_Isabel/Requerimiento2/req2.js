/*
Todos los campos tienen que estar rellenos de tipo texto deben de estar rellenos para que sean válidos, 
además debe de elegir obligatoriamente un tamaño de la pizza y al menos un ingrediente para ella.

Al pulsar el botón de procesar el pedido, se mostrará el precio total del pedido calculándolo en base a los siguientes parámetros:

5€ para la pizza pequeña
10€ para la pizza mediana
15€ para la pizza grande
Cada ingrediente elegido tendrá un valor de 1€
*/


/*Se van a validar los campos obligatorios*/
/*
window.addEventListener("load",init);
    function init(){

        //zona para declarar variables
        let inputNombre = document.getElementById("nombre");
        let inputDireccion = document.getElementById("direccion");
        let inputTelefono = document.getElementById("telefono");
        let inputEmail = document.getElementById("email");
        let inputmiformulario=getElementById("miFormulario");

//zona recoger eventos
document.getElementById("miFormulario").addEventListener("click", manejarClic)
//miformulario=addEventListener("click", manejarClic);
   
   function manejarClic(){
    validacion();
    }
    
}
 //zona para declarar funciones
    function validacion(){
        if(nombre.value.trim()==""){
            alert("[ERROR] El nombre es obligatorio");
            return false;
        }
        

        if(nombre.value.trim()==""){
            alert("[ERROR] El nombre es obligatorio");
            return false;
        }
        if(direccion.value.trim()==""){
            alert("[ERROR] La dirección es obligatoria");
            return false;
        }
        if(telefono.value.trim()==""){
            alert("[ERROR] El teléfono es obligatorio");
            return false;
        }
        if(email.value.trim()==""){
            alert("[ERROR] El correo electrónico es obligatorio");
            return false;
        }

        tamano=document.getElementsByName("size");
        var seleccionado=false;
        for(var i=0; i<tamano.lenght; i++){
            if(tamano[i].checked){
                seleccionado=true;
                break;
            }
        }

        if(!seleccionado){
            alert("[ERROR] Debe escoger un tamaño de pizza");
            return false;
        }

        if(!ingredientes.checked){
            alert("[ERROR] Debe escoger al menos un ingrediente extra");
            return false;
        }
        alert("Preparando su pedido...");
        return true;
    }
*/

/*
window.addEventListener("load", function(){
    //Identificando elementos
    let inputNombre = document.getElementById("nombre");
    let inputDireccion = document.getElementById("direccion");
    let inputTelefono = document.getElementById("telefono");
    let inputEmail = document.getElementById("email");
    let inputSmall=document.getElementById("small");
    let inputMedium=document.getElementById("medium");
    let inputLarge=document.getElementById("large");
    let inputSausage=document.getElementById("sausage");
    let inputMeat=document.getElementById("meat");
    let inputHoney=document.getElementById("honey");
    let inputHam=document.getElementById("ham");

    /*
    inputNombre.addEventListener("click", validarFormulario);

    function validarFormulario(){
        console.log("He hecho click")
    }
    FUNCIONA!!!
    */

   //zona para declarar funciones
   /*
   function validacion(){
    if(inputNombre.value.trim()==""){
        alert("[ERROR] El nombre es obligatorio");
        return false;
    }
})
*/


window.addEventListener("load", function(){
    //Identificando elementos
    let inputNombre = document.getElementById("nombre");
    let inputDireccion = document.getElementById("direccion");
    let inputTelefono = document.getElementById("telefono");
    let inputEmail = document.getElementById("email");
    /*
    const inputSmall=document.getElementById("small");
    inputSmall=5;
    const inputMedium=document.getElementById("medium");
    inputMedium=10;
    const inputLarge=document.getElementById("large");
    inputLarge=15;
    const inputSausage=document.getElementById("sausage");
    inputSausage=1;
    const inputMeat=document.getElementById("meat");
    inputMeat=1;
    const inputHoney=document.getElementById("honey");
    inputHoney=1;
    const inputHam=document.getElementById("ham");
    inputHam=1;
    let inputIngredientes=document.getElementById("ingredientes")
    */

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
            for(let i=0; i<tamano.length; i++){
                if(tamano[i].checked){
                    seleccionado=true;
                    break;
                } 
            }

        if(!seleccionado){
            alert("[ERROR] Debe escoger un tamaño de pizza");
            return false;
        }

        let cajitaFeliz = document.getElementsByName("ingredientes");
        let chosen = false;
            
            for (let i = 0; i < cajitaFeliz.length; i++) {
                if (cajitaFeliz[i].checked) {
                    chosen = true;
                    break;
                }
            }
            if (!chosen){ 
                alert("[ERROR] Debe seleccionar al menos un ingrediente.");  
                return false;
            }
        if (!(inputNombre.value.trim()=="") && !(inputDireccion.value.trim()=="") && !(inputTelefono.value.trim()=="")
            && !(inputEmail.value.trim()=="") && (seleccionado=true) && (chosen=true))
                alert("🤌🏼¡Preparando su pedido!🤌🏼");
                return true; 
                
            
        
    }
    /*function suma(){
        alert('holita')
    }
    */

    
})



