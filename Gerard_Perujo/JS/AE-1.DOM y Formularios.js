

function camposFormulario(){
    let campo = [
        { texto : 'Nombre '},
        { texto : 'Primer Apellido '},
        { texto : 'Segundo Apellido '},
        { texto : 'DNI '},
        { texto : 'Direccion '}, 
        { texto : 'Telefono '}    
    ]  
    return campo;
}

function cargarRadios(){
    let radio = [
        { tipo : 'radio',
          nombre : 'modelos',
          valor : '1',
          texto : ' Rail 9.9 CXR ' },
        { tipo : 'radio',
          nombre : 'modelos',
          valor : '2',
          texto : ' Slash 9.9 AXS T-Type' },
        { tipo : 'radio',
          nombre : 'modelos',
          valor : '3',
          texto : ' Fuel EXe 9.9 X0 AXS T-Type ' },
        { tipo : 'radio',
          nombre : 'modelos',
          valor : '4',
          texto : ' Supercaliber SLR 9.9 XX AXS ' },
        { tipo : 'radio',
          nombre : 'modelos',
          valor : '5',
          texto : ' Top Fuel 9.9 XX AXS T-Type ' },
    ]
    return radio;
}

function cargarCheckBox(){
    let box = [
        { tipo : 'checkbox',
          nombre : 'articulos',
          valor : 'km',
          texto : ' Cuenta Kilometros ' },
        { tipo : 'checkbox',
          nombre : 'articulos',
          valor : 'botella',
          texto : ' Botellero ' },
        { tipo : 'checkbox',
          nombre : 'articulos',
          valor : 'mochila',
          texto : ' Mochila Pequeña ' },
        { tipo : 'checkbox',
          nombre : 'articulos',
          valor : 'pedales',
          texto : ' Pedales Automaticos ' },
        { tipo : 'checkbox',
          nombre : 'articulos',
          valor : 'rueda',
          texto : ' Mousse ' },
    ]
    return box;
}

function cargarSelect(){
    let select = [
        { valor : 'visa',
          texto : ' Visa '  },
        { valor : 'mastercard',
          texto : ' MasterCard'},
        { valor : 'banco',
          texto : ' Transferencia Bancaria '}    
    ]
    return select
}

function cargarFormulario(){

    /** Cargo las diferentes funciones que necessito */

    let campos = camposFormulario();
    let option = cargarSelect();
    let box = cargarCheckBox()
    let radio = cargarRadios();


     /** creo saltos de linia para cuando los necesite */

     let br2 = document.createElement("br")
     let br3 = document.createElement("br")
     let br4 = document.createElement("br")
     let br5 = document.createElement("br")
     let br6 = document.createElement("br")
     let br8 = document.createElement("br")

    /**Creo el formulario con sus atributos */
    let form = document.createElement("form")
    let fAtr1 = document.createAttribute("action")
    fAtr1.value = "procesarPeticion.jsp"
    let fAtr2 = document.createAttribute("method")
    fAtr2.value = "post"
    form.setAttributeNode(fAtr1)
    form.setAttributeNode(fAtr2)

    /** Creo el primer campo del formulario donde estaran todos los datos del cliente */
    let fieldset1 = document.createElement("fieldset")
    let fiAtr1 = document.createAttribute("width")
    fiAtr1.value = "50%"
    fieldset1.setAttributeNode(fiAtr1)
    let legend1 = document.createElement("legend")
    let personales = document.createTextNode("Datos Personales")
    legend1.appendChild(personales)
    let div1 = document.createElement("div")


    /** Hago un for para recorrer todos los campos del formulario */

    for (let campo of campos){
        let label1 = document.createElement("label")
        let lAtr1 = document.createAttribute("for")
        lAtr1.value = campo.texto
        label1.setAttributeNode(lAtr1)
        let nombre1 = document.createTextNode(campo.texto)
        label1.appendChild(nombre1)
    
        let input1 = document.createElement("input")
        let i1Atr1 = document.createAttribute("id")
        let i1Atr2 = document.createAttribute("type")
        let i1Atr3 = document.createAttribute("name")
        i1Atr1.value = campo.texto
        i1Atr2.value = "text"
        i1Atr3.value = campo.texto
        input1.setAttributeNode(i1Atr1)
        input1.setAttributeNode(i1Atr2)
        input1.setAttributeNode(i1Atr3)
    
        let br1 = document.createElement("br")

        div1.appendChild(label1)
        div1.appendChild(input1)
        div1.appendChild(br1)
    }



    /** Creamos la zona para los Radios */

    let fieldset3 = document.createElement("fieldset")
    let legend3 = document.createElement("legend")
    let radAtr = document.createAttribute("for")
    radAtr.value = "modelos"
    legend3.setAttributeNode(radAtr)
    let textleg = document.createTextNode("Modelos de bicicletas")
    legend3.appendChild(textleg)

    let div3 = document.createElement("div")

    for( let opcion of radio){
        let rainp = document.createElement("input")
        let ralab = document.createElement("label")
        let texlab = document.createTextNode(opcion.texto)
        ralab.appendChild(texlab)

        let raAtr1 = document.createAttribute("type")
        let raAtr2 = document.createAttribute("name")
        let raAtr3 = document.createAttribute("value")
        raAtr1.value = opcion.tipo
        raAtr2.value = opcion.nombre
        raAtr3.value = opcion.valor
        rainp.setAttributeNode(raAtr1)
        rainp.setAttributeNode(raAtr2)
        rainp.setAttributeNode(raAtr3)

        let br9 = document.createElement("br")

        div3.appendChild(rainp)
        div3.appendChild(ralab)
        div3.appendChild(br9)
    }

    /** Creamos la zona donde colgaremos las imagenes */

    let fieldset4 = document.createElement("fieldset")
    let legend4 = document.createElement("legend")
    let txtleg2 = document.createTextNode("Imagenes de Muestra")
    legend4.appendChild(txtleg2)
    let div4 = document.createElement("div")
    let divAtr = document.createAttribute ("style")
    divAtr.value = "text-align:center"
    div4.setAttributeNode(divAtr)

    let a1 = document.createElement("a")
    let hrf1 = document.createAttribute ("href")
    let targ1 = document.createAttribute("target")
    hrf1.value = "https://www.trekbikes.com/es/es_ES/bicicletas/bicicletas-de-monta%C3%B1a/c/B300/#breadcrumbs"
    targ1.value = "_blank"
    a1.setAttributeNode(hrf1)
    a1.setAttributeNode(targ1)

    let img1 = document.createElement("img")
    let imAtr = document.createAttribute("src")
    imAtr.value = "img/bici1.png"
    img1.setAttributeNode(imAtr)

    a1.appendChild(img1)
    div4.appendChild(a1)

    let a2 = document.createElement("a")
    let hrf2 = document.createAttribute("href")
    let targ2 = document.createAttribute("target")
    hrf2.value = "https://www.trekbikes.com/es/es_ES/bicicletas/bicicletas-de-monta%C3%B1a/c/B300/#breadcrumbs"
    targ2.value = "_blank"
    a2.setAttributeNode(hrf2)
    a2.setAttributeNode(targ2)

    let img2 = document.createElement("img")
    let src = document.createAttribute("src")
    src.value = "img/bici2.png"
    img2.setAttributeNode(src)

    a2.appendChild(img2)
    div4.appendChild(a2)

    let a3 = document.createElement("a")
    let hrf3 = document.createAttribute("href")
    let targ3 = document.createAttribute("target")
    hrf3.value = "https://www.trekbikes.com/es/es_ES/bicicletas/bicicletas-de-monta%C3%B1a/c/B300/#breadcrumbs"
    targ3.value = "_blank"
    a3.setAttributeNode(hrf3)
    a3.setAttributeNode(targ3)

    let img3 = document.createElement("img")
    let src2 = document.createAttribute("src")
    src2.value = "img/bici3.png"
    img3.setAttributeNode(src2)

    a3.appendChild(img3)
    div4.appendChild(a3)


    /** Creamos la zona de los campos checkbox */
    let fieldset2 = document.createElement("fieldset")
    let legend2 = document.createElement("legend")
    let laBoxAtr = document.createAttribute("for")
    laBoxAtr.value = "articulos"
    legend2.setAttributeNode(laBoxAtr)
    let laBoxTex = document.createTextNode("Articulos Opcionales Bicicleta")
    legend2.appendChild(laBoxTex)
   
    let div2 = document.createElement("div")
   

    for (let opcion of box){
        let inpBox = document.createElement("input")
        let txtopc = document.createElement("label")
        let textbox = document.createTextNode(opcion.texto)
        txtopc.appendChild(textbox)
        let inpBoxAtr1 = document.createAttribute("type")
        let inpBoxAtr2 = document.createAttribute("name")
        let inpBoxAtr3 = document.createAttribute("value")
        inpBoxAtr1.value = opcion.tipo
        inpBoxAtr2.value = opcion.nombre
        inpBoxAtr3.value = opcion.valor
        inpBox.setAttributeNode(inpBoxAtr1)
        inpBox.setAttributeNode(inpBoxAtr2)
        inpBox.setAttributeNode(inpBoxAtr3)
        

        let br7 = document.createElement("br")
        
        div2.appendChild(inpBox)
        div2.appendChild(txtopc)
        div2.appendChild(br7)
    }



    /** Creamos una zona de campos select */

    let laSele = document.createElement("label")
    let laSeleAtr = document.createAttribute("for")
    laSeleAtr.value = "forma_de_pago"
    laSele.setAttributeNode(laSeleAtr)
    let textoSele = document.createTextNode("Formas de Pago")
    laSele.appendChild(textoSele)

    let select = document.createElement("select")
    let selectAtr = document.createAttribute("name")
    selectAtr.value = "forma_de_pago"
    select.setAttributeNode(selectAtr)
    for (let opciones of option){
        let opcion = document.createElement("option")
        let opAtr = document.createAttribute("value")
        opAtr.value = opciones.valor
        opcion.setAttributeNode(opAtr)
        let textop = document.createTextNode(opciones.texto)
        opcion.appendChild(textop)
        
        select.appendChild(opcion)
    }



    /**Creamos el text Area para escribir unas observaciones */

    let laAre = document.createElement("label")
    let laAreAtr = document.createAttribute("for")
    laAreAtr.value = "observaciones"
    laAre.setAttributeNode(laAreAtr)
    let observaciones = document.createTextNode("Añadir Peticiones Extras")
    laAre.appendChild(observaciones)

    let area = document.createElement("textarea")
    let tAtr1 = document.createAttribute("name")
    let tAtr2 = document.createAttribute("id")
    let tAtr3 = document.createAttribute("cols")
    let tAtr4 = document.createAttribute("rows")
    let tAtr5 = document.createAttribute("style")
    tAtr1.value = "observaciones"
    tAtr2.value = "observaciones"
    tAtr3.value = "80"
    tAtr4.value = "5"
    tAtr5.value = "resize: none"
    area.setAttributeNode(tAtr1)
    area.setAttributeNode(tAtr2)
    area.setAttributeNode(tAtr3)
    area.setAttributeNode(tAtr4)
    area.setAttributeNode(tAtr5)

    

    /** Creamos el boton de enviar formulario */
    let div5 = document.createElement("div")
    let divAtr1 = document.createAttribute("style")
    divAtr1.value = "text-align:center"
    div5.setAttributeNode(divAtr1)
    let input2 = document.createElement("input")
    let i2Atr1 = document.createAttribute("type")
    let i2Atr2 = document.createAttribute("name")
    let i2Atr3 = document.createAttribute("value")
    i2Atr1.value = "submit"
    i2Atr2.value = "accion"
    i2Atr3.value = "Enviar"
    input2.setAttributeNode(i2Atr1)
    input2.setAttributeNode(i2Atr2)
    input2.setAttributeNode(i2Atr3)
    div5.appendChild(input2)



    /** Enlazo todos las etiquetas de cabecera del formulario */
    fieldset1.appendChild(legend1)
    fieldset1.appendChild(div1)
    form.appendChild(fieldset1)
    fieldset3.appendChild(legend3)
    fieldset3.appendChild(div3)
    form.appendChild(fieldset3)
    fieldset4.appendChild(legend4)
    fieldset4.appendChild(div4)
    form.appendChild(fieldset4)
    fieldset2.appendChild(legend2)
    fieldset2.appendChild(div2)
    form.appendChild(fieldset2)
    form.appendChild(br6)
    form.appendChild(laSele)
    form.appendChild(br4)
    form.appendChild(select)
    form.appendChild(br5)
    form.appendChild(laAre)
    form.appendChild(br3)
    form.appendChild(area)
    form.appendChild(br2)
    form.appendChild(div5)




    primeraParte.appendChild(form)


   
}



/** Aqui creo la funcion para validar el formulario para el segundo requerimiento */

function validarFormulario(){

  let ok = true
  let comprobacion1 = 0
  let comprobacion2 = 0
  let comprobacion3 = 0
  let total = 0
  let pizza = 0
  let ingredientes = 0
  let ing1 = 0
  let ing2 = 0
  let ing3 = 0
  let ing4 = 0

  if(nombre.value.trim() == ""){
    alert("El campo Nombre esta vacio")
  }
  if(direccion.value.trim() == ""){
    alert("El campo Direccion esta vacio")
  }
  if(telefono.value.trim() == ""){
    alert("El campo Telefono esta vacio")
  }
  if(mail.value.trim() == ""){
    alert("El campo Email esta vacio")
  }

  if ((nombre.value.trim() != "") && (direccion.value.trim() != "")
      && (telefono.value.trim() != "") && (mail.value.trim() != "")){
        comprobacion1 = 1
  }
   

  /** Me creo una serie de variables para coger todos los paramentros
   * que tiene el elemento en cuestion
   */
  let piz1 = document.getElementById('peque')
  let piz2 = document.getElementById('medio')
  let piz3 = document.getElementById('grande')
  /** Una vez tengo los parametros con otra variable cogo el valor
   * que tiene ese elemento en cuestion
   */
  let valor1 = piz1.value
  let valor2 = piz2.value
  let valor3 = piz3.value

  /** Me creo una array donde estaran todos los valores que he recogido */
  let valores = [valor1, valor2, valor3]
  
  let contador = 0
  let acumulador = 0

  /** y con un for recorro la array y con un switch dependiendo del valor que este seleccionado
   * te dare el precio de la pizza y ademas el parametro comprobacion sera = 1
   */
  for (let tipo of valores){
    switch (tipo){
      case "Pequeña":
        if(document.getElementById('peque').checked){
          pizza = 5
          comprobacion2 = 1
          acumulador = -1
        }
      break;
      case "Mediana":
        if(document.getElementById('medio').checked){
          pizza = 10
          comprobacion2 = 1
          acumulador = -1
        }
        break;
      case "Grande":
        if(document.getElementById('grande').checked){
          pizza = 15
          comprobacion2 = 1
          acumulador = -1
        }
        break;
    }
    acumulador += contador;
    contador ++;
    if (acumulador == 3){
      alert("Debes escoger un tamaño de pizza")
    }
    
  }  
  
  /** Antes de hacerlo con una array y recorrerlo con un for lo habia echo con un if
   * pero no me convencio el codigo ya que lo veia muy tosco y enrevesado
 
  if((document.getElementById('peque').checked) || 
    (document.getElementById('medio').checked) || 
    (document.getElementById('grande').checked))  {
      if(document.getElementById('peque').checked){
        pizza = 5
      }
      if(document.getElementById('medio').checked){
        pizza = 10
      }
      if (document.getElementById('grande').checked){
       pizza = 15
      }
      comprobacion2 = 1
    }else{
    alert("Debes seleccionar almenos un Tamaño de Pizza")
  }
  */

 /**  
  if((document.getElementById('nue').checked) ||
    (document.getElementById('miel').checked) ||
    (document.getElementById('hue').checked) ||
    (document.getElementById('bac').checked)) {
      if(document.getElementById('nue').checked){
        ing1 = 1
      }
      if(document.getElementById('miel').checked){
         ing2 = 1
      }
      if (document.getElementById('hue').checked){
         ing3 = 1
      }
      if (document.getElementById('bac').checked){
         ing4 = 1
      }
      comprobacion3 = 1
    }else{
      alert("Debes seleccionar almenos un Ingrediente")
    }
   */ 
  
  let ingr1 = document.getElementById('nue')
  let ingr2 = document.getElementById('miel')
  let ingr3 = document.getElementById('hue')
  let ingr4 = document.getElementById('bac')
  let vaIngr1 = ingr1.value
  let vaIngr2 = ingr2.value
  let vaIngr3 = ingr3.value
  let vaIngr4 = ingr4.value

  let difIngr = [vaIngr1, vaIngr2, vaIngr3, vaIngr4]
  
  let acumulador2 = 0
  let contador2 = 0
  for(let tipos of difIngr){
    switch (tipos){
      case "Nue":
        if(document.getElementById('nue').checked){
          ing1 = 1
          comprobacion3 = 1
          acumulador2 = -1
        }
        break;
      case "Miel":
        if(document.getElementById('miel').checked){
          ing2 = 1
          comprobacion3 = 1
          acumulador2 = -1
        }
        break;
      case "Hue":
        if (document.getElementById('hue').checked){
          ing3 = 1
          comprobacion3 = 1
          acumulador2 = -1
        }
        break;
      case "Bac":
        if (document.getElementById('bac').checked){
          ing4 = 1
          comprobacion3 = 1
          acumulador2 = -1
        }
        break;
    }
    acumulador2 += contador2;
    contador2 ++;
    if (acumulador2 == 6){
      alert("Debes escoger almenos un ingrediente")
    }
  }

      ingredientes = ing1 + ing2 + ing3 + ing4
      
      total = pizza + ingredientes

      /** Aqui si todas las comprobaciones se cumplen te devuelve el importe total 
       * del coste de la pizza y ademas te deja enviar el formulario, en caso contrario
       * de que alguna comprobacion no se cumpliera porque faltara algun campo, el formulario
       * no se enviaria
       */
      if ((comprobacion1 && comprobacion2 && comprobacion3) == 1){
        alert("El importe total a pagar es: " + total + "€")
        return ok
      }
     return false
  }

 
/**creo la funcion window.onload para cargar el javascript una vez se haya cargado la pagina completamente */
window.onload = function(){
      cargar.onclick = cargarFormulario;
      /** Esta es la funcion que llama a la funcion validar una vez pulsas sobre el boton enviar comanda  */
      encoman.onclick = function(e){
        if(!validarFormulario()){
          e.preventDefault()
        }
      }
      

    
}








    

