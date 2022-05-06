

function mostrar_ingresos(){

 let vFecha = JSON.parse(localStorage.getItem("vFecha"));

  
 ///////////////////////////////////////////////////detalle////////////


let vDetalle = JSON.parse(localStorage.getItem("vDetalle"));


///////////////////////////////////////////////////Monto////////////


let vMonto = JSON.parse(localStorage.getItem("vMonto"));


  	/*----------Salida por el front --------------------*/
	var outputList = "";


	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vFecha.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vFecha[i]+"</li>";
	}

	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";

	document.getElementById("ImprimirFecha").innerHTML = "La Fecha de Ingreso es   :"+outputList;


  ////////////////////////////////////////detalle//////////////////////////////////

  var outputList = "";


	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vDetalle.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vDetalle[i]+"</li>";
	}

	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";

	document.getElementById("ImprimirDetalle").innerHTML = "El Detalle del Ingreso es  :"+outputList;


	 ////////////////////////////////////////Monto total//////////////////////////////////

  var outputList = "";


	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vMonto.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vMonto[i]+"</li>";
	}

	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";

	document.getElementById("ImprimirMonto").innerHTML = "El Monto de Ingreso es  :"+outputList;

}