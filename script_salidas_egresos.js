

var vMonto = [];
var vSalida = [];
var vFechaSalida = [];
var vCodigoSalida =[];
var vDetalleSalida =[];


function Egreso(){


/*Capturo el valor almacendo en el cuadro de texto de id=nombre*/
	var salida = document.getElementById("salidas").value;
	//var sal = parseInt(vMonto);
	var total =0;
	var result =0;

	/*Agrego nom a la última posición vacía del vector*/
	vSalida.push(salida);
	
 /////////////////////////cargar vector en locla storage, el objeto vector
 /////se convierte en string 
    localStorage.setItem('vSalida', JSON.stringify(vSalida));

//////////////////////////////////////////////////////fecha/////////////

/*Capturo el valor almacendo en el cuadro de texto de id=nombre*/
	var fecha = document.getElementById("fechaS").value;
	//var sal = parseInt(vMonto);
	var total =0;
	var result =0;

	/*Agrego nom a la última posición vacía del vector*/
	vFechaSalida.push(fecha);
    localStorage.setItem('vFechaSalida', JSON.stringify(vFechaSalida));


     /*----------Salida por el front --------------------*/
	var outputList = "";

	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vFechaSalida.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vFechaSalida[i]+"</li>";
	}

	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";
    document.getElementById("ImprimirFechaSalida").innerHTML = "La fecha de salida es :  "+outputList;


///////////////////////////////////////////////////CODIGO////////////////////


/*Capturo el valor almacendo en el cuadro de texto de id=nombre*/
	var codigo = document.getElementById("codigoS").value;
	//var sal = parseInt(vMonto);
	var total =0;
	var result =0;

	/*Agrego nom a la última posición vacía del vector*/
	vCodigoSalida.push(codigo);
    localStorage.setItem('vCodigoSalida', JSON.stringify(vCodigoSalida));

/*----------Salida por el front --------------------*/
	var outputList = "";

	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vCodigoSalida.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vCodigoSalida[i]+"</li>";
	}

	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";
    document.getElementById("ImprimirCodigoSalida").innerHTML = "El codigo de salida es :  "+outputList;
////////////////////////////////////////////////////DETALLE////////////////////

/*Capturo el valor almacendo en el cuadro de texto de id=nombre*/
	var detalle = document.getElementById("detalleS").value;
	//var sal = parseInt(vMonto);
	var total =0;
	var result =0;

	/*Agrego nom a la última posición vacía del vector*/
	vDetalleSalida.push(detalle);
    localStorage.setItem('vDetalleSalida', JSON.stringify(vDetalleSalida));
     

/*----------Salida por el front --------------------*/
	var outputList = "";

	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vDetalleSalida.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vDetalleSalida[i]+"</li>";
	}

	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";
    document.getElementById("ImprimirDetalleSalida").innerHTML = "El detalle de salida es :  "+outputList;
///////////////////////////////////////////////////////////////////////
for (i=0;i<=vSalida.length-1;i++) {
		
	    
	
    //salida = parseInt(salida);
    //sal = parseInt(sal);
   //vSalida = parseInt(vSalida);
   //vMonto = parseInt(vMonto);

      //vMonto[i]=  mont;
   //total = (parseInt(total) + parseInt(vMonto[i]));
    //vMonto[i] = total;
     //total = vSalida [i];
    result = ( - parseInt(total)+ parseInt(vSalida[i]));
     
    
   	}

document.getElementById("ImprimirSalidas").innerHTML = "salidas  :" + result ;

}
