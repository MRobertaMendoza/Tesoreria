
/*Declaro el vector*/
var vFechaE = [];
var vCodigoE = [];
var vDetalleE = [];
var vMonto = [];
var vSalida = [];


function main(){
	//alert("Ejecutando main");

	/*Capturo el valor almacendo en el cuadro de texto de id=nombre*/
	var fec = document.getElementById("fecha").value;

	/*Agrego nom a la última posición vacía del vector*/
	vFechaE.push(fec);

     /////////////////////////cargar vector en locla storage, el objeto vector
 /////se convierte en string 
    localStorage.setItem('vFecha', JSON.stringify(vFechaE));

//////////////////////////////////////////////////////////////////////////////fechaaaaa//////////////////////
/*Capturo el valor almacendo en el cuadro de texto de id=nombre*/
	var cod = document.getElementById("codigo").value;

	/*Agrego nom a la última posición vacía del vector*/
	vCodigoE.push(cod);
    localStorage.setItem('vCodigoE', JSON.stringify(vCodigoE));


////////////////////////////////////////////////////////////////////////////////codigoooooooo/////////////
	/*Capturo el valor almacendo en el cuadro de texto de id=nombre*/
	var det = document.getElementById("detalle").value;

	/*Agrego nom a la última posición vacía del vector*/
	vDetalleE.push(det);

   localStorage.setItem('vDetalleE', JSON.stringify(vDetalleE));

///////////////////////////////////////////////////////////////////////////////////detalleeeeeeee///////////////
	

/*Capturo el valor almacendo en el cuadro de texto de id=nombre*/
	var mont = document.getElementById("monto").value;
	var total =0;

	/*Agrego nom a la última posición vacía del vector*/
	vMonto.push(mont);

	/////////////////////////cargar vector en locla storage, el objeto vector
 /////se convierte en string 
    localStorage.setItem('vMonto', JSON.stringify(vMonto));

//////////////////////////////////////////Monto Ingresado ///////////////////////


	/*----------Salida por el front --------------------*/
	var outputList = "";

	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vFechaE.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vFechaE[i]+"</li>";
	}

	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";

	document.getElementById("ImprimirFechaE").innerHTML = "Fecha  :"+outputList;
/////////////////////////////////////////////////////////////////////////////////////////fechaaaaaaaaaaaaaa/////////

/*----------Salida por el front --------------------*/
	var outputList = "";

	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vCodigoE.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vCodigoE[i]+"</li>";
	}

	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";
    document.getElementById("ImprimirCodigoE").innerHTML = "El codigo :  "+outputList;

	



/////////////////////////////////////////////////////////codigooooooooooooooooooo////////////////////////////////////////

/*----------Salida por el front --------------------*/
	var outputList = "";

	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vDetalleE.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vDetalleE[i]+"</li>";
	}

	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";
    document.getElementById("ImprimirDetalleE").innerHTML = "El Detalle :  "+outputList;


/////////////////////////////////////////////////////////////////////////////////////debeeeeeeeeeeeeeeeeeee/////////


var outputList = "";


	/* Utilizo un bucle para crear una lista*/
	for(var i = 0 ; i < vMonto.length ; i++){
		/*Agrego los elementos de la lista*/
		outputList = outputList + "<li>"+vMonto[i]+"</li>";
		
	 //vMonto[i]=mont;
         //suma = suma + vMonto[i];
     }


	/*Completo las etiquetas de la lista*/
	outputList = "<ol>" + outputList + "</ol>";

	///////////////////////////////////////////////////////////////////////////////



for (i=0;i<=vMonto.length-1;i++) {
		
	
         // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    //total = (total == null || total == undefined || total == "") ? 0 : total;
	

	//mont = parseInt(mont);
    /* Esta es la suma. */
    mont = parseInt(mont);
      //vMonto[i]=  mont;
    total = (parseInt(total) + parseInt(vMonto[i]));
    
}
  
document.getElementById("ImprimirMonto").innerHTML = "monto  :"+ total ;

}
