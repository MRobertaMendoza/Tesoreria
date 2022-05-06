

function mostrar_egresos(){

 let vFechaSalida = JSON.parse(localStorage.getItem("vFechaSalida"));

  
 ///////////////////////////////////////////////////detalle////////////


let vDetalleSalida = JSON.parse(localStorage.getItem("vDetalleSalida"));


///////////////////////////////////////////////////Monto////////////


let vSalida = JSON.parse(localStorage.getItem("vSalida"));

///////////////////////////////////////////////////Saldo actual////////////


let vSaldoctual = JSON.parse(localStorage.getItem("vSaldoctual"));


  	/*----------Salida por el front --------------------*/
	var outputList = "";


	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vFechaSalida.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vFechaSalida[i]+"</li>";
	}

	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";

	document.getElementById("ImprimirFechaSalida").innerHTML = "La Fecha de Salida es   :"+outputList;


  ////////////////////////////////////////detalle//////////////////////////////////

  var outputList = "";


	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vDetalleSalida.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vDetalleSalida[i]+"</li>";
	}

	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";

	document.getElementById("ImprimirDetalleSalida").innerHTML = "El Detalle del salida es  :"+outputList;


	 ////////////////////////////////////////Monto total//////////////////////////////////

  var outputList = "";


	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vSalida.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vSalida[i]+"</li>";
	}

	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";

	document.getElementById("ImprimirSalidas").innerHTML = "El Saldo de Salida es  :"+outputList;

////////////////////////////////////////////////////////
var outputList = "";


	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vSaldoctual.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vSaldoctual[i]+"</li>";
	}

	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";

	document.getElementById("ImprimirSaldoActual").innerHTML = "El Saldo de actual es  :"+outputList;


}