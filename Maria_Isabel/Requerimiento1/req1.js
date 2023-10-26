/*Para cargar las funciones se añade el siguiente escuchador, es decir, cuando cargue la página se carga también lo que hay
dentro de la función inicio.*/

window.addEventListener("load",inicio);

    //Dentro de la función inicio se crea todo el DOM del ejercicio:
    function inicio() {
        //Se crea la primera estructura básica del DOM
        var divi= document.createElement("div");
        var formulario =document.createElement("form");
        var campo1=document.createElement("fieldset");
        var leyenda=document.createElement("legend");
        //Se añade contenido a leyenda
        var contenidoLeyenda=document.createTextNode("Por favor rellene los siguientes datos personales: ")
        //Se añade el contenido de la leyenda a la variable leyenda
        leyenda.appendChild(contenidoLeyenda);

    //--------------------------------------------DNI-------------------------------------------------------
        //Se crea la etiqueta/label del dni:
        var etiquetaDni=document.createElement("label")
        //Se crea el texto que precede a la caja de texto del dni
        var cajaDni=document.createTextNode("DNI:");
        //A la variable etiqueta del dni se le añade este texto
        etiquetaDni.appendChild(cajaDni);
        //Se crea el elemento/campo input del dni
        var campoDni=document.createElement("input");
        //Dentro de ese input, recogido en la variable campoDni, se añaden los siguientes atributos:
        campoDni.type="text"
        campoDni.id="dni"
        campoDni.name="DNI"

        //Salto de línea para añadir nueva etiqueta/label
        var br1=document.createElement("br");

    //--------------------------------------------Nombre y apellidos------------------------------------------------
        //Se crea la etiqueta/label del nombre:
        var etiquetaNombre=document.createElement("label")
        //Se crea el texto que precede a la caja de texto del nombre y apellidos
        var cajaNombre=document.createTextNode("Nombre y apellidos:");
        //A la variable etiqueta del nombre y apellidos se le añade este texto
        etiquetaNombre.appendChild(cajaNombre);
        //Se crea el elemento/campo input del nombre y los apellidos
        var campoNombre=document.createElement("input");
        //Dentro de ese input, recogido en la variable campoNombre, se añaden los siguientes atributos:
        campoNombre.type="text"
        campoNombre.id="nombre"
        campoNombre.name="nombre"

        //Salto de línea para añadir nueva etiqueta/label
        var br2=document.createElement("br");

    //--------------------------------------------Dirección------------------------------------------------
        //Se crea la etiqueta/label de la dirección:
        var etiquetaDireccion=document.createElement("label")
        //Se crea el texto que precede a la caja de texto de la dirección
        var cajaDirección=document.createTextNode("Dirección:");
        //A la variable etiqueta de la dirección se le añade este texto
        etiquetaDireccion.appendChild(cajaDirección);
        //Se crea el elemento/campo input de la dirección
        var campoDireccion=document.createElement("input");
        //Dentro de ese input, recogido en la variable campoDireccion, se añaden los siguientes atributos:
        campoDireccion.type="text"
        campoDireccion.id="direccion"
        campoDireccion.name="direccion"

        //Salto de línea para añadir nueva etiqueta/label
        var br3=document.createElement("br");

    //--------------------------------------------Telefono------------------------------------------------
        //Se crea la etiqueta/label del telefono:
        var etiquetaTelefono=document.createElement("label")
        //Se crea el texto que precede a la caja de texto del teléfono
        var cajaTelefono=document.createTextNode("Teléfono:");
        //A la variable etiqueta del teléfono se le añade este texto
        etiquetaTelefono.appendChild(cajaTelefono);
        //Se crea el elemento/campo input del teléfono
        var campoTelefono=document.createElement("input");
        //Dentro de ese input, recogido en la variable campoTeléfono, se añaden los siguientes atributos:
        campoTelefono.type="tel"
        campoTelefono.id="telefono"
        campoTelefono.name="telefono"

        //Salto de línea
        var br4=document.createElement("br");
    
    //-------------------------------------------------------------------------------------------------------
        //Al fieldset 1 se le añaden los elementos anteriores 
        campo1.appendChild(leyenda);
        campo1.appendChild(etiquetaDni);
        campo1.appendChild(campoDni);
        campo1.appendChild(br1);
        campo1.appendChild(etiquetaNombre);
        campo1.appendChild(campoNombre);
        campo1.appendChild(br2);
        campo1.appendChild(etiquetaDireccion);
        campo1.appendChild(campoDireccion);
        campo1.appendChild(br3);
        campo1.appendChild(etiquetaTelefono);
        campo1.appendChild(campoTelefono);
        campo1.appendChild(br4);
       
        //Al formulario se le añade el fieldset 1
        formulario.appendChild(campo1);
        //Al div se le añade el formulario
        divi.appendChild(formulario);
        //Al body se le añade el div
        document.body.appendChild(divi); 

    }
    
