//Para cargar las funciones se añade el siguiente escuchador, es decir, cuando cargue la página se carga también lo que hay
//dentro de la función inicio.
window.addEventListener("load",inicio);

    //Dentro de la función inicio se crea todo el DOM del ejercicio:
    function inicio() {
        var divi= document.createElement("div");
       var formulario =document.createElement("form");
       var campo=document.createElement("fieldset");
       var leyenda=document.createElement("legend");
       var etiqueta=document.createElement("label")
       //se añade contenido a leyenda
       var contenidoLeyenda=document.createTextNode("Por favor rellene los siguientes datos personales: ")
      //se añade contenido a la variable leyenda
      leyenda.appendChild(contenidoLeyenda);
       //se añade cotenido a label
       var contenidoLabel=document.createTextNode("DNI");
       //el contenido se añade a la variable etiqueta
       etiqueta.appendChild(contenidoLabel);
       //campo input
       var campoDni=document.createElement("input");
       //atributos de campoDni
       campoDni.type="text"
       campoDni.id="dni"
       campoDni.name="DNI"


      //se añade al fieldset 1
      campo.appendChild(leyenda);
        campo.appendChild(etiqueta);
       campo.appendChild(campoDni);
       
       //SE AÑADE AL FORMULARIO
       
       formulario.appendChild(campo);
       
      //se añade al div
        divi.appendChild(formulario);
       //SE AÑADE AL BODY
       document.body.appendChild(divi); 

    }
    
